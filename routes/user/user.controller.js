'use strict';

var User = require('./user.model');

exports.index = function(req, res) {
	res.render('index');
};

exports.login = function(req, res) {
	console.log('login req.body', req.body);
    User.login(req.body, (err, data) => {
        if (err) return res.status(409).send(err)
        res.send(data)
    });
};

exports.getCurrentUser = function(req, res) {
	if (!req.user) {
        return res.status(409).send()
    }
    res.send(req.user)
};

exports.getAllUser = function(req, res) {
    if(req.body.role > 99){
        User.find({},(err, data) => {
            if (err) return res.status(409).send(err)
            res.send(data)
        })
    } else{
        res.send({message: 'you are not admin'})
    }
};

exports.signup = function(req, res) {
	console.log('signup req body: ', req.body);
    User.emailSignup(req.body, (err, data) => {
        if (err) return handleError(res, err)
        res.send(res)
    });
}