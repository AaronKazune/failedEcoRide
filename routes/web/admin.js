//STORE ALL YOUR ROUTES

var express = require("express");

var router = express.Router();

//add in error and info (EXTRA)




router.get("/admin", function(req,res){
    res.render("admin/admin_overview");
});

router.get("/userManagement", function(req,res){
    res.render("admin/admin_userManagement");
});



module.exports = router;