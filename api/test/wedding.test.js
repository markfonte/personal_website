const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const fs = require('fs');
const os = require('os');
const path = require('path');
const Database = require('better-sqlite3');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wedding-test-'));
const contentFile = path.join(dir, 'content.json');
const guestsFile = path.join(dir, 'guests.json');
process.env.WEDDING_PASSWORD = 'test-password';
process.env.WEDDING_CONTENT_FILE = contentFile;
process.env.WEDDING_GUESTS_FILE = guestsFile;
process.env.DB_PATH = path.join(dir, 'test.sqlite3');

fs.writeFileSync(contentFile, JSON.stringify({ home: { date: 'Test date' } }));
fs.writeFileSync(guestsFile, JSON.stringify([
  {
    id: 'alex-family',
    guests: [
      { id: 'alex', name: 'Álex Example' },
      { id: 'sam', name: "Sam O'Example" },
    ],
  },
  {
    id: 'jordan-party',
    guests: [
      { id: 'jordan', name: 'Jordan Sample' },
      { id: 'jordan-guest', plusOne: true },
    ],
  },
  {
    id: 'anna-party',
    guests: [{ id: 'anna', name: 'Анна Иванова' }],
  },
]));
const schema = fs.readFileSync(path.join(__dirname, '..', 'db', 'sql', 'create_personal_website.sql'), 'utf8');
new Database(process.env.DB_PATH).exec(schema).close();

const app = require('../app.js');
let server;
let base;

before(async () => {
  server = app.listen(0);
  await once(server, 'listening');
  base = `http://localhost:${server.address().port}/api/wedding`;
});

after(() => {
  server.close();
  fs.rmSync(dir, { recursive: true, force: true });
});

async function call(method, route, { body, cookie, ip } = {}) {
  const headers = {};
  if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
  }
  if (cookie) {
    headers.Cookie = cookie;
  }
  if (ip) {
    headers['X-Forwarded-For'] = ip;
  }
  const res = await fetch(base + route, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const json = res.headers.get('content-type')?.includes('json') ? await res.json() : null;
  return { status: res.status, json, setCookie: res.headers.get('set-cookie') };
}

async function login() {
  const res = await call('POST', '/login', { body: { password: 'test-password' }, ip: '198.51.100.1' });
  assert.equal(res.status, 200);
  return res.setCookie.split(';')[0];
}

function jordanResponse(overrides = {}) {
  return {
    partyId: 'jordan-party',
    guests: [
      { id: 'jordan', attending: true, dietary: 'No peanuts' },
      { id: 'jordan-guest', attending: true, name: 'Taylor Guest', dietary: '' },
    ],
    song: 'September',
    note: 'Congrats!',
    ...overrides,
  };
}

test('content needs the password', async () => {
  assert.equal((await call('GET', '/content')).status, 401);
  const wrong = await call('POST', '/login', { body: { password: 'nope' }, ip: '198.51.100.2' });
  assert.equal(wrong.status, 401);

  const cookie = await login();
  const content = await call('GET', '/content', { cookie });
  assert.equal(content.status, 200);
  assert.equal(content.json.home.date, 'Test date');
  assert.equal(content.json.rsvpOpen, true);
});

test('a malformed cookie counts as logged out', async () => {
  const res = await call('GET', '/content', { cookie: 'wedding_auth=%E0%A4%A' });
  assert.equal(res.status, 401);
});

test('login lockout only applies to the client that failed', async () => {
  for (let i = 0; i < 10; i++) {
    const res = await call('POST', '/login', { body: { password: 'nope' }, ip: '203.0.113.1' });
    assert.equal(res.status, 401);
  }
  const locked = await call('POST', '/login', { body: { password: 'test-password' }, ip: '203.0.113.1' });
  assert.equal(locked.status, 429);
  const other = await call('POST', '/login', { body: { password: 'test-password' }, ip: '203.0.113.2' });
  assert.equal(other.status, 200);
});

test('RSVP needs the password', async () => {
  assert.equal((await call('POST', '/rsvp/find', { body: { name: 'Jordan Sample' } })).status, 401);
  assert.equal((await call('POST', '/rsvp', { body: jordanResponse() })).status, 401);
});

test('finding a party matches whole names in any alphabet, ignoring case, accents and punctuation', async () => {
  const cookie = await login();
  const found = await call('POST', '/rsvp/find', { body: { name: '  alex   EXAMPLE ' }, cookie });
  assert.equal(found.status, 200);
  assert.deepEqual(found.json.party, {
    id: 'alex-family',
    responded: false,
    note: '',
    song: '',
    guests: [
      { id: 'alex', name: 'Álex Example', plusOne: false, attending: null, dietary: '' },
      { id: 'sam', name: "Sam O'Example", plusOne: false, attending: null, dietary: '' },
    ],
  });
  assert.equal((await call('POST', '/rsvp/find', { body: { name: 'sam oexample' }, cookie })).status, 200);
  assert.equal((await call('POST', '/rsvp/find', { body: { name: 'анна иванова' }, cookie })).status, 200);
  assert.equal((await call('POST', '/rsvp/find', { body: { name: 'Alex' }, cookie })).status, 404);
  assert.equal((await call('POST', '/rsvp/find', { body: { name: 'Nobody Here' }, cookie })).status, 404);
  assert.equal((await call('POST', '/rsvp/find', { body: {}, cookie })).status, 404);
});

test('a party can save an RSVP and change it later', async () => {
  const cookie = await login();
  assert.equal((await call('POST', '/rsvp', { body: jordanResponse(), cookie })).status, 200);

  let party = (await call('POST', '/rsvp/find', { body: { name: 'Jordan Sample' }, cookie })).json.party;
  assert.equal(party.responded, true);
  assert.equal(party.song, 'September');
  assert.equal(party.note, 'Congrats!');
  assert.deepEqual(party.guests, [
    { id: 'jordan', name: 'Jordan Sample', plusOne: false, attending: true, dietary: 'No peanuts' },
    { id: 'jordan-guest', name: 'Taylor Guest', plusOne: true, attending: true, dietary: '' },
  ]);

  const declined = jordanResponse({
    guests: [
      { id: 'jordan', attending: true, dietary: 'No peanuts' },
      { id: 'jordan-guest', attending: false, name: 'Taylor Guest', dietary: 'Vegan' },
    ],
    note: '',
  });
  assert.equal((await call('POST', '/rsvp', { body: declined, cookie })).status, 200);
  party = (await call('POST', '/rsvp/find', { body: { name: 'jordan sample' }, cookie })).json.party;
  assert.equal(party.note, '');
  assert.deepEqual(party.guests[1], {
    id: 'jordan-guest', name: '', plusOne: true, attending: false, dietary: '',
  });
});

test('invalid RSVPs are rejected without saving anything', async () => {
  const cookie = await login();
  const before = (await call('POST', '/rsvp/find', { body: { name: 'Alex Example' }, cookie })).json.party;
  const alex = (attending, extra = {}) => ({ id: 'alex', attending, ...extra });
  const sam = { id: 'sam', attending: true };
  const invalid = [
    { partyId: 'no-such-party', guests: [alex(true), sam] },
    { partyId: 'alex-family', guests: [alex(true)] },
    { partyId: 'alex-family', guests: [alex(true), alex(true)] },
    { partyId: 'alex-family', guests: [alex('yes'), sam] },
    { partyId: 'alex-family', guests: [alex(true), { id: 'jordan', attending: true }] },
    { partyId: 'alex-family', guests: [alex(true, { dietary: 7 }), sam] },
    { partyId: 'alex-family', guests: [alex(true), sam], note: 'x'.repeat(1001) },
    jordanResponse({ guests: [
      { id: 'jordan', attending: true },
      { id: 'jordan-guest', attending: true, name: '  ' },
    ] }),
  ];
  for (const body of invalid) {
    assert.equal((await call('POST', '/rsvp', { body, cookie })).status, 400, JSON.stringify(body));
  }
  const after = (await call('POST', '/rsvp/find', { body: { name: 'Alex Example' }, cookie })).json.party;
  assert.deepEqual(after, before);
});

test('RSVP stays closed until the guest list exists', async () => {
  const cookie = await login();
  fs.renameSync(guestsFile, guestsFile + '.hidden');
  try {
    assert.equal((await call('GET', '/content', { cookie })).json.rsvpOpen, false);
    assert.equal((await call('POST', '/rsvp/find', { body: { name: 'Jordan Sample' }, cookie })).status, 404);
  } finally {
    fs.renameSync(guestsFile + '.hidden', guestsFile);
  }
});
