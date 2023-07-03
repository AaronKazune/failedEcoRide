var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    console.log("Hello");
    res.render("index");
});

router.get("/home", function(req,res){
    console.log("Hello");
    res.render("home");
});

router.get("/about", function(req,res){
    console.log("Hello");
    res.render("about");
});

module.exports = router;