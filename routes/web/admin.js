//STORE ALL YOUR ROUTES

var express = require("express");

var router = express.Router();


router.get("/admin", function(req,res){
    res.render("admin/admin_overview");
});

//add in error and info (EXTRA)
var mysql = require('mysql');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ecoride",
    database:"ecoride"
    
});


router.get("/userManagement", function(req,res){
    const q  = "SELECT * FROM userdata"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});


//router.get("/userManagement", function(req,res){
//    res.render("admin/admin_userManagement");
//});







//router.post("/userManagement")
module.exports = router;