var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

// ~/api/...
router.use('/api', require('./api'))

// ~/verify/...
router.use('/verify', require('./verify'))

// ~/testing/...
router.use('/testing', require('./testing'))

module.exports = router;
