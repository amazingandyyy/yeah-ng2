'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.use('/login', require('./login'));
router.use('/signup', require('./signup'));

// router.use('/auth', require('./auth'));
router.use('/user', require('./user'));

module.exports = router;