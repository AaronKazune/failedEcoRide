var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    res.json("This is a json satus code for user api");
});

module.exports = router;