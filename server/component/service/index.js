'use strict';

var express = require('express');
var router = express.Router();
var User = require('../user/models/user.model');
var Controller = require('./service.controller');


router.get('/', Controller.index);

router.get('/getAll', Controller.getAll);

module.exports = router;