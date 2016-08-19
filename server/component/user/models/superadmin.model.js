'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Service = require('../../service/service.model');

let superadminSchema = new mongoose.Schema({
    userData: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    profile: {
        yeahEmail: {
            type: String
        }
    },
    createAt: {
        type: Number,
        default: Date.now
    }
})

let Superadmin = mongoose.model('Superadmin', superadminSchema);
module.exports = Superadmin;