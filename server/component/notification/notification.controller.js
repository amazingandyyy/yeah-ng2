'use strict';

var Notification = require('./notification.model');

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

exports.getCounts = function(req, res) {
	Notification.notificationCount(req.user._id, function(err, count) {
		if(err) { return handleError(res, err); }
		return res.status(201).json(count);
	});
};

function handleError(res, err) {
  console.log(err);
  return res.status(500).send(err);
}