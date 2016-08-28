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
    doc.deepPopulate('from to', function(err, _doc) {
      console.log('_doc.to', _doc);
      socket.emit('notification:save:' + doc.to._id, _doc);
    });
  }
  if(doc.from) {
    doc.deepPopulate('from to', function(err, _doc) {
      socket.emit('notification:save:' + doc.from._id, _doc);
    });
  }
  
}

function onRemove(socket, doc, cb) {
  socket.emit('notification:remove', doc);
}