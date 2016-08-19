'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Service = require('../../service/service.model');
const User = require('./user.model');

let adminSchema = new mongoose.Schema({
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
    createAt: {
        type: Number,
        default: Date.now
    }
})
adminSchema.plugin(autopopulate);



let Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
