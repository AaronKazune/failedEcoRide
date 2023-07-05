var express = require("express");

var router = express.Router();

router.use("/admin", require("./admin"));

//router.get("/signup", function(req,res){
    //res.render("home/signup");
//});

module.exports = router;