'use strict';

var express = require('express');
var router = express.Router();
var User = require('../user/models/user.model');
var Controller = require('./service.controller');


router.get('/', Controller.index);

router.post('/createService', User.hasRole('advisor'), Controller.createService);

router.get('/getServices', User.authMiddleware(), Controller.getServices);

router.post('/updateService', User.hasRole('admin'), Controller.updateService);

router.get('/getOneService/:serviceId', User.hasRole('student'), Controller.getOneService);

module.exports = router;