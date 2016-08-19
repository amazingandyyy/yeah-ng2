'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
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
        default: 'normal',
        enum: [
            'app_regular1', 'app_regular2', 'app_regular3',
            'app_guarantee1', 'app_guarantee2',
            'app_president',
            'long_ch1', 'long_ch2', 'long_ch3',
            'long_us1', 'long_us2', 'long_us3'
        ]
    },
    price: {
        tag: String,
        unit: String
    },
    participants: {
        student: {
            userData: {
                type: mongoose.Schema.ObjectId,
                ref: 'Student',
                childPath: 'services'
            },
            confirmed: {
                type: Boolean,
                default: false
            }
        },
        advisor: {
            userData: {
                type: mongoose.Schema.ObjectId,
                ref: 'Advisor',
                childPath: 'services'
            },
            confirmed: {
                type: Boolean,
                default: false
            }
        },
        supervisor: {
            userData: {
                type: mongoose.Schema.ObjectId,
                ref: 'Supervisor',
                childPath: 'services'
            },
            confirmed: {
                type: Boolean,
                default: false
            }
        },
        admin: {
            userData: {
                type: mongoose.Schema.ObjectId,
                ref: 'Admin',
                childPath: 'services'
            },
            confirmed: {
                type: Boolean,
                default: false
            }
        }
    }
});

serviceSchema.plugin(autopopulate);
serviceSchema.plugin(relationship, { relationshipPathName: ['participants.student.userData', 'participants.advisor.userData', 'participants.supervisor.userData', 'participants.admin.userData'] });
let deepPopulateOption; 
serviceSchema.plugin(deepPopulate, deepPopulateOption);

serviceSchema.statics = {
    getOneService: function (serviceId, cb) {
        Service.findById(serviceId)
            .deepPopulate(deepPopulateOption)
            .exec((err, data) => {
                if (err || !data) return cb(err)
                cb(null, data)
            })
    }
}

deepPopulateOption = [
    'participants.student.userData.userData',
    'participants.advisor.userData.userData',
    'participants.supervisor.userData.userData',
    'participants.admin.userData.userData',
    'participants.student.userData.userData',
    'participants.advisor.userData.userData',
    'participants.supervisor.userData.userData',
    'participants.admin.userData.userData',
    'participants.student.userData.userData',
    'participants.advisor.userData.userData',
    'participants.supervisor.userData.userData',
    'participants.admin.userData.userData',
    'participants.student.userData.userData',
    'participants.advisor.userData.userData',
    'participants.supervisor.userData.userData',
    'participants.admin.userData.userData'
]

let Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
