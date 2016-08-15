'use strict';

var express = require('express');
var router = express.Router();

router.use('/user', require('../component/user'));
router.use('/notification', require('../component/notification'));

module.exports = router;