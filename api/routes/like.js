var express = require ('express');
var router = express.Router ();
const sqlite3 = require ('sqlite3').verbose ();

const db = new sqlite3.Database ('./db/var/personal_website.sqlite3', err => {
  if (err) {
    console.error (err.message);
    return;
  }
});
router.post ('/', function (req, res) {
  const page = req.body.page;
  if (!page) {
    return console.error;
  }
  let sql = `UPDATE likes SET numlikes = numlikes + 1 WHERE pagename = ?`;

  db.run (sql, [page], function (err) {
    if (err) {
      return console.log (err.message);
    }
    console.log (`${page} now has 1 more like.`);
    res.send ('success');
  });
});

router.post ('/get', function (req, res) {
  const page = req.body.page;

  let sql = `SELECT numlikes FROM likes WHERE pagename = ?`;

  db.all (sql, [page], (err, rows) => {
    if (err) {
      console.error (err.message);
      return;
    }
    res.json (rows);
  });
});

module.exports = router;
