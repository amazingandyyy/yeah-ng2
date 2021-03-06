/**
 * Socket.io configuration
 */
'use strict';

// When the user disconnects.. perform this
function onDisconnect(socket) {
};

// When the user connects.. perform this
function onConnect(socket) {
  
  // Share socket for other modules
  require('./server/sockets').getSocket(socket);

  // Insert sockets for model change below
  require('./server/component/user/user.socket').register(socket);
  require('./server/component/notification/notification.socket').register(socket);
  require('./server/component/service/service.socket').register(socket);
  // ... more to add
};

module.exports = function (socketio) {

  socketio.on('connection', function (socket) {
    // socket.address = socket.handshake.address !== null ?
    //         socket.handshake.address.address + ':' + socket.handshake.address.port :
    //         process.env.DOMAIN;

    socket.connectedAt = new Date();

    // Call onDisconnect.
    socket.on('disconnect', function () {
      onDisconnect(socket);
      console.info('Socket DISCONNECTED');
    });

    // Call onConnect.
    onConnect(socket);
   
    console.info('Socket CONNECTED');
  });
};