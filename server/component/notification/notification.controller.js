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

function handleError(res, err) {
  console.log(err);
  return res.status(500).send(err);
}