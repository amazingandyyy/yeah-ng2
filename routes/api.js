'use strict';

var express = require('express');
var router = express.Router();

// router.use('/login', require('./login'));
// router.use('/signup', require('./signup'));

// router.use('/auth', require('./auth'));
router.use('/user', require('./user'));

module.exports = router;