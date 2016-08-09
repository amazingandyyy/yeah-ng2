import { Injectable } from '@angular/core';
// import io from 'socket-client';


@Injectable()
export class SocketService {
	socket: any;

	constructor() {
		const io = require('socket-client');
		//** Change this for production
		this.socket = io.connect('localhost:8000');
	}

	addEventListener(event: string) {
		this.socket.on(event, function(data) {
			console.log('things from socket', data);
		});
	}

	syncUpdates(modelName: string, array: Array<any>, cb: any) {
        cb = cb || function(){};

	    /**
	     * Syncs item creation/updates on 'model:save'
	     */
	    this.socket.on(modelName + ':save', function (item) {
	      
	      var oldItem = _.find(array, {_id: item._id});
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
	    this.socket.on(modelName + ':remove', function (item) {
	      var event = 'deleted';
	      _.remove(array, {_id: item._id});
	      cb(event, item, array);
	    });
	}//End of syncUpdates

      /**
       * Removes listeners for a models updates on the this.socket
       *
       * @param modelName
       */
    unsyncUpdates(modelName: string) {
        this.socket.removeAllListeners(modelName + ':save');
        this.socket.removeAllListeners(modelName + ':remove');
    }

}