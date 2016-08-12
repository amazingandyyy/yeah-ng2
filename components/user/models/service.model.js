'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const JWT_SECRET = process.env.JWT_SECRET;

// Import data from other roleSchema
const Admin = require('./admin.model');
const Advisor = require('./advisor.model');
const Supervidor = require('./supervisor.model');
const Student = require('./student.model');

let serviceSchema = new mongoose.Schema({
    createAt: {
        type: Number,
        default: Date.now
    },
    package: {
        type: String,
        default: 'normal'
    },
    details: {
        student: {
            type: mongoose.Schema.ObjectId,
            ref: 'Student',
            // autopopulate: true
        },
        advisor: {
            userId: {
                type: mongoose.Schema.ObjectId,
                ref: 'Advisor',
                // autopopulate: true
            },
            confirmed: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        supervisor: {
            userId: {
                type: mongoose.Schema.ObjectId,
                ref: 'Supervisor',
                // autopopulate: true
            },
            confirmed: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        admin: {
            userId: {
                type: mongoose.Schema.ObjectId,
                ref: 'Admin',
                // autopopulate: true
            },
            confirmed: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    }
})

serviceSchema.plugin(autopopulate);

let Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
