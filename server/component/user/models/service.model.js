'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const JWT_SECRET = process.env.JWT_SECRET;

// Import data from other roleSchema
const Admin = require('./admin.model');
const Advisor = require('./advisor.model');
const Supervidor = require('./supervisor.model');
const Student = require('./student.model');

const relationship = require('mongoose-relationship');

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
            userId: {
                type: mongoose.Schema.ObjectId,
                ref: 'Student',
                childPath: 'services'
                // autopopulate: true
            }
        },
        advisor: {
            userId: {
                type: mongoose.Schema.ObjectId,
                ref: 'Advisor',
                childPath: 'services'
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
                childPath: 'services'
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
                childPath: 'services'
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
serviceSchema.plugin(relationship, { relationshipPathName:['details.student.userId', 'details.advisor.userId', 'details.supervisor.userId', 'details.admin.userId'] });

let Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
