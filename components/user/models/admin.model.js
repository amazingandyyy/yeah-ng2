'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

let adminSchema = new mongoose.Schema({
    profile: {
        yeahEmail: {
            type: String
        }
    }
})
adminSchema.plugin(autopopulate);


let Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
