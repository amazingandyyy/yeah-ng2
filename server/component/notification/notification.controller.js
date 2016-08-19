'use strict';

const Notification = require('./notification.model');
const Service = require('../service/service.model');
const _ = require('lodash');

exports.index = function(req, res) {
	res.render('index');
};

exports.createNotification = function(req, res) {
	var sentFrom = { from: req.user._id };
	var newNotice = _.merge(req.body, sentFrom);
	Notification.create(newNotice, function(err, notice) {
		if(err) { return handleError(res, err); }
		return res.status(201).json(notice);
	});
};

exports.getThreeNew = function(req, res) {
	Notification.getThreeNew(req.user._id, function(err, notices) {
		if(err) { return handleError(res, err); }
		return res.status(201).json(notices);
	}); 
};

exports.getAll = function(req, res) {
	Notification.getAll(req.user._id, function(err, notices) {
		if(err) { return handleError(res, err); }
		return res.status(201).json(notices);
	});
};

exports.getCounts = function(req, res) {
	Notification.notificationCount(req.user._id, function(err, count) {
		if(err) { return handleError(res, err); }
		return res.status(201).json(count);
	});
};

exports.confirmInvitation = function(req, res) {
	Notification.findById(req.body._id, function(err, notice) {
		if(err) { return handleError(res, err); }
		var newNotice = _.merge(notice, req.body);
		newNotice.read.state = true;
		newNotice.read.timeStamp = Date.now();
		newNotice.save(function(err, savedNotice) {
			//Update User Relationship
			console.log('notification found', savedNotice);
			Service.findById(savedNotice.service, function(err, serviceFound) {
				if(err) { return handleError(res, err); }
				//When invite accept
				if(serviceFound.participants[notice.from.role] && serviceFound.participants[notice.to.role]) {
					if(notice.response) {
						serviceFound.participants[notice.from.role]['confirmed'] = true;
						serviceFound.participants[notice.to.role]['confirmed'] = true;
					} else {
						serviceFound.participants[notice.from.role]['confirmed'] = false;
						serviceFound.participants[notice.to.role]['confirmed'] = false;
					}
				}
				serviceFound.save();
			});
			return res.status(201).json(savedNotice);
		});
	});
};

function handleError(res, err) {
  console.log(err);
  return res.status(500).send(err);
}