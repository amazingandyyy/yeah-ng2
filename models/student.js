'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const uuid = require('uuid');
const autopopulate = require('mongoose-autopopulate');
const CronJob = require('cron').CronJob;

const ses = require('node-ses')
const SESserver = ses.createClient({
    key: process.env.AWS_KEY,
    secret: process.env.AWS_SECRET
})
// let AWS = require('aws-sdk');
// let s3 = new AWS.S3();
// let bucketName = process.env.AWS_BUCKET;
// let urlBase = process.env.AWS_URL_BASE;
// let CVPkey = process.env.MSFT_CVP_KEY;

const JWT_SECRET = process.env.JWT_SECRET;

let Student;

let StudentSchema = new mongoose.Schema({
    info: {
        fullCName: {
            type: String
        },
        fullEName: {
            type: String
        },
        package: {
            type: String
        },
        customerService: {
            type: String
        }
    }
})
StudentSchema.plugin(autopopulate);

Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
