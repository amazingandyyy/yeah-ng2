'use strict';

const User = require('./models/user.model');

const Service = require('../service/service.model');
const Notification = require('../notification/notification.model');
const _ = require('lodash');

exports.index = function (req, res) {
    res.render('index');
};

exports.login = function (req, res) {
    User.login(req.body, (err, data) => {
        if (err) return res.status(409).send(err)
        res.send(data)
    });
};
exports.checkData = function (req, res) {
    switch (req.body.state) {
        case 'checkUserPassword':
            console.log('checkUserPassword');
            User.checkUserPassword({user: req.user, password: req.body.password}, (err, good) => {
                if (err) return res.status(409).send(err)
                return res.send(good)
            });
            break;
        case 'checkCompanyCode':
            console.log('checkCompanyCode');
            break;
        default:
            res.status(409).send('No event state')
            break
    }
    
};

exports.getCurrentUser = function (req, res) {
    if (!req.user) {
        console.log('authentication failed')
        return res.status(409).send()
    }
    if (req.user._id == req.params.userId) {
        User.findById(req.user._id, (err, dbUser)=>{
            if (err) return res.status(404).send(err)
            console.log('dbUser: ', dbUser);
            res.send(dbUser)
        }).populate('services')
    }
};

exports.getCurrentUserDeeply = function (req, res) {
    if (!req.user) {
        console.log('authentication failed')
        return res.status(409).send()
    }
    if (req.user._id == req.params.userId) {
        User.getCurrentUserDeeply(req.user._id, (err, data) => {
            if (err) return handleError(res, err)
            res.send(data)
        });
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
            if (err || !data) return res.status(409).send(err)
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
    if (!req.user) {
        console.log('authentication failed')
        return res.status(409).send()
    }
    if (req.user._id == req.body._id) {
        User.updateCurrentUser(req.body, (err, data) => {
            if (err) return handleError(res, err)
            return res.status(200).send(data)
        })
    }
}
exports.getOneService = function (req, res) {
    if (checkAuthority('student', req.role)) {
        let serviceId = req.params.serviceId;
        Service.getOneService(serviceId, (err, data) => {
            if (err) return handleError(res, err)
            return res.status(200).send(data)
        })
    }
}

exports.createService = function (req, res) {
    let newServiceData = req.body;
    let isAuthorized = checkAuthority('admin', req.role) && (req.role!=='superadmin');
    let priceLimit;
    switch(newServiceData.priceUnit){
        case 'RMB':
            priceLimit = 3000.00
            break
        case 'USD':
            priceLimit = 500.00
            break
        default:
            priceLimit = 500.00
    }
    let priceIsFine = newServiceData.price > priceLimit;
    if (!isAuthorized) {
        // block out if the user is not authorized
        return res.status(401).send({ error: 'You are not authorized.' })
    }
    if (!priceIsFine) {
        // block out if the price is not good
        return res.status(409).send({ error: 'Price is not good.' })
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
                tag: newServiceData.price,
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
            // let superadmin can create package
            service.participants[from.role].userData = from._id;
            notice.from = from._id;
            service.participants[to.role].userData = to._id;
            notice.to = to._id;
            // Attach service package id to notification for easier query
        } else {
            return handleError(res, err);
        }
        // TO DO: Should check if this kind of service package already exist
        Service.create(service, (err, savedService) => {
            if (err) return handleError(res, err);
            User.findById(from._id, (err, dbUser)=>{
               if (err) return handleError(res, err);
                dbUser.services.push(savedService._id)
                dbUser.save((err, savedUser)=>{
                    if (err) return handleError(res, err);
                    // Create and send out notification here
                    notice.serviceId = savedService._id
                    Notification.sendNotice(notice, (err, savedNotice) => {
                        if (err) {
                            console.log('error @sendNotice: ', err)
                            return handleError(res, err);
                        }
                        return res.status(200).json(savedService);
                    });
                })
            })
            // // Create and send out notification here
            // //Attach service package id to notification for easier query
            // notice.serviceId = savedService._id;
            
            // Notification.sendNotice(notice, (err, savedNotice) => {
            //     if (err) {
            //         console.log('error @sendNotice: ', err)
            //         return handleError(res, err);
            //     }
            //     return res.status(200).json(savedService);
            // });
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
    return res.status(400).send(err);
}