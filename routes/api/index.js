var express = require("express");

var router = express.Router();

router.use("/api", require("./users"));
router.use("/api", require("./admin"));

module.exports = router;