var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("about page!");
    res.send("aboutttt");
});

module.exports = router;
