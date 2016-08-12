'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Service = require('./service.model');

let superadminSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    profile: {
        yeahEmail: {
            type: String
        }
    }
})

let Superadmin = mongoose.model('Superadmin', superadminSchema);
module.exports = Superadmin;