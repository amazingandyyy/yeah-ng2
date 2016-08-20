/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Service = require('./service.model');

exports.register = function(socket) {
  Service.schema.post('save', function (doc) {
    // Call onSave
    onSave(socket, doc);
  });
  Service.schema.post('remove', function (doc) {
    // Call onRemove
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  if(doc.to) {
    socket.emit('service:save:' + doc.to, doc);
  }
}

function onRemove(socket, doc, cb) {
  socket.emit('service:remove', doc);
}