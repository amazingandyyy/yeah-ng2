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
        ref: 'Student'
    },
    advisorData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Advisor'
    },
    supervisorData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supervisor'
    },
    adminData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    // lastLoginTime: [{
    //     type: Number,
    //     default: Date.now
    // }],
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
            if (existingUser) return cb({message: 'This email is been used. Want to login?'})

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
                cb(null, { token: token, user: dbUser })
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

    // console.log('tokennnn: ', token);
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
                user.password = null
                req.user = user;
                next()
            })
    })
};

function generateToken(data) {
    let payload = {
        _id: data._id,
        iat: Date.now(),
        exp: moment().add(1, 'day').unix()
    };
    let token = jwt.sign(payload, JWT_SECRET);
    return token
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
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <link href='https://fonts.googleapis.com/css?family=PT+Serif|Lato:300' rel='stylesheet' type='text/css' />
                <style media="screen">
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
                <div style="text-align: center; font-weight: 300; font-family: 'Lato', sans-serif; padding-top:30px;">
                    <svg width="30px" viewBox="582 404 71 71" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Group-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(582.000000, 404.000000)">
                            <path d="M35,70 C54.3299662,70 70,54.3299662 70,35 C70,15.6700338 54.3299662,0 35,0 C15.6700338,0 0,15.6700338 0,35 C0,54.3299662 15.6700338,70 35,70 Z M35,59.5 C48.5309764,59.5 59.5,48.5309764 59.5,35 C59.5,21.4690236 48.5309764,10.5 35,10.5 C21.4690236,10.5 10.5,21.4690236 10.5,35 C10.5,48.5309764 21.4690236,59.5 35,59.5 Z" id="Combined-Shape" fill="#1E1E1E"></path>
                        </g>
                    </svg>
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
