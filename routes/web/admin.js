//STORE ALL YOUR ROUTES

var express = require("express");

var router = express.Router();

//add in error and info (EXTRA)




router.get("/admin", function(req,res){
    res.render("admin/admin_overview");
});

//router.get("/userManagement", function(req,res){
//    res.render("admin/admin_userManagement");
//});

router.get("/userManagement", function(req,res){
    const q  = "SELECT * FROM userdata"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});

module.exports = router;