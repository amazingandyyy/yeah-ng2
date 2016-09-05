'use strict';

const Notification = require('./notification.model');
const Service = require('../service/service.model');
const _ = require('lodash');
const mockData = require('./message.mock.json');

exports.index = function (req, res) {
	res.render('index');
};

exports.createNotification = function (req, res) {
	var sentFrom = { from: req.user._id };
	var newNotice = _.merge(req.body, sentFrom);
	Notification.create(newNotice, function (err, notice) {
		if (err) { return handleError(res, err); }
		return res.status(201).json(notice);
	});
};

exports.getThreeNew = function (req, res) {
	console.log('get three new: ', req.user._id);
	Notification.getThreeNew(req.user._id, function (err, notices) {
		if (err) { return handleError(res, err); }
		return res.status(201).json(notices);
	});
};

exports.getAll = function(req, res) {
	Notification.getAll(req.user._id, function(err, notices) {
		if(err) { return handleError(res, err); }
		return res.status(201).json(notices);
	});
};

exports.getCounts = function (req, res) {
	Notification.notificationCount(req.user._id, function (err, count) {
		if (err) { return handleError(res, err); }
		return res.status(201).json(count);
	});
};

exports.confirmInvitation = function (req, res) {
	console.log('req.body: ', req.body)
	Notification.findById(req.body._id, function (err, dbNotice) {
		if (err || !dbNotice) return handleError(res, err, '@Notification.findById'); 
		var newNotice = _.merge(dbNotice, req.body);
		Service.findById(newNotice.attachment.service, function (err, dbService) {
			if (err || !dbService) return handleError(res, (err || { err: 'No service found!' }));
			console.log('dbService: ', dbService)
			console.log('newNotice: ', newNotice)
			if (dbService.participants[newNotice.from.role] && dbService.participants[newNotice.to.role]) {
				console.log('check')
				if (newNotice.response) {
					//When invite accept
					dbService.participants[newNotice.from.role].confirmed = true;
					dbService.participants[newNotice.to.role].confirmed = true;
					dbService.save((err, updatedService) => {
						if (err) return handleError(res, err);
						newNotice.read.state = true;
						newNotice.read.timeStamp = Date.now();
						newNotice.save(function (err, updatedNotice) {
							if (err) return handleError(res, err);
							//Update User Relationship
							console.log('notification saved', updatedNotice);
							return res.status(200).send({
								updatedService: updatedService,
								updatedNotice: updatedNotice
							});
						})
					});
				} else {
					dbService.participants[newNotice.from.role].confirmed = false;
					dbService.participants[newNotice.to.role].confirmed = false;
					dbService.save((err, updatedService) => {
						if (err) return handleError(res, err);
						newNotice.read.state = true;
						newNotice.read.timeStamp = Date.now();
						newNotice.save(function (err, updatedNotice) {
							if (err) return handleError(res, err);
							//Update User Relationship
							console.log('notification saved', updatedNotice);
							return res.status(200).send({
								updatedService: updatedService,
								updatedNotice: updatedNotice
							});
						})
					});
				}
			}else{
				return handleError(res, { err: 'Not read successfully!' });
			}
		});
	});
};

function handleError(res, err, state) {
	console.log(state, ': ', err);
	return res.status(500).send(err);
}