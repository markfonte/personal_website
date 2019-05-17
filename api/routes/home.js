var express = require('express');
var router = express.Router();

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyCl2ejn6sSzWijEGZ_mbVP_OyCgTICI4iQ",
    authDomain: "website-20813.firebaseapp.com",
    databaseURL: "https://website-20813.firebaseio.com",
    projectId: "website-20813",
    storageBucket: "website-20813.appspot.com",
    messagingSenderId: "249062424082",
    appId: "1:249062424082:web:0bb18b7464343d1d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("home page!");
    db.collection("page").doc("home").get().then((querySnapshot) => {
            res.send(`${querySnapshot.data().title_paragraph}`);
    }).catch(error => console.log(error));
    // res.send("Mark Fonte: welcome to my website!");
});

module.exports = router;