'use strict';

var express = require('express');
var router = express.Router();
var User = require('./models/user.model');
var Controller = require('./user.controller');


router.get('/', Controller.index);

// user to get its own data, user need to login and it's the current user
router.get('/currentUser/:userId', User.authMiddleware, Controller.getCurrentUser);

// just simpily get one user's data, user do not need to login
router.get('/singleUser/:userId', Controller.getSingleUser);

// admin to get all users' data!!! (extremely dangerous!!!)
router.get('/all', User.authMiddleware, Controller.getAllUsers);

router.post('/update', Controller.update);

router.post('/login', Controller.login);

router.post('/signup', Controller.signup);


module.exports = router;