'use strict';

var express = require('express');
var router = express.Router();
var User = require('./models/user.model');
var Controller = require('./user.controller');


router.get('/', Controller.index);

// user to get its own data, user need to login and it's the current user
router.get('/currentUser/:userId', User.authMiddleware, Controller.getCurrentUser);

router.get('/currentUserDeeply/:userId', User.authMiddleware, Controller.getCurrentUserDeeply);

// just simpily get one user's data, user do not need to login
router.get('/singleUser/:userId', Controller.getSingleUser);

router.get('/getUserByEmail/:email', Controller.findUserByEmail);

// admin to get all users' data!!! (extremely dangerous!!!)
router.get('/all', User.authMiddleware, Controller.getAllUsers);

router.post('/update', User.authMiddleware, Controller.updateCurrentUser);

router.post('/login', Controller.login);

router.post('/checkData', User.authMiddleware, Controller.checkData);

router.post('/signup', Controller.signup);

router.post('/createService', User.authMiddleware, Controller.createService);

router.get('/getOneService/:serviceId', User.authMiddleware, Controller.getOneService);

module.exports = router;