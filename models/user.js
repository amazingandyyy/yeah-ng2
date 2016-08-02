'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const uuid = require('uuid');
const autopopulate = require('mongoose-autopopulate');
const CronJob = require('cron').CronJob;

const ses = require('node-ses')
const SESserver = ses.createClient({
    key: process.env.AWS_KEY,
    secret: process.env.AWS_SECRET
})

var Student = require('./student');
var Admin = require('./admin');
var Advisor = require('./advisor');

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
    role: {
        type: Number,
        default: 0
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
    adminData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
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

userSchema.statics.emailSignup = function (userObj, cb) {
    console.log('userObj:', userObj);
    User.findOne({
        'email.data': {
            '$in': userObj.email
        }
    })
        .exec((err, existingUser) => {
            if (err) return cb(err)
            if (existingUser) {
                console.log(`${existingUser.email.data} has been used.`)
                return cb({message: 'This email is been used. Want to login?'})
            }
            bcrypt.hash(userObj.password, 12, (err, hash) => {
                if (err) return cb(err);
                let user = new User({
                    email: {
                        data: userObj.email
                    },
                    password: hash
                })
                user.save((err, savedUser) => {
                    if (err) return cb(err)
                    
                    console.log('savedUser: ', savedUser)
                    let token = generateToken(savedUser)
                    // cb(null, { token: token, user: savedUser })

                    console.log('-> SES triggered -> ')
                    SESserver.sendEmail({
                        to: savedUser.email.data,
                        from: process.env.AWS_SES_SENDER,
                        cc: null,
                        bcc: ['amazingandyyy@gmail.com'],
                        subject: '欢迎加入欧耶教育，请验证你的电子信箱',
                        message: notificationTemplate({
                            title: '欢迎加入欧耶教育',
                            description: `登入欧耶助手，定期与顾问见面！和欧耶一起转学成功！`,
                            destination: `verify/email/${token}`,
                            button: `验证此邮箱并登入`
                        }),
                        altText: '验证此邮箱并登入'
                    }, function (err, data, res) {
                        if (err) {
                            console.log(err);
                            return cb({message: 'email is incorrect'}, null)
                        }
                        cb(null, { token: token, user: savedUser })
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
            if (err, !dbUser) return cb(err || {message: 'user not found. Want to sign up?'})
            return bcrypt.compare(userObj.password, dbUser.password, function (err, isGood) {
                if (err) return cb("Authentication failed.");
                let token = generateToken(dbUser)
                dbUser.lastLoginTime.unshift(Date.now())
                dbUser.save((err, savedUser)=>{
                    if (err) return cb(err);
                    cb(null, { token: token, user: savedUser })
                })
            })
        })
}

userSchema.statics.authMiddleware = function (req, res, next) {
    if (!req.header('Authorization')) {
        return res.status(401).send({
            message: 'Please make sure your request has an Authorization header'
        })
    }
    let token = req.header('Authorization').split(' ')[1]
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
                    });
                }
                user.password = null;
                concole.log(`${user._id} pass authMiddleware with role of ${user.role}`);
                req.user = user;
                req.role = user.role;
                next()
            })
    })
};

function generateToken(data) {
    // generate jwt toke and bring with userId
    // set it to 7-day expiration
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

function notificationTemplate(data) {
    return `<!DOCTYPE html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <link href='https://fonts.googleapis.com/css?family=PT+Serif|Lato:300' rel='stylesheet' type='text/css' />
                <style media="screen">
                    .template {
                        text-align: center;
                        font-weight: 300;
                        font-family: 'Lato', sans-serif;
                        padding-top: 30px;
                    }
                    
                    .actionButton {
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        cursor: pointer;
                        padding: 15px 50px;
                        border-radius: 4px;
                        font-size: 0.8em;
                        font-weight: 500;
                        border: none;
                        color: white;
                        background: #1E1E1E;
                        transition: .1s background ease-in-out;
                        margin-top: 20px;
                    }
                    
                    .actionButton:hover {
                        transition: .1s background ease-in-out;
                        background: #313131;
                    }
                </style>
            </head>
            <body>
                <div class="template">
                    <img style="width: 100px;" src="https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/13654354_154027298358398_4418786725610547538_n.jpg?oh=125c8c3e17eddee588506137ec57381a&oe=58137FCC" alt="yeah Education Group">
                    <div>
                        <h1 style="font-weight: 300; text-transform: capitalize">${data.title}</h1>
                        <h2 style="font-weight: 300; font-size: 1.1em; color: rgba(0,0,0,0.4); margin-top: 10px;">${data.description}</h2>
                        <a href="${process.env.SITE_URL_BASE}${data.destination}" target="_blank"><button class="actionButton">${data.button}</button></a>
                    </div>
                </div>
            </body>
            </html>`
}

User = mongoose.model('User', userSchema);
module.exports = User;
