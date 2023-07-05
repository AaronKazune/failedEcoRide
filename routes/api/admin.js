var express = require("express");

var router = express.Router();

router.get('/test', (req, res) => res.send('API test route works'));

module.exports = router;