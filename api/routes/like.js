var express = require('express');
var router = express.Router();
const Database = require('better-sqlite3');

const db = new Database('./db/var/personal_website.sqlite3');

router.post('/', function (req, res) {
  const page = req.body.page;
  if (!page) {
    return console.error;
  }
  const sql = `UPDATE likes SET numlikes = numlikes + 1 WHERE pagename = ?`;

  try {
    db.prepare(sql).run(page);
    console.log(`${page} now has 1 more like. ${new Date()}`);
    res.send('success');
  } catch (err) {
    return console.log(err.message + " " + new Date());
  }
});

router.post('/unlike', function (req, res) {
  const page = req.body.page;
  if (!page) {
    return console.error;
  }
  const sql = `UPDATE likes SET numlikes = numlikes - 1 WHERE pagename = ?`;

  try {
    db.prepare(sql).run(page);
    console.log(`${page} now has 1 less like. ${new Date()}`);
    res.send('success');
  } catch (err) {
    return console.log(err.message + " " + new Date());
  }
});

router.post('/get', function (req, res) {
  const page = req.body.page;

  const sql = `SELECT numlikes FROM likes WHERE pagename = ?`;

  try {
    const rows = db.prepare(sql).all(page);
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    return;
  }
});

module.exports = router;
