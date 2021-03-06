import { Injectable } from '@angular/core';

@Injectable()
export class SocketService {
	socket: any;

	constructor() {
		const io = require('socket-client'); //https://github.com/socketio/socket.io-client
		const _ = require('lodash');
		this.socket = io.connect();
	}
	
	// Customized Events, addEvent OnInit, remove OnDestroy
	addEventListener(event: string) {
		this.socket.on(event, function (data) {
			console.log('things from socket', data);
		});
	}

	removeEventListener(event: string) {
		// Socket defualt method
		this.socket.removeAllListeners(event);
	}

	// Update document by id
	syncById(modelName: string, id: string, cb: any) {
		this.socket.on(modelName + ':save:' + id, function (item) {
			cb(item);
		});
	}

	unsyncById(modelName: string, id: string) {
		this.socket.removeAllListeners(modelName + ':save:' + id);
	}

	// Sync array
	syncArray(modelName: string, id: string, array: Array<any>, cb: any) {
		cb = cb || function () { };

		/**
		 * Syncs item creation/updates on 'model:save'
		 */
		this.socket.on(modelName + ':save:' + id, function (item) {
			var oldItem = _.find(array, { _id: item._id });
			// console.log('oldItem', oldItem);
			var index = array.indexOf(oldItem);
			var event = 'created';

			// replace oldItem if it exists
			// otherwise just add item to the collection
			if (oldItem) {
				array.splice(index, 1, item);
				event = 'updated';
			} else {
				array.push(item);
			}

			cb(event, item, array);
		});

		/**
		 * Syncs removed items on 'model:remove'
		 */
		this.socket.on(modelName + ':remove:' + id, function (item) {
			var event = 'deleted';
			_.remove(array, { _id: item._id });
			cb(event, item, array);
		});
	}//End of syncUpdates

	/**
	 * Removes listeners for a models updates on the this.socket
	 *
	 * @param modelName
	 */
	unsyncArray(modelName: string, id: string) {
		this.socket.removeAllListeners(modelName + ':save:' + id);
		this.socket.removeAllListeners(modelName + ':remove:' + id);
	}

}