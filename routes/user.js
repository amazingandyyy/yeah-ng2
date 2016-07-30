'use strict';

var express = require('express');
var router = express.Router();

var qs = require('querystring');
var request = require('request');
var User = require('../models/user');

router.get('/', function(req, res) {
    res.render('index');
})

// only admin can do this route
router.post('/all', function(req, res) {
    console.log(req.body)
    if(req.body.role > 99){
        User.find({},(err, data) => {
            if (err) return res.status(409).send(err)
            res.send(data)
        })
    }else{
        res.send({message: 'you are not admin'})
    }
})

module.exports = router;