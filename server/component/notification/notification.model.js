'use strict';

const mongoose = require('mongoose');

let Notification;

let notificationSchema = new mongoose.Schema({
    from: {
    	type: mongoose.Schema.ObjectId,
    	ref: 'User'
    }, 
    to: {
    	type: mongoose.Schema.ObjectId,
    	ref: 'User'
    }, 
    title: String,
    description: String,
    response: Boolean,
    // "message" || "invitation" 
    state: String,
    read: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    service: {
        type: mongoose.Schema.ObjectId,
        ref: 'Service'
    }
})

notificationSchema.statics = {
    sendNotice: function(message, cb) {
        let notice = new Notification({
            from: message.from,
            to: message.to,
            title: message.title,
            description: message.desc,
            response: message.res,
            state: message.state,
            service: message.service
        });
        notice.save((err, savedNotice) => {
            if (err) return cb(err)
            cb(savedNotice);
        });
    },
    getThreeNew: function(userId, cb) {
        Notification.find({to: userId})
        .sort({'date': -1})
        .populate('from to', 'name role')
        .limit(3)
        .exec(function(err, notice) {
            if(err) { cb(err) }
            cb(null, notice);
        });
    },
    getAll: function(userId, cb) {
        Notification.find({to: userId})
        .sort({'date': -1})
        .exec(function(err, notice) {
            if(err) { cb(err) }
            cb(null, notice);
        });
    },
    notificationCount: function(userId, cb) {
        Notification.find({to: userId, read: false})
        .count()
        .exec(function(err, count) {
            if(err) { cb(err) }
            cb(null, count);
        });
    }
}


Notification = mongoose.model('Notification', notificationSchema)
module.exports = Notification;