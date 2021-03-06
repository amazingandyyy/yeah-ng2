'use strict';

var express = require('express');
var router = express.Router();
var Notification = require('./notification.model');
var User = require('../user/models/user.model');
var Controller = require('./notification.controller');

router.get('/', Controller.index);

router.get('/getThreeNew', User.authMiddleware(), Controller.getThreeNew);

router.get('/getAll', User.authMiddleware(), Controller.getAll);

router.get('/getCounts', User.authMiddleware(), Controller.getCounts);

router.post('/send', User.authMiddleware(), Controller.createNotification);

router.post('/confirmInvitation', User.authMiddleware(), Controller.confirmInvitation);


module.exports = router;