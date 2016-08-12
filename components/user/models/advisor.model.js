'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Service = require('./service.model');

let advisorSchema = new mongoose.Schema({
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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            autopopulate: true
        }
    ]
})
advisorSchema.plugin(autopopulate);


let Advisor = mongoose.model('Advisor', advisorSchema);
module.exports = Advisor;
