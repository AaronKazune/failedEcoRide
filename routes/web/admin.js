//STORE ALL YOUR ROUTES

var express = require("express");

var router = express.Router();

//routing

router.get("/admin", function(req,res){
    res.render("admin/admin_overview");
});


router.get("/add", function(req,res){
    res.render("/admin/add");
});
router.get("/update", function(req,res){
    res.render("src/pages/update");
});


//add in error and info (EXTRA)

//DB and API
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
        if(err) return res.json(err);
        return res.json(data);
    });
});

router.post("/userManagement",(req,res)=>{
    const q  = "INSERT INTO userdata (`user_name`,`user_type`,`user_pfp`) VALUES (?)"
    const values = [
        req.body.user_name,
        req.body.user_type,
        req.body.user_pfp,
    ];
    
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("User has been created successfully");
    });
    
    });


//router.get("/userManagement", function(req,res){
//    res.render("admin/admin_userManagement");
//});







//router.post("/userManagement")
module.exports = router;