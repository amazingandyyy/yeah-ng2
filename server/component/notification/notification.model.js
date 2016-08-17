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
    // "message" || "invitation" || "newService"
    state: String,
    read: {
        state: {
            type: Boolean,
            default: false
        },
        timeStamp: {
            type: Boolean
        }
    },
    createAt: {
        type: Number,
        default: Date.now
    }
})

notificationSchema.statics.sendNotice = function(message, cb) {
	let notice = new Notification({
		from: message.from,
		to: message.to,
		title: message.title,
		description: message.desc,
		response: message.res,
		state: message.state
	})
	notice.save((err, savedNotice) => {
        if (err) return cb(err)
        cb(null,savedNotice);
    });
};

notificationSchema.statics.getThreeNew = function(userId, cb) {
    Notification.find({to: userId})
    .sort({'date': -1})
    .limit(3)
    .exec(function(err, notice) {
        if(err) { cb(err) }
        cb(null, notice);
    });
};

Notification = mongoose.model('Notification', notificationSchema)
module.exports = Notification;