var express = require("express");

var router = express.Router();

//add in error and info (EXTRA)

router.use("/", require("./home"));
router.use("/", require("./admin"));



module.exports = router;