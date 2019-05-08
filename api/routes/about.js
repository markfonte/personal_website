var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("about page!");
    res.send("Incoming Software Engineering Intern at J.P. Morgan · 4rd year CSE student at the University of Michigan · Minor in Entrepreneurship · Focus on Android development");
});

module.exports = router;
