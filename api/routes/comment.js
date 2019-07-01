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
  const owner = req.body.owner;
  const message = req.body.message;

  let sql = `INSERT INTO comments(pagename, owner, text) VALUES (?, ?, ?)`;
  // TODO: Sanitize input

  db.run (sql, [page, owner, message], function (err) {
    if (err) {
      return console.log (err.message);
    }
    console.log (`A row has been inserted with rowid ${this.lastID}`);
  });
});

router.get ('/', function (req, res) {
  const page = req.body.page;

  let sql = `SELECT * FROM comments WHERE pagename = ?`;
  // TODO: Sanitize input

  db.all (sql, [page], (err, rows) => {
    if (err) {
      console.error (err.message);
      return;
    }
    console.log ('returning ' + rows.length + ' rows');
    res.json (rows);
  });
});

module.exports = router;
