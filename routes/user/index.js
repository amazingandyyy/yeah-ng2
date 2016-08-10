'use strict';

var express = require('express');
var router = express.Router();
var User = require('./user.model');
var Controller = require('./user.controller');

// var qs = require('querystring');
// var request = require('request');

router.get('/', Controller.index);

// user to get its own data, user need to login and it's the current user
router.get('/currentUser/:userId', User.authMiddleware, Controller.getCurrentUser);

// just simpily get one user's data, user do not need to login
router.get('/singleUser/:userId', Controller.getSingleUser);

// admin to get all users' data!!! (extremely dangerous!!!)
router.get('/all', User.authMiddleware, Controller.getAllUsers);

router.post('/login', Controller.login);

router.post('/signup', Controller.signup);

module.exports = router;