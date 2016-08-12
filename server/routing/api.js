'use strict';

var express = require('express');
var router = express.Router();

router.use('/user', require('../component/user'));

module.exports = router;