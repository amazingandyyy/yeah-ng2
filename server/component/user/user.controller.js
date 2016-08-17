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
    User.findOne({ 'email.data': req.params.email }, (err, user) => {
        if (err || !user) return res.status(404).send(err || {err:'User not found'})
        console.log('found user by email: ', user)
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
exports.getOneService = function (req, res) {
    if (checkAuthority('student', req.role)) {
        let serviceId = req.params.serviceId;
        Service.findById(serviceId, (err, data) => {
            if (err) return handleError(res, err)
            return res.status(200).send(data)
        })
    } else {
        return handleError(res, err)
    }
}

exports.createService = function (req, res) {
    let newServiceData = req.body;
    let isAuthorized = checkAuthority('admin', req.role);
    let priceIsFine = newServiceData.price > 500.00;
    if(!priceIsFine){
        return res.status(409).send({error:'Price is not good.'})
    }
    if(!isAuthorized){
        return res.status(401).send({ error: 'You are not authorized.' })
    }
    if (isAuthorized && priceIsFine) {
        let from = newServiceData.createrData;
        let to = newServiceData.studentData;
        let service = {
            participants: {
                student: {},
                advisor: {},
                supervisor: {},
                admin: {}
            },
            price: {
                price: newServiceData.price,
                unit: newServiceData.priceUnit
            },
            package: newServiceData.package,
        };
        let notice = {
            title: 'New service created by ' + from.name,
            desc: 'Your ' + from.role + ' just created a yeah service for you.',
            res: false,
            state: 'invitation'
        }
        // Add both user according to his/her role
        if (from && to) {
            service.participants[from.role].userId = from[`${from.role}Data`]._id;
            notice.from = from._id;
            service.participants[to.role].userId = to[`${to.role}Data`]._id;
            notice.to = to._id;
        }else{
            return handleError(res, err);
        }
        // TO DO: Should check if this kind of service package already exist
        Service.create(service, (err, data) => {
            if (err) return handleError(res, err);
            // Create and send out notification here
            Notification.sendNotice(notice, (err, noticeSaved) => {
                if (err) return handleError(res, err);
                // Attach service package id to notification for easier query
                notice.service = data._id;
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

function handleError(res, err) {
    console.log(err);
    res.status(400).send(err);
}