'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const User = require('./user.model');
const Service = require('./service.model');

let supervisorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    profile: {
        phone: Number,
        wechatId: String,
        university: {
            name: String,
            graduateTime: Number,
            major: [{ type: String }]
        },
        college: {
            name: String,
            transferTime: Number,
            major: [{ type: String }]
        },
        langauges: [
            { type: String }
        ],
        profession: {
            company: String,
            position: String,
            positionDescription: String
        }
    },
    service: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Service',
            autopopulate: true
        }
    ]
})

let Supervisor = mongoose.model('Supervisor', supervisorSchema);
module.exports = Supervisor;
