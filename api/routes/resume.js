var express = require('express');
var router = express.Router();

/* GET resume page. */
router.get('/', function(req, res, next) {
    console.log("resume page!");
    res.send("Resume page coming soon...");
});

module.exports = router;
