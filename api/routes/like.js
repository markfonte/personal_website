var express = require ('express');
var router = express.Router ();
const sqlite3 = require ('sqlite3').verbose ();

router.post ('/', function (req, res, next) {
    const sqlite3 = require ('sqlite3').verbose ();
    console.log('here!');
    let db = new sqlite3.Database ('./db/var/personal_website.sqlite3', (err) => {
      if (err) {
       console.log(err.message);
       return;
      }
      console.log('Connected to the in-memory SQlite database.');
    });
    console.log('heree!');
    let sql = `SELECT * FROM pages WHERE 1`;
      console.log("here");
    db.all (sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach (row => {
        console.log (row.name);
      });
    });
    
    console.log("here!");
  
    // close the database connection
    db.close ();

});

module.exports = router;
