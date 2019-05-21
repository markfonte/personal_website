var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("home page!");
    res.send("Welcome to my website! It is under active development (last updated 5/21/2019). Please check back soon!");
});

module.exports = router;
