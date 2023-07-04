var express = require("express");

var router = express.Router();

//add in error and info (EXTRA)

router.use("/", require("./home"));



module.exports = router;