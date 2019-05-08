var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("contact page!");
    res.send("contacttt");
});

module.exports = router;
