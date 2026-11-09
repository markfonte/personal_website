var express = require('express');
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
var rsvp = require('../db/rsvp.js');
var router = express.Router();

const COOKIE_NAME = 'wedding_auth';
const YEAR_MS = 365 * 24 * 60 * 60 * 1000;
const LOGIN_WINDOW_MS = 10 * 60 * 1000;
const LOGIN_MAX_ATTEMPTS = 10;
const CONTENT_FILE = process.env.WEDDING_CONTENT_FILE || path.join(__dirname, '..', 'wedding_content.json');
const PHOTOS_DIR = process.env.WEDDING_PHOTOS_DIR || path.join(__dirname, '..', 'wedding_photos');
const PHOTO_FILE = /^[\w-]+\.(jpe?g|png|webp|gif)$/i;
const loginAttempts = new Map();

router.use(function (req, res, next) {
  res.set('Cache-Control', 'no-store');
  next();
});

function getPassword() {
  return process.env.WEDDING_PASSWORD || '';
}

function readContent() {
  try {
    return JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') {
      return {};
    }
    throw err;
  }
}

function contentResponse() {
  return { ok: true, ...readContent(), rsvpOpen: rsvp.isOpen() };
}

function safeEqual(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) {
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

function signToken(expiresAt) {
  const payload = String(expiresAt);
  const sig = crypto.createHmac('sha256', getPassword()).update(payload).digest('hex');
  return payload + '.' + sig;
}

function verifyToken(token) {
  const password = getPassword();
  if (!token || !password) {
    return false;
  }
  const separator = token.indexOf('.');
  if (separator === -1) {
    return false;
  }
  const payload = token.slice(0, separator);
  const expected = crypto.createHmac('sha256', password).update(payload).digest('hex');
  if (!safeEqual(token.slice(separator + 1), expected)) {
    return false;
  }
  const expiresAt = Number(payload);
  return Number.isFinite(expiresAt) && Date.now() <= expiresAt;
}

function readCookie(req, name) {
  const header = req.headers.cookie;
  if (!header) {
    return '';
  }
  const prefix = name + '=';
  const parts = header.split(';');
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (part.startsWith(prefix)) {
      try {
        return decodeURIComponent(part.slice(prefix.length));
      } catch {
        return '';
      }
    }
  }
  return '';
}

function cookieOptions(req) {
  const forwarded = (req.get('x-forwarded-proto') || '').split(',')[0].trim();
  return {
    httpOnly: true,
    sameSite: 'lax',
    secure: req.secure || forwarded === 'https',
    path: '/',
  };
}

function tooManyAttempts(ip) {
  const now = Date.now();
  const recent = (loginAttempts.get(ip) || []).filter((t) => now - t < LOGIN_WINDOW_MS);
  if (recent.length === 0) {
    loginAttempts.delete(ip);
    return false;
  }
  loginAttempts.set(ip, recent);
  return recent.length >= LOGIN_MAX_ATTEMPTS;
}

function recordFailure(ip) {
  const recent = loginAttempts.get(ip) || [];
  recent.push(Date.now());
  loginAttempts.set(ip, recent);
}

function requireAuth(req, res, next) {
  if (!verifyToken(readCookie(req, COOKIE_NAME))) {
    return res.status(401).json({ ok: false });
  }
  next();
}

router.post('/login', function (req, res) {
  const ip = req.ip || req.socket.remoteAddress || '';
  if (tooManyAttempts(ip)) {
    return res.status(429).json({ ok: false });
  }
  const password = req.body && req.body.password;
  const expected = getPassword();
  if (!expected || typeof password !== 'string' || !safeEqual(password, expected)) {
    recordFailure(ip);
    return res.status(401).json({ ok: false });
  }
  loginAttempts.delete(ip);
  res.cookie(COOKIE_NAME, signToken(Date.now() + YEAR_MS), {
    ...cookieOptions(req),
    maxAge: YEAR_MS,
  });
  res.json(contentResponse());
});

router.post('/logout', function (req, res) {
  res.clearCookie(COOKIE_NAME, cookieOptions(req));
  res.json({ ok: true });
});

router.get('/content', requireAuth, function (req, res) {
  res.json(contentResponse());
});

router.post('/rsvp/find', requireAuth, function (req, res) {
  const party = rsvp.findParty(req.body && req.body.name);
  if (!party) {
    return res.status(404).json({ ok: false });
  }
  res.json({ ok: true, party: rsvp.withResponses(party) });
});

router.post('/rsvp', requireAuth, function (req, res) {
  const party = rsvp.getParty(req.body && req.body.partyId);
  const response = party && rsvp.parseResponse(party, req.body);
  if (!response) {
    return res.status(400).json({ ok: false });
  }
  rsvp.saveResponse(party, response);
  res.json({ ok: true });
});

router.get('/photos/:file', requireAuth, function (req, res) {
  if (!PHOTO_FILE.test(req.params.file)) {
    return res.status(404).json({ ok: false });
  }
  // Only a photo that was found gets cached, so one uploaded later still shows up.
  const options = { root: PHOTOS_DIR, headers: { 'Cache-Control': 'private, max-age=86400' } };
  res.sendFile(req.params.file, options, function (err) {
    if (err && !res.headersSent) {
      res.status(err.status || 500).json({ ok: false });
    }
  });
});

module.exports = router;
