//STORE ALL YOUR ROUTES

var express = require("express");

var router = express.Router();

//add in error and info (EXTRA)


router.get("/", function(req,res){
    res.render("home/");
});

router.get("/home", function(req,res){
    res.render("home/home");
});

router.get("/about", function(req,res){
    res.render("home/about");
});



router.get("/Login", function(req,res){
    res.render("home/login");
});

router.get("/signup", function(req,res){
    res.render("home/signup");
});




module.exports = router;