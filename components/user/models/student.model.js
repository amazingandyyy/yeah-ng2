'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Service = require('./service.model');

let studentSchema = new mongoose.Schema({
    profile: {
        // starting here are the keys everyone has
        phone: Number,
        wechatId: String,
        currentAcademics: {
            name: String,
            startTime: Number,
            transferTime: Number,
            major: String,
            schoolEmail: String,
            yearOfStudy: String,
        },
        futureAcademics: {
            school: String,
            major: Number
        },
        langauges: [
            { type: String }
        ]
    },
    service: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            autopopulate: true
        }
    ]
})
studentSchema.plugin(autopopulate);

let Student = mongoose.model('Student', studentSchema);
module.exports = Student;
