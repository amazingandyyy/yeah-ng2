/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Notification = require('./notification.model');

exports.register = function(socket) {
  Notification.schema.post('save', function (doc) {
    // Call onSave
    onSave(socket, doc);
  });
  Notification.schema.post('remove', function (doc) {
    // Call onRemove
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  if(doc.to) {
    socket.emit('notification:save:' + doc.to, doc);
  }
  // if(doc.from) {
  //   socket.emit('notification:save:' + doc.from, doc);
  // }
  
}

function onRemove(socket, doc, cb) {
  socket.emit('user:remove', doc);
}