'use strict';

var User = require('./models/user.model');

var Service = require('./models/service.model');
var Notification = require('../notification/notification.model');
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

exports.findUserByEmail = function (req, res) {
    User.findOne({ 'email.data': req.params.email }, (err, data) => {
        console.log('found user by email: ', data)
        if (err) return res.status(404).send(err)
        res.send(data)
    })
};

exports.getAllUsers = function (req, res) {
    if (req.role === 'superadmin') {
        User.find({}, (err, data) => {
            if (er || !data) return res.status(409).send(err)
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

exports.updateCurrentUser = function (req, res) {
    if (req.user._id == req.body._id) {
        User.updateCurrentUser(req.body, (err, data) => {
            if (err) return handleError(res, err)
            return res.status(200).send(data)
        })
    } else {
        return handleError(res, err)
    }
}

exports.createService = function (req, res) {
    if (checkAuthority('admin', req.role)) {
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
        let notice = {
            title: 'Add request from ' + from.name,
            desc: 'May I be your ' + from.role + '?',
            res: false,
            state: 'invitation'
        }
        // Add both user according to his/her role
        if (from) {
            service.details[from.role].userId = getRoleData(from);
            notice.from = from._id;
        }
        if (to) {
            service.details[to.role].userId = getRoleData(to);
            notice.to = to._id;
        }
        // TO DO: Should check if this kind of service package already exist
        Service.create(service, (err, data) => {
            if (err) return res.status(400).send()
            // Create and send out notification here
            Notification.sendNotice(notice, (err, noticeSaved)=> {
                if (err) return res.status(400).send()
                return res.status(200).json(data);
            });
        });
    } else {
        return res.status(401).send({ error: 'You are not authorized.' })
    }
};

function checkAuthority(requiredRole, userRole) {
    const rolesArray = ['student', 'advisor', 'supervisor', 'admin', 'superadmin'];

    if (userRole) {
        if (rolesArray.indexOf(userRole) >= rolesArray.indexOf(requiredRole)) {
            return true;
        }
    }
    return false;
}

function getRoleData(user) {
    switch (user.role) {
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
    res.status(400).send(err);
}