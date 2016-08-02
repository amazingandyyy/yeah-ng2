'use strict';

var express = require('express');
var router = express.Router();

var qs = require('querystring');
var request = require('request');
var User = require('../models/user');
var jwt = require('jsonwebtoken');

router.post('/', function(req, res) {
    console.log('signup req body: ', req.body);
    User.emailSignup(req.body, (err, data) => {
        if (err) return res.status(409).send(err)
        res.send(data)
    });
})

module.exports = router;
