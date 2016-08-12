'use strict';
/* Share socket throughout the modules needed */

module.exports = {
	socket: {},

	getSocket(socket) {
		this.socket = socket;
	},

	emit(event, obj) {
		this.socket.emit(event, obj);
	}
};