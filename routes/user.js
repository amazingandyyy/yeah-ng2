'use strict';

var express = require('express');
var router = express.Router();

var qs = require('querystring');
var request = require('request');
var User = require('../models/user');

router.get('/', function(req, res) {
    res.render('index');
})

router.get('/all', function(req, res) {
    User.find({},(err, data) => {
        if (err) return res.status(409).send(err)
        res.send(data)
    })
})

module.exports = router;
