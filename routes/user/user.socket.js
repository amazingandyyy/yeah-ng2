/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var User = require('./user.model');

exports.register = function(socket) {
  User.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  User.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
	console.log('user saved', doc);
  socket.emit('user:save:' + doc._id, doc);
  socket.emit('user:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('user:remove', doc);
}