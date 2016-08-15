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
        cb(savedNotice);
    });
};

Notification = mongoose.model('Notification', notificationSchema)
module.exports = Notification;