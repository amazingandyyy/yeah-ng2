'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const uuid = require('uuid');
const autopopulate = require('mongoose-autopopulate');
const CronJob = require('cron').CronJob;

// Mongoose-relationship plugin docs: https://www.npmjs.com/package/mongoose-relationship
const relationship = require('mongoose-relationship');

// Import data from other roleSchema
const Admin = require('./models/admin.model');
const Advisor = require('./models/advisor.model');
const Student = require('./models/student.model');
const Superadmin = require('./models/superadmin.model');
const Supervidor = require('./models/supervisor.model');

// SES is AWS's simple email service
const ses = require('node-ses')
const SESserver = ses.createClient({
    key: process.env.AWS_KEY,
    secret: process.env.AWS_SECRET
})

const SESService = require('./SES.service');
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
        required: true,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        autopopulate: true
    },
    advisorData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Advisor',
        autopopulate: true
    },
    supervisorData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supervisor',
        autopopulate: true
    },
    adminData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        autopopulate: true
    },
    superadminData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Superadmin',
        autopopulate: true
    },
    lastLoginTime: [{
        type: Number
    }],
    createAt: {
        type: Number,
        default: Date.now
    }
})
userSchema.plugin(autopopulate);

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
userSchema.statics.emailSignup = function (userObj, cb) {
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
                    subject: 'Welcome to Yeah，Please verify this email.',
                    message: SESService.send({
                        title: `Hi, ${savedUser.name}. Welcome joining Yeah.`,
                        description: `请认证Email并更新个人基本资料！`,
                        destination: `verify/email/${token}`,
                        button: `Verify this Email`
                    }),
                    altText: '验证此邮箱并登入'
                }, function (err, data, res) {
                    if (err) {
                        console.log(err);
                        return cb({ error: 'email is incorrect' }, null)
                    }
                    cb(null, { token: token, user: savedUser})
                })
            })
        })
    })
}

userSchema.statics.login = function (userObj, cb) {
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
}

userSchema.statics.authMiddleware = function (req, res, next) {
    console.log('check')
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
                console.log(`${user._id} passed authMiddleware with role of ${user.role}`);
                req.user = user;
                req.role = user.role;
                next()
            })
    })
};

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

userSchema.statics.verifyEmail = function (token, cb) {
    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) return res.status(401).send({
            error: 'Must be authenticated.'
        })

        User
            .findById(payload._id)
            .exec((err, user) => {
                if (err || !user) {
                    return res.status(400).send(err || {
                        error: 'User not found.'
                    })
                }
                user.email.verified = true
                user.save((err, savedUser) => {
                    if (err) return cb(err)
                    cb(null, savedUser)
                })
            })
    })
}

User = mongoose.model('User', userSchema);
module.exports = User;
