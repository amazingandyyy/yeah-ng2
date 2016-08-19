'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Service = require('./service.model');
const User = require('./user.model');

let advisorSchema = new mongoose.Schema({
    userData: {
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
    services: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            autopopulate: true
        }
    ],
    createAt: {
        type: Number,
        default: Date.now
    }
})
advisorSchema.plugin(autopopulate);


let Advisor = mongoose.model('Advisor', advisorSchema);
module.exports = Advisor;
