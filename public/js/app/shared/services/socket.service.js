"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import io from 'socket-client';
var lodash_1 = require('lodash');
var SocketService = (function () {
    function SocketService() {
        var io = require('socket-client'); //https://github.com/socketio/socket.io-client
        this.socket = io.connect();
    }
    // Customized Events, addEvent OnInit, remove OnDestroy
    SocketService.prototype.addEventListener = function (event) {
        this.socket.on(event, function (data) {
            console.log('things from socket', data);
        });
    };
    SocketService.prototype.removeEventListener = function (event) {
        // Socket defualt method
        this.socket.removeAllListeners(event);
    };
    // Update document by id
    SocketService.prototype.syncById = function (modelName, id, cb) {
        this.socket.on(modelName + ':save:' + id, function (item) {
            cb(item);
        });
    };
    SocketService.prototype.unsyncById = function (modelName, id) {
        this.socket.removeAllListeners(modelName + ':save:' + id);
    };
    // Sync array
    SocketService.prototype.syncArray = function (modelName, array, cb) {
        cb = cb || function () { };
        /**
         * Syncs item creation/updates on 'model:save'
         */
        this.socket.on(modelName + ':save', function (item) {
            var oldItem = lodash_1.default.find(array, { _id: item._id });
            var index = array.indexOf(oldItem);
            var event = 'created';
            // replace oldItem if it exists
            // otherwise just add item to the collection
            if (oldItem) {
                array.splice(index, 1, item);
                event = 'updated';
            }
            else {
                array.push(item);
            }
            cb(event, item, array);
        });
        /**
         * Syncs removed items on 'model:remove'
         */
        this.socket.on(modelName + ':remove', function (item) {
            var event = 'deleted';
            lodash_1.default.remove(array, { _id: item._id });
            cb(event, item, array);
        });
    }; //End of syncUpdates
    /**
     * Removes listeners for a models updates on the this.socket
     *
     * @param modelName
     */
    SocketService.prototype.unsyncArray = function (modelName) {
        this.socket.removeAllListeners(modelName + ':save');
        this.socket.removeAllListeners(modelName + ':remove');
    };
    SocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLGtDQUFrQztBQUNsQyx1QkFBYyxRQUFRLENBQUMsQ0FBQTtBQUl2QjtJQUdDO1FBQ0MsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsOENBQThDO1FBQ25GLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsd0NBQWdCLEdBQWhCLFVBQWlCLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsSUFBSTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELDJDQUFtQixHQUFuQixVQUFvQixLQUFhO1FBQ2hDLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsZ0NBQVEsR0FBUixVQUFTLFNBQWlCLEVBQUUsRUFBVSxFQUFFLEVBQU87UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxFQUFFLEVBQUUsVUFBVSxJQUFJO1lBQ3ZELEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxTQUFpQixFQUFFLEVBQVU7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxhQUFhO0lBQ2IsaUNBQVMsR0FBVCxVQUFVLFNBQWlCLEVBQUUsS0FBaUIsRUFBRSxFQUFPO1FBQ3RELEVBQUUsR0FBRyxFQUFFLElBQUksY0FBYyxDQUFDLENBQUM7UUFFM0I7O1dBRUc7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxFQUFFLFVBQVUsSUFBSTtZQUVqRCxJQUFJLE9BQU8sR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDL0MsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUM7WUFFdEIsK0JBQStCO1lBQy9CLDRDQUE0QztZQUM1QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0IsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUNuQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDO1lBRUQsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSDs7V0FFRztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQUUsVUFBVSxJQUFJO1lBQ25ELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN0QixnQkFBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLEVBQUEsb0JBQW9CO0lBRXJCOzs7O09BSUc7SUFDSCxtQ0FBVyxHQUFYLFVBQVksU0FBaUI7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQTNFRjtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBNkViLG9CQUFDO0FBQUQsQ0E1RUEsQUE0RUMsSUFBQTtBQTVFWSxxQkFBYSxnQkE0RXpCLENBQUEiLCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IGlvIGZyb20gJ3NvY2tldC1jbGllbnQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29ja2V0U2VydmljZSB7XG5cdHNvY2tldDogYW55O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGNvbnN0IGlvID0gcmVxdWlyZSgnc29ja2V0LWNsaWVudCcpOyAvL2h0dHBzOi8vZ2l0aHViLmNvbS9zb2NrZXRpby9zb2NrZXQuaW8tY2xpZW50XG5cdFx0dGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCk7XG5cdH1cblx0XG5cdC8vIEN1c3RvbWl6ZWQgRXZlbnRzLCBhZGRFdmVudCBPbkluaXQsIHJlbW92ZSBPbkRlc3Ryb3lcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nKSB7XG5cdFx0dGhpcy5zb2NrZXQub24oZXZlbnQsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndGhpbmdzIGZyb20gc29ja2V0JywgZGF0YSk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcpIHtcblx0XHQvLyBTb2NrZXQgZGVmdWFsdCBtZXRob2Rcblx0XHR0aGlzLnNvY2tldC5yZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpO1xuXHR9XG5cblx0Ly8gVXBkYXRlIGRvY3VtZW50IGJ5IGlkXG5cdHN5bmNCeUlkKG1vZGVsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBjYjogYW55KSB7XG5cdFx0dGhpcy5zb2NrZXQub24obW9kZWxOYW1lICsgJzpzYXZlOicgKyBpZCwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdGNiKGl0ZW0pO1xuXHRcdH0pO1xuXHR9XG5cblx0dW5zeW5jQnlJZChtb2RlbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuXHRcdHRoaXMuc29ja2V0LnJlbW92ZUFsbExpc3RlbmVycyhtb2RlbE5hbWUgKyAnOnNhdmU6JyArIGlkKTtcblx0fVxuXG5cdC8vIFN5bmMgYXJyYXlcblx0c3luY0FycmF5KG1vZGVsTmFtZTogc3RyaW5nLCBhcnJheTogQXJyYXk8YW55PiwgY2I6IGFueSkge1xuXHRcdGNiID0gY2IgfHwgZnVuY3Rpb24gKCkgeyB9O1xuXG5cdFx0LyoqXG5cdFx0ICogU3luY3MgaXRlbSBjcmVhdGlvbi91cGRhdGVzIG9uICdtb2RlbDpzYXZlJ1xuXHRcdCAqL1xuXHRcdHRoaXMuc29ja2V0Lm9uKG1vZGVsTmFtZSArICc6c2F2ZScsIGZ1bmN0aW9uIChpdGVtKSB7XG5cblx0XHRcdHZhciBvbGRJdGVtID0gXy5maW5kKGFycmF5LCB7IF9pZDogaXRlbS5faWQgfSk7XG5cdFx0XHR2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKG9sZEl0ZW0pO1xuXHRcdFx0dmFyIGV2ZW50ID0gJ2NyZWF0ZWQnO1xuXG5cdFx0XHQvLyByZXBsYWNlIG9sZEl0ZW0gaWYgaXQgZXhpc3RzXG5cdFx0XHQvLyBvdGhlcndpc2UganVzdCBhZGQgaXRlbSB0byB0aGUgY29sbGVjdGlvblxuXHRcdFx0aWYgKG9sZEl0ZW0pIHtcblx0XHRcdFx0YXJyYXkuc3BsaWNlKGluZGV4LCAxLCBpdGVtKTtcblx0XHRcdFx0ZXZlbnQgPSAndXBkYXRlZCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhcnJheS5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjYihldmVudCwgaXRlbSwgYXJyYXkpO1xuXHRcdH0pO1xuXG5cdFx0LyoqXG5cdFx0ICogU3luY3MgcmVtb3ZlZCBpdGVtcyBvbiAnbW9kZWw6cmVtb3ZlJ1xuXHRcdCAqL1xuXHRcdHRoaXMuc29ja2V0Lm9uKG1vZGVsTmFtZSArICc6cmVtb3ZlJywgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBldmVudCA9ICdkZWxldGVkJztcblx0XHRcdF8ucmVtb3ZlKGFycmF5LCB7IF9pZDogaXRlbS5faWQgfSk7XG5cdFx0XHRjYihldmVudCwgaXRlbSwgYXJyYXkpO1xuXHRcdH0pO1xuXHR9Ly9FbmQgb2Ygc3luY1VwZGF0ZXNcblxuXHQvKipcblx0ICogUmVtb3ZlcyBsaXN0ZW5lcnMgZm9yIGEgbW9kZWxzIHVwZGF0ZXMgb24gdGhlIHRoaXMuc29ja2V0XG5cdCAqXG5cdCAqIEBwYXJhbSBtb2RlbE5hbWVcblx0ICovXG5cdHVuc3luY0FycmF5KG1vZGVsTmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5zb2NrZXQucmVtb3ZlQWxsTGlzdGVuZXJzKG1vZGVsTmFtZSArICc6c2F2ZScpO1xuXHRcdHRoaXMuc29ja2V0LnJlbW92ZUFsbExpc3RlbmVycyhtb2RlbE5hbWUgKyAnOnJlbW92ZScpO1xuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
