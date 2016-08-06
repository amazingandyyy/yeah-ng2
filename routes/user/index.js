'use strict';

var express = require('express');
var router = express.Router();
var User = require('./user.model');
var Controller = require('./user.controller');

// var qs = require('querystring');
// var request = require('request');

router.get('/', Controller.index);

router.get('/currentUser', User.authMiddleware, Controller.getCurrentUser);

//TO DO: add middleware to allow only the admin to get all users
router.get('/all', Controller.getAllUser);

router.post('/login', Controller.login);

router.post('/signup', Controller.signup);

module.exports = router;