// 'use strict';

// var express = require('express');
// var router = express.Router();

// var qs = require('querystring');
// var request = require('request');
// var User = require('../models/user');
// var jwt = require('jsonwebtoken');


// router.get('/', function(req, res) {
//     res.render('index');
// })

// router.get('/currentUser', User.authMiddleware, function(req, res) {
//     if (!req.user) {
//         return res.status(409).send()
//     }
//     res.send(req.user)
// })

// router.post('/', function(req, res) {
//     console.log('login req.body', req.body);
//     User.login(req.body, (err, data) => {
//         if (err) return res.status(409).send(err)
//         res.send(data)
//     });
// })

// module.exports = router;
