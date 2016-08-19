'use strict';

const Service = require('./service.model');
const _ = require('lodash');

exports.index = function(req, res) {
	res.render('index');
};

exports.getAll = function(req, res) {
	Service.find({}, function(err, notices) {
		if(err) { return handleError(res, err); }
		return res.status(201).json(notices);
	});
};


function handleError(res, err) {
  console.log(err);
  return res.status(500).send(err);
}