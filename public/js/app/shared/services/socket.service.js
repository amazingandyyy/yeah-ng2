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
var SocketService = (function () {
    function SocketService() {
        var io = require('socket-client'); //https://github.com/socketio/socket.io-client
        var _ = require('lodash');
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
    SocketService.prototype.syncArray = function (modelName, id, array, cb) {
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
            }
            else {
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
    }; //End of syncUpdates
    /**
     * Removes listeners for a models updates on the this.socket
     *
     * @param modelName
     */
    SocketService.prototype.unsyncArray = function (modelName, id) {
        this.socket.removeAllListeners(modelName + ':save:' + id);
        this.socket.removeAllListeners(modelName + ':remove:' + id);
    };
    SocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRzNDO0lBR0M7UUFDQyxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyw4Q0FBOEM7UUFDbkYsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsd0NBQWdCLEdBQWhCLFVBQWlCLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsSUFBSTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELDJDQUFtQixHQUFuQixVQUFvQixLQUFhO1FBQ2hDLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsZ0NBQVEsR0FBUixVQUFTLFNBQWlCLEVBQUUsRUFBVSxFQUFFLEVBQU87UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxFQUFFLEVBQUUsVUFBVSxJQUFJO1lBQ3ZELEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxTQUFpQixFQUFFLEVBQVU7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxhQUFhO0lBQ2IsaUNBQVMsR0FBVCxVQUFVLFNBQWlCLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsRUFBTztRQUNsRSxFQUFFLEdBQUcsRUFBRSxJQUFJLGNBQWMsQ0FBQyxDQUFDO1FBRTNCOztXQUVHO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxFQUFFLEVBQUUsVUFBVSxJQUFJO1lBQ3ZELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLG1DQUFtQztZQUNuQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUV0QiwrQkFBK0I7WUFDL0IsNENBQTRDO1lBQzVDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3QixLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ25CLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFFRCxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVIOztXQUVHO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRyxFQUFFLEVBQUUsVUFBVSxJQUFJO1lBQ3pELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN0QixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNuQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsRUFBQSxvQkFBb0I7SUFFckI7Ozs7T0FJRztJQUNILG1DQUFXLEdBQVgsVUFBWSxTQUFpQixFQUFFLEVBQVU7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBNUVGO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUE4RWIsb0JBQUM7QUFBRCxDQTdFQSxBQTZFQyxJQUFBO0FBN0VZLHFCQUFhLGdCQTZFekIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvc29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NrZXRTZXJ2aWNlIHtcblx0c29ja2V0OiBhbnk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Y29uc3QgaW8gPSByZXF1aXJlKCdzb2NrZXQtY2xpZW50Jyk7IC8vaHR0cHM6Ly9naXRodWIuY29tL3NvY2tldGlvL3NvY2tldC5pby1jbGllbnRcblx0XHRjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cdFx0dGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCk7XG5cdH1cblx0XG5cdC8vIEN1c3RvbWl6ZWQgRXZlbnRzLCBhZGRFdmVudCBPbkluaXQsIHJlbW92ZSBPbkRlc3Ryb3lcblx0YWRkRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nKSB7XG5cdFx0dGhpcy5zb2NrZXQub24oZXZlbnQsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndGhpbmdzIGZyb20gc29ja2V0JywgZGF0YSk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcpIHtcblx0XHQvLyBTb2NrZXQgZGVmdWFsdCBtZXRob2Rcblx0XHR0aGlzLnNvY2tldC5yZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpO1xuXHR9XG5cblx0Ly8gVXBkYXRlIGRvY3VtZW50IGJ5IGlkXG5cdHN5bmNCeUlkKG1vZGVsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBjYjogYW55KSB7XG5cdFx0dGhpcy5zb2NrZXQub24obW9kZWxOYW1lICsgJzpzYXZlOicgKyBpZCwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdGNiKGl0ZW0pO1xuXHRcdH0pO1xuXHR9XG5cblx0dW5zeW5jQnlJZChtb2RlbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuXHRcdHRoaXMuc29ja2V0LnJlbW92ZUFsbExpc3RlbmVycyhtb2RlbE5hbWUgKyAnOnNhdmU6JyArIGlkKTtcblx0fVxuXG5cdC8vIFN5bmMgYXJyYXlcblx0c3luY0FycmF5KG1vZGVsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBhcnJheTogQXJyYXk8YW55PiwgY2I6IGFueSkge1xuXHRcdGNiID0gY2IgfHwgZnVuY3Rpb24gKCkgeyB9O1xuXG5cdFx0LyoqXG5cdFx0ICogU3luY3MgaXRlbSBjcmVhdGlvbi91cGRhdGVzIG9uICdtb2RlbDpzYXZlJ1xuXHRcdCAqL1xuXHRcdHRoaXMuc29ja2V0Lm9uKG1vZGVsTmFtZSArICc6c2F2ZTonICsgaWQsIGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgb2xkSXRlbSA9IF8uZmluZChhcnJheSwgeyBfaWQ6IGl0ZW0uX2lkIH0pO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ29sZEl0ZW0nLCBvbGRJdGVtKTtcblx0XHRcdHZhciBpbmRleCA9IGFycmF5LmluZGV4T2Yob2xkSXRlbSk7XG5cdFx0XHR2YXIgZXZlbnQgPSAnY3JlYXRlZCc7XG5cblx0XHRcdC8vIHJlcGxhY2Ugb2xkSXRlbSBpZiBpdCBleGlzdHNcblx0XHRcdC8vIG90aGVyd2lzZSBqdXN0IGFkZCBpdGVtIHRvIHRoZSBjb2xsZWN0aW9uXG5cdFx0XHRpZiAob2xkSXRlbSkge1xuXHRcdFx0XHRhcnJheS5zcGxpY2UoaW5kZXgsIDEsIGl0ZW0pO1xuXHRcdFx0XHRldmVudCA9ICd1cGRhdGVkJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFycmF5LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cblx0XHRcdGNiKGV2ZW50LCBpdGVtLCBhcnJheSk7XG5cdFx0fSk7XG5cblx0XHQvKipcblx0XHQgKiBTeW5jcyByZW1vdmVkIGl0ZW1zIG9uICdtb2RlbDpyZW1vdmUnXG5cdFx0ICovXG5cdFx0dGhpcy5zb2NrZXQub24obW9kZWxOYW1lICsgJzpyZW1vdmU6JyArIGlkLCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGV2ZW50ID0gJ2RlbGV0ZWQnO1xuXHRcdFx0Xy5yZW1vdmUoYXJyYXksIHsgX2lkOiBpdGVtLl9pZCB9KTtcblx0XHRcdGNiKGV2ZW50LCBpdGVtLCBhcnJheSk7XG5cdFx0fSk7XG5cdH0vL0VuZCBvZiBzeW5jVXBkYXRlc1xuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIGxpc3RlbmVycyBmb3IgYSBtb2RlbHMgdXBkYXRlcyBvbiB0aGUgdGhpcy5zb2NrZXRcblx0ICpcblx0ICogQHBhcmFtIG1vZGVsTmFtZVxuXHQgKi9cblx0dW5zeW5jQXJyYXkobW9kZWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcblx0XHR0aGlzLnNvY2tldC5yZW1vdmVBbGxMaXN0ZW5lcnMobW9kZWxOYW1lICsgJzpzYXZlOicgKyBpZCk7XG5cdFx0dGhpcy5zb2NrZXQucmVtb3ZlQWxsTGlzdGVuZXJzKG1vZGVsTmFtZSArICc6cmVtb3ZlOicgKyBpZCk7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
