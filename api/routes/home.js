var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("home page!");
    res.send("Mark Fonte: welcome to my website!");
});

module.exports = router;
