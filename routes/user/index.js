'use strict';

var express = require('express');
var router = express.Router();
var User = require('./user.model');
var Controller = require('./user.controller');


router.get('/', Controller.index);

router.get('/currentUser/:userId', User.authMiddleware, Controller.getCurrentUser);

router.get('/singleUser/:userId', User.roleMiddleware, Controller.getSingleUser);

//TO DO: add middleware to allow only the admin to get all users
router.get('/all', User.roleMiddleware, Controller.getAllUsers);

router.post('/login', Controller.login);

router.post('/signup', Controller.signup);

module.exports = router;