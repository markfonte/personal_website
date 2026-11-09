var fs = require('fs');
var path = require('path');
const db = require('./index.js');

const GUESTS_FILE = process.env.WEDDING_GUESTS_FILE || path.join(__dirname, '..', 'wedding_guests.json');
const LIMITS = { name: 100, dietary: 300, song: 200, note: 1000 };

function isOpen() {
  return fs.existsSync(GUESTS_FILE);
}

function readParties() {
  try {
    return JSON.parse(fs.readFileSync(GUESTS_FILE, 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') {
      return [];
    }
    throw err;
  }
}

function normalizeName(name) {
  return name
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/['’.]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

function findParty(name) {
  const wanted = typeof name === 'string' ? normalizeName(name) : '';
  if (!wanted) {
    return null;
  }
  const matches = readParties().filter((party) =>
    party.guests.some((guest) =>
      [guest.name].concat(guest.aliases || []).some((known) => typeof known === 'string' && normalizeName(known) === wanted)
    )
  );
  return matches.length === 1 ? matches[0] : null;
}

function getParty(partyId) {
  return readParties().find((party) => party.id === partyId) || null;
}

function withResponses(party) {
  const saved = db.prepare('SELECT note, song FROM rsvp_parties WHERE partyid = ?').get(party.id);
  const rows = db.prepare('SELECT guestid, attending, name, dietary FROM rsvp_guests WHERE partyid = ?').all(party.id);
  const answers = new Map(rows.map((row) => [row.guestid, row]));
  return {
    id: party.id,
    responded: Boolean(saved),
    note: (saved && saved.note) || '',
    song: (saved && saved.song) || '',
    guests: party.guests.map((guest) => {
      const answer = answers.get(guest.id);
      return {
        id: guest.id,
        name: guest.plusOne ? (answer && answer.name) || '' : guest.name,
        plusOne: Boolean(guest.plusOne),
        attending: answer ? Boolean(answer.attending) : null,
        dietary: (answer && answer.dietary) || '',
      };
    }),
  };
}

function readText(value, max) {
  if (value === undefined || value === null) {
    return '';
  }
  if (typeof value !== 'string') {
    return undefined;
  }
  const text = value.trim();
  return text.length <= max ? text : undefined;
}

function parseResponse(party, body) {
  if (!body || !Array.isArray(body.guests) || body.guests.length !== party.guests.length) {
    return null;
  }
  const note = readText(body.note, LIMITS.note);
  const song = readText(body.song, LIMITS.song);
  if (note === undefined || song === undefined) {
    return null;
  }
  const guests = [];
  for (const guest of party.guests) {
    const answer = body.guests.find((item) => item && item.id === guest.id);
    if (!answer || typeof answer.attending !== 'boolean') {
      return null;
    }
    const name = guest.plusOne ? readText(answer.name, LIMITS.name) : '';
    const dietary = readText(answer.dietary, LIMITS.dietary);
    if (name === undefined || dietary === undefined || (guest.plusOne && answer.attending && !name)) {
      return null;
    }
    guests.push({
      id: guest.id,
      attending: answer.attending,
      name: answer.attending && name ? name : null,
      dietary: answer.attending && dietary ? dietary : null,
    });
  }
  return { guests, note: note || null, song: song || null };
}

const saveResponse = db.transaction((party, response) => {
  db.prepare(`INSERT INTO rsvp_parties (partyid, note, song) VALUES (?, ?, ?)
    ON CONFLICT(partyid) DO UPDATE SET note = excluded.note, song = excluded.song, updated = CURRENT_TIMESTAMP`)
    .run(party.id, response.note, response.song);
  const saveGuest = db.prepare(`INSERT INTO rsvp_guests (guestid, partyid, attending, name, dietary) VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(guestid) DO UPDATE SET partyid = excluded.partyid, attending = excluded.attending,
    name = excluded.name, dietary = excluded.dietary, updated = CURRENT_TIMESTAMP`);
  for (const guest of response.guests) {
    saveGuest.run(guest.id, party.id, guest.attending ? 1 : 0, guest.name, guest.dietary);
  }
});

function report() {
  return readParties().map(withResponses);
}

module.exports = { isOpen, findParty, getParty, withResponses, parseResponse, saveResponse, report };
