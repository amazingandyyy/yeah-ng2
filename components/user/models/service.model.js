'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const JWT_SECRET = process.env.JWT_SECRET;

// Import data from other roleSchema
const Admin = require('./admin.model');
const Advisor = require('./advisor.model');
const Supervidor = require('./supervisor.model');

let serviceSchema = new mongoose.Schema({
    createAt: {
        type: Number,
        default: Date.now
    },
    details: {
        package: String,
        advisor: {
            type: mongoose.Schema.ObjectId,
            ref: 'Advisor',
            autopopulate: true
        },
        supervisor: {
            type: mongoose.Schema.ObjectId,
            ref: 'Supervisor',
            autopopulate: true
        },
        admin: {
            type: mongoose.Schema.ObjectId,
            ref: 'Admin',
            autopopulate: true
        }
    }
})

serviceSchema.plugin(autopopulate);

let Student = mongoose.model('Service', serviceSchema);
module.exports = Student;
