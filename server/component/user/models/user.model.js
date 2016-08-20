'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const uuid = require('uuid');
const autopopulate = require('mongoose-autopopulate');
const deepPopulate = require('mongoose-deep-populate')(mongoose); // Tutorials: https://github.com/buunguyen/mongoose-deep-populate
// const CronJob = require('cron').CronJob;
const _ = require('lodash');

// Mongoose-relationship plugin docs: https://www.npmjs.com/package/mongoose-relationship
const relationship = require('mongoose-relationship');

// Import data from other roleSchema
const Admin = require('./admin.model');
const Advisor = require('./advisor.model');
const Student = require('./student.model');
const Superadmin = require('./superadmin.model');
const Supervisor = require('./supervisor.model');
const Service = require('../../service/service.model');
const Notification = require('../../notification/notification.model');
// SES is AWS's simple email service
const ses = require('node-ses')
const SESserver = ses.createClient({
    key: process.env.AWS_KEY,
    secret: process.env.AWS_SECRET
})

const SESservice = require('../SES.service');
const JWT_SECRET = process.env.JWT_SECRET;

let User;

let userSchema = new mongoose.Schema({
    email: {
        data: {
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    password: {
        type: String,
        select: false
    },
    name: String,
    photo: {
        url: String
    },
    role: {
        type: String,
        default: 'student',
        required: true
    },
    studentData: {
        type: mongoose.Schema.ObjectId,
        ref: 'Student',
        autopopulate: true,
        childPath: 'userData'
    },
    advisorData: {
        type: mongoose.Schema.ObjectId,
        ref: 'Advisor',
        autopopulate: true,
        childPath: 'userData'
    },
    supervisorData: {
        type: mongoose.Schema.ObjectId,
        ref: 'Supervisor',
        autopopulate: true,
        childPath: 'userData'
    },
    adminData: {
        type: mongoose.Schema.ObjectId,
        ref: 'Admin',
        autopopulate: true,
        childPath: 'userData'
    },
    superadminData: {
        type: mongoose.Schema.ObjectId,
        ref: 'Superadmin',
        autopopulate: true,
        childPath: 'userData'
    },
    lastLoginTime: [{
        type: Number
    }],
    createAt: {
        type: Number,
        default: Date.now
    },
    services: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Service'
        }
    ],
    notifications:{
        count: {
            type: Number
        },
        data: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Notification'
        }]
    }
})

userSchema.plugin(autopopulate);
userSchema.plugin(relationship, { relationshipPathName: ['studentData', 'advisorData', 'supervisorData', 'adminData', 'superadminData'], triggerMiddleware: true });

let deepPopulateOption;
userSchema.plugin(deepPopulate, deepPopulateOption);
// promised-based mongoose tutorial
// http://www.summa.com/blog/avoiding-callback-hell-while-using-mongoose
// userSchema.statics.emailSignup = function (userObj, cb) {    
//         console.log('check: ', userObj.email)
//         User.findOne({
//             'email.data': {
//                 '$in': userObj.email
//             }
//         })
//         .then(existingUser=>{
//             console.log(`${existingUser.email.data} already exist.`)
//             cb({message: 'email exist'})
//         })
//         .then(()=>{
//             console.log('check')
//         })
//         .catch(err=>{
//             cb(err)
//         })
// }

userSchema.statics = {
    emailSignup: function (userObj, cb) {
        console.log('emailSignup userObj:', userObj);
        User.findOne({
            'email.data': {
                '$in': userObj.email
            }
        }).exec((err, existingUser) => {
            if (err) return cb(err)
            if (existingUser) {
                console.log(`${existingUser.email.data} already exist.`)
                return cb(err)
            }
            let newRoleData;
            switch (userObj.role) {
                case 'student':
                    console.log('student signup!')
                    var student = new Student({})
                    student.save()
                    createUser(student._id)
                    break;
                case 'advisor':
                    console.log('advisor signup!')
                    var advisor = new Advisor({})
                    advisor.save()
                    createUser(advisor._id)
                    break;
                case 'supervisor':
                    console.log('supervisor signup!')
                    var supervisor = new Supervisor({})
                    supervisor.save()
                    createUser(supervisor._id)
                    break;
                case 'admin':
                    console.log('admin signup!')
                    var admin = new Admin({})
                    admin.save()
                    createUser(admin._id)
                    break;
                case 'superadmin':
                    console.log('superadmin signup!')
                    var superadmin = new Superadmin({})
                    superadmin.save()
                    createUser(superadmin._id)
                    break;
            }
            function createUser(roleId) {
                bcrypt.hash(userObj.password, 12, (err, hash) => {
                    if (err) return cb(err);
                    let user = new User({
                        email: {
                            data: userObj.email
                        },
                        password: hash,
                        name: userObj.name,
                        role: userObj.role
                    })
                    user[`${userObj.role}Data`] = roleId;
                    user.save((err, savedUser) => {
                        if (err) return cb(err)

                        console.log('savedUser: ', savedUser)
                        let token = generateToken(savedUser)
                        savedUser.password = null;

                        console.log('-> SES triggered -> ')
                        SESserver.sendEmail({
                            to: savedUser.email.data,
                            from: process.env.AWS_SES_SENDER,
                            cc: null,
                            bcc: ['amazingandyyy@gmail.com'],
                            subject: 'Welcome to Yeah. Please verify this email.',
                            message: SESservice.send({
                                title: `Hi, ${savedUser.name}.`,
                                description: `Welcome for joining Yeah. You are signed up as ${savedUser.role}`,
                                destination: `verify/email/${token}`,
                                button: `Verify this Email`
                            }),
                            altText: 'Verify this Email and login'
                        }, function (err, data, res) {
                            if (err) {
                                console.log(err);
                                return cb({ error: 'email is incorrect' }, null)
                            }
                            cb(null, { token: token, user: savedUser })
                        })
                    })
                })
            }
        })
    },
    login: function (userObj, cb) {
        console.log('userObj:', userObj);
        User.findOne({
            'email.data': {
                '$in': userObj.email
            }
        })
            .select('+password')
            .exec((err, dbUser) => {
                console.log('dbUser: ', dbUser)
                if (err, !dbUser) return cb(err || { message: 'user not found. Want to sign up?' })
                return bcrypt.compare(userObj.password, dbUser.password, function (err, isGood) {
                    if (err) return cb("Authentication failed.");
                    let token = generateToken(dbUser)
                    dbUser.lastLoginTime.unshift(Date.now())
                    dbUser.save((err, savedUser) => {
                        if (err) return cb(err);
                        savedUser.password = null;
                        cb(null, { token: token, user: savedUser })
                    })
                })
            })
    },
    authMiddleware: function (req, res, next) {
        if (!req.header('Authorization')) {
            return res.status(401).send({
                message: 'Please make sure your request has an Authorization header.'
            })
        }
        let token = req.header('Authorization').split(' ')[1].split('"')[1];
        jwt.verify(token, JWT_SECRET, (err, payload) => {
            if (err) return res.status(401).send({
                error: 'Must be authenticated.'
            })
            User
                .findById(payload._id)
                .exec((err, user) => {
                    if (err || !user) {
                        return res.status(404).send(err || {
                            error: 'User not found.'
                        });
                    }
                    user.password = null;
                    console.log(`User - ${user._id}, pass authMiddleware with role of ${user.role} at ${moment(Date.now()).format('LLLL')}`);
                    req.user = user;
                    req.role = user.role;
                    next()
                })
        })
    },
    verifyEmail: function (token, cb) {
        jwt.verify(token, JWT_SECRET, (err, payload) => {
            if (err) return cb(err)

            User
                .findById(payload._id)
                .exec((err, user) => {
                    if (err || !user) return cb(err)
                    user.email.verified = true
                    user.save((err, savedUser) => {
                        if (err) return cb(err)
                        cb(null, savedUser)
                    })
                })
        })
    },
    updateCurrentUser: function (updatedUser, cb) {
        console.log('ddd')
        User.findById(updatedUser._id)
            .exec((err, dbUser) => {
                if (err || !dbUser) return cb(err)
                console.log('updatedUser: ', updatedUser)
                var mergedUser = _.merge(dbUser, updatedUser)
                mergedUser.save(function (err, savedUser) {
                    if (err || !savedUser) {
                        return cb(err)
                    }
                    savedUser.password = null;
                    return cb(null, savedUser)
                })
            })
    },
    getCurrentUserDeeply: function (userData, cb) {
        User.findById(userData._id)
            // .deepPopulate(deepPopulateOption)
            .exec((err, dbUser) => {
                if (err || !dbUser) return cb(err)
                console.log('single user: ', dbUser)
                cb(null, dbUser)
            })
    }
}

function generateToken(data) {
    // Generate jwt toke and bring with userId
    // Set 7-day expiration
    let payload = {
        _id: data._id,
        iat: Date.now(),
        exp: moment().add(7, 'day').unix()
    };
    let token = jwt.sign(payload, JWT_SECRET);
    return token;
}

deepPopulateOption = [
    'studentData.services.participants.student.userData.userData',
    'studentData.services.participants.advisor.userData.userData',
    'studentData.services.participants.supervisor.userData.userData',
    'studentData.services.participants.admin.userData.userData',
    'advisorData.services.participants.student.userData.userData',
    'advisorData.services.participants.advisor.userData.userData',
    'advisorData.services.participants.supervisor.userData.userData',
    'advisorData.services.participants.admin.userData.userData',
    'supervisorData.services.participants.student.userData.userData',
    'supervisorData.services.participants.advisor.userData.userData',
    'supervisorData.services.participants.supervisor.userData.userData',
    'supervisorData.services.participants.admin.userData.userData',
    'adminData.services.participants.student.userData.userData',
    'adminData.services.participants.advisor.userData.userData',
    'adminData.services.participants.supervisor.userData.userData',
    'adminData.services.participants.admin.userData.userData'
]

User = mongoose.model('User', userSchema);
module.exports = User;
