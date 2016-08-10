'use strict';

var express = require('express');
var router = express.Router();
var Notification = require('./notification.model');
var Controller = require('./notification.controller');


router.get('/', Controller.index);

module.exports = router;