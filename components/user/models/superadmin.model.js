'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Service = require('./service.model');

let superadminSchema = new mongoose.Schema({
    profile: {
        yeahEmail: {
            type: String
        }
    }
})
superadminSchema.plugin(autopopulate);

let Superadmin = mongoose.model('Superadmin', superadminSchema);
module.exports = Superadmin;
