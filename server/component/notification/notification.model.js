'use strict';

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const relationship = require('mongoose-relationship');
const deepPopulate = require('mongoose-deep-populate')(mongoose);

let Notification;

let notificationSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        autopopulate: true,
        childPath: 'notifications'
    },
    to: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        autopopulate: true,
        childPath: 'notifications'
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    response: {
        type: Boolean
    },
    state: {
        type: String,
        enum: ['message', 'invitation']
    },
    read: {
        state: {
            type: Boolean,
            default: false
        },
        timeStamp: {
            type: Number
        }
    },
    createAt: {
        type: Number,
        default: Date.now
    },
    attachment: {
        service: {
            type: mongoose.Schema.ObjectId,
            ref: 'Service'
        }
    }
})

notificationSchema.plugin(autopopulate);
notificationSchema.plugin(relationship, { relationshipPathName: ['from', 'to'] });

notificationSchema.plugin(deepPopulate, {
  populate: {
    'from.photo': {
      select: 'url'
    },
    'to.photo': {
      select: 'url'
    }
  }
});

notificationSchema.statics = {
    sendNotice: function (message, cb) {
        let notice = new Notification({
            from: message.from,
            to: message.to,
            title: message.title,
            description: message.desc,
            response: message.res,
            state: message.state,
            attachment: {
                service: message.serviceId
            }
        });
        console.log('notice: ', notice)
        notice.save((err, savedNotice) => {
            if (err) return cb(err)
            console.log('savedNotice: ', savedNotice)
            Notification.findById(savedNotice._id,(err, dbNotice)=>{
                if (err) return cb(err)
                console.log('dbNotice: ', dbNotice)
                cb(null, dbNotice);
            })
        });
    },
    getThreeNew: function (userId, cb) {
        Notification.find({ to: userId, 'read.state': false })
            .sort({ 'createAt': -1 })
            .populate('from to', 'name role')
            .limit(3)
            .exec(function (err, notice) {
                if (err) return cb(err)
                cb(null, notice);
            });
    },
    getAll: function (userId, cb) {
        //Getting the notification intended for user
        Notification.find({ $or: [{ to: userId }, { from: userId }] })
            .sort({ 'createAt': -1 })
            .exec(function (err, notice) {
                if (err) return cb(err)
                cb(null, notice);
            });
    },
    notificationCount: function (userId, cb) {
        Notification.find({ to: userId, 'read.state': false })
            .count()
            .exec(function (err, count) {
                if (err) return cb(err)
                cb(null, count);
            });
    }
}


Notification = mongoose.model('Notification', notificationSchema)
module.exports = Notification;