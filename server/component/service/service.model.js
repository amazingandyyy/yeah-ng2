'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const JWT_SECRET = process.env.JWT_SECRET;
const _ = require('lodash');

// Import data from other roleSchema

const Admin = require('../user/models/admin.model');
const Advisor = require('../user/models/advisor.model');
const Supervidor = require('../user/models/supervisor.model');
const Student = require('../user/models/student.model');

const relationship = require('mongoose-relationship');

let serviceSchema = new mongoose.Schema({
    createAt: {
        type: Date,
        default: Date.now
    },
    package: {
        type: String,
        default: 'normal',
        enum: [
            'app_regular1', 'app_regular2', 'app_regular3',
            'app_guarantee1', 'app_guarantee2',
            'app_president',
            'long_cn1', 'long_cn2', 'long_cn3',
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
                ref: 'User',
                childPath: 'services',
                autopopulate: true
            },
            confirmed: {
                type: Boolean,
                default: false
            }
        },
        advisor: {
            userData: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                childPath: 'services',
                autopopulate: true
            },
            confirmed: {
                type: Boolean,
                default: false
            }
        },
        supervisor: {
            userData: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                childPath: 'services',
                autopopulate: true
            },
            confirmed: {
                type: Boolean,
                default: false
            }
        },
        admin: {
            userData: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                childPath: 'services',
                autopopulate: true
            },
            confirmed: {
                type: Boolean,
                default: false
            }
        }
    }
});

const User = require('../user/models/user.model');

serviceSchema.plugin(autopopulate);

serviceSchema.plugin(relationship, { relationshipPathName: ['participants.student.userData', 'participants.advisor.userData', 'participants.supervisor.userData', 'participants.admin.userData'] });
let deepPopulateOption;

serviceSchema.plugin(deepPopulate, deepPopulateOption);

serviceSchema.statics = {
    getOneService: function (serviceId, cb) {
        Service.findById(serviceId)
            // .deepPopulate(deepPopulateOption)
            .exec((err, data) => {
                if (err || !data) return cb(err)
                cb(null, data)
            })
    },
    updateService: function (service, cb) {
        Service.findById(service._id, (err, dbService) => {
            if (err, !dbService) return cb(err || { message: 'service not found.' });
            let advisorChanged = service.participants.advisor.newAdvisorEmail;
            let advisorAlreadyExists = service.participants.advisor.userData && service.participants.advisor.userData._id;
            // let adminChanged = service.participants.admin.email;
            console.log('advisorChanged: ', advisorChanged);
            if (advisorChanged) {
                if (advisorAlreadyExists) {
                    console.log('advisorAlreadyExists: ', advisorAlreadyExists)
                    // delete the service in the advisor
                    mongoose.model('User').findById(advisorAlreadyExists, (err, dbAdvisor) => {
                        if (err || !dbAdvisor) return cb(err || { message: 'dbAdvisor is not found.' })
                        let index = dbAdvisor.services.indexOf(dbService._id);
                        dbAdvisor.services.splice(index, 1)
                        dbAdvisor.save((err, savedAdvisor) => {
                            if (err) return cb(err)
                        })
                    });
                }
                mongoose.model('User').findOne({ 'email.data': service.participants.advisor.newAdvisorEmail }, (err, dbUser) => {
                    if (err || !dbUser) return cb(err || { message: 'Email is not found.' });
                    if (dbUser.role == 'advisor') {
                        console.log('new advisor!')
                        // it's a user and it's advisor
                        dbUser.services.push(dbService._id)
                        dbUser.save((err, savedUser) => {
                            if (err) return cb(err);
                            dbService.participants.advisor.userData = dbUser._id;
                            dbService.save((err, savedService) => {
                                if (err) return cb(err)
                                console.log('savedService: ', savedService)
                                cb(null, savedService)
                            })
                        })
                    } else {
                        cb({ message: 'Please enter an advisor\'s email' })
                    }
                })
            }
        })
    }
}

let Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
