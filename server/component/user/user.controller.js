'use strict';

var User = require('./models/user.model');
var Service = require('./models/service.model');
var _ = require('lodash');

exports.index = function (req, res) {
    res.render('index');
};

exports.login = function (req, res) {
    console.log('login req.body', req.body);
    User.login(req.body, (err, data) => {
        if (err) return res.status(409).send(err)
        res.send(data)
    });
};

exports.getCurrentUser = function (req, res) {
    if (!req.user) {
        console.log('authentication failed')
        return res.status(409).send()
    }
    if (req.user._id == req.params.userId) {
        res.send(req.user)
    }
};

exports.getSingleUser = function (req, res) {
    User.findById(req.params.userId, (err, data) => {
        console.log('single user: ', data)
        if (err) return res.status(404).send(err)
        res.send(data)
    })
};

exports.findUserByEmail = function(req, res) {
    User.findOne({'email.data': req.params.email}, (err, data) => {
        console.log('found user by email: ', data)
        if (err) return res.status(404).send(err)
        res.send(data)
    })
};

exports.getAllUsers = function (req, res) {
    if (req.role == 'superadmin') {
        User.find({}, (err, data) => {
            if (err) return res.status(409).send(err)
            res.send(data)
        })
    } else {
        res.send({ message: 'you are not superadmin' })
    }
};

exports.signup = function (req, res) {
    console.log('signup req body: ', req.body);
    User.emailSignup(req.body, (err, data) => {
        if (err) return handleError(res, err)
        res.send(data)
    });
}

exports.update = function (req, res) {
    if(req.user._id === req.body._id){
        User.findById(req.body._id, function (err, user) {
            if (err) { return handleError(res, err); }
            if(!user) { return res.status(404).send('Not Found'); }
            var updated = _.merge(user, req.body);
            updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.status(200).json(user);
            });
        });
    }
    return res.status(200).json(user);
}

exports.createService = function(req, res) {
    console.log('body @createService', req.body);
    let body = req.body;
    let from = body.currentUser;
    let to = body.userToAdd;
    let service = {
        details: {
            student: {},
            advisor: {},
            supervisor: {},
            admin: {}
        }
    };
    //Add both user according to his/her role
    if(from) {
        service.details[from.role].userId = getRoleData(from);
    }
    if(to) {
        service.details[to.role].userId = getRoleData(to);
    }
    Service.create(service, function(data) {
        //Create notification here

        return res.status(200).json(data);
    });
};

function getRoleData(user) {
    switch(user.role) {
        case 'student':
            return user.studentData._id
        break;
        case 'advisor':
            return user.advisorData._id
        break;
        case 'supervisor':
            return user.supervisorData._id
        break;
        case 'admin':
            return user.adminData._id
        break;
        default:
            return;
        break;

    }
}

function handleError(res, err) {
  console.log(err);
  return res.status(500).send(err);
}