// 'use strict';

// var express = require('express');
// var router = express.Router();

// var qs = require('querystring');
// var request = require('request');
// var User = require('../models/user');
// var jwt = require('jsonwebtoken');

// var handle = {
//   success: function(data) {
//     res.send(data)
//   },
//   error: function(data) {
//     res.status(409).send(err)
//   }
// };

// router.post('/', function (req, res, next) {
//     console.log('signup req body: ', req.body);
//     User.emailSignup(req.body, (err, data) => {
//         if (err) return handleError(res, err)
//         res.send(res)
//     })
// })

// function handleError(res, err) {
//     console.log('err @signup: ', JSON.stringify(err));
//     res.status(409).send(err)
// }

// module.exports = router;