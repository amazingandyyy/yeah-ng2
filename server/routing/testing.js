'use strict';

var express = require('express');
var router = express.Router();

router.get('/emailTemplate', function(req, res) {
    res.render('emailTemplate');
});

module.exports = router;