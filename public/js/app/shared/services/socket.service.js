System.register(['@angular/core', 'lodash'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lodash_1;
    var SocketService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }],
        execute: function() {
            SocketService = (function () {
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
            exports_1("SocketService", SocketService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUdDO29CQUNDLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLDhDQUE4QztvQkFDbkYsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsdURBQXVEO2dCQUN2RCx3Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBYTtvQkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsSUFBSTt3QkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDekMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkFFRCwyQ0FBbUIsR0FBbkIsVUFBb0IsS0FBYTtvQkFDaEMsd0JBQXdCO29CQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUVELHdCQUF3QjtnQkFDeEIsZ0NBQVEsR0FBUixVQUFTLFNBQWlCLEVBQUUsRUFBVSxFQUFFLEVBQU87b0JBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsRUFBRSxFQUFFLFVBQVUsSUFBSTt3QkFDdkQsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNWLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBRUQsa0NBQVUsR0FBVixVQUFXLFNBQWlCLEVBQUUsRUFBVTtvQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQUVELGFBQWE7Z0JBQ2IsaUNBQVMsR0FBVCxVQUFVLFNBQWlCLEVBQUUsS0FBaUIsRUFBRSxFQUFPO29CQUN0RCxFQUFFLEdBQUcsRUFBRSxJQUFJLGNBQWMsQ0FBQyxDQUFDO29CQUUzQjs7dUJBRUc7b0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLE9BQU8sRUFBRSxVQUFVLElBQUk7d0JBRWpELElBQUksT0FBTyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDL0MsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDO3dCQUV0QiwrQkFBK0I7d0JBQy9CLDRDQUE0Qzt3QkFDNUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDYixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7NEJBQzdCLEtBQUssR0FBRyxTQUFTLENBQUM7d0JBQ25CLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ1AsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEIsQ0FBQzt3QkFFRCxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLENBQUM7b0JBRUg7O3VCQUVHO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQUUsVUFBVSxJQUFJO3dCQUNuRCxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUM7d0JBQ3RCLGdCQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDbkMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUMsRUFBQSxvQkFBb0I7Z0JBRXJCOzs7O21CQUlHO2dCQUNILG1DQUFXLEdBQVgsVUFBWSxTQUFpQjtvQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQTNFRjtvQkFBQyxpQkFBVSxFQUFFOztpQ0FBQTtnQkE2RWIsb0JBQUM7WUFBRCxDQTVFQSxBQTRFQyxJQUFBO1lBNUVELHlDQTRFQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCBpbyBmcm9tICdzb2NrZXQtY2xpZW50JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvY2tldFNlcnZpY2Uge1xuXHRzb2NrZXQ6IGFueTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRjb25zdCBpbyA9IHJlcXVpcmUoJ3NvY2tldC1jbGllbnQnKTsgLy9odHRwczovL2dpdGh1Yi5jb20vc29ja2V0aW8vc29ja2V0LmlvLWNsaWVudFxuXHRcdHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgpO1xuXHR9XG5cdFxuXHQvLyBDdXN0b21pemVkIEV2ZW50cywgYWRkRXZlbnQgT25Jbml0LCByZW1vdmUgT25EZXN0cm95XG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZykge1xuXHRcdHRoaXMuc29ja2V0Lm9uKGV2ZW50LCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3RoaW5ncyBmcm9tIHNvY2tldCcsIGRhdGEpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nKSB7XG5cdFx0Ly8gU29ja2V0IGRlZnVhbHQgbWV0aG9kXG5cdFx0dGhpcy5zb2NrZXQucmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KTtcblx0fVxuXG5cdC8vIFVwZGF0ZSBkb2N1bWVudCBieSBpZFxuXHRzeW5jQnlJZChtb2RlbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgY2I6IGFueSkge1xuXHRcdHRoaXMuc29ja2V0Lm9uKG1vZGVsTmFtZSArICc6c2F2ZTonICsgaWQsIGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRjYihpdGVtKTtcblx0XHR9KTtcblx0fVxuXG5cdHVuc3luY0J5SWQobW9kZWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcblx0XHR0aGlzLnNvY2tldC5yZW1vdmVBbGxMaXN0ZW5lcnMobW9kZWxOYW1lICsgJzpzYXZlOicgKyBpZCk7XG5cdH1cblxuXHQvLyBTeW5jIGFycmF5XG5cdHN5bmNBcnJheShtb2RlbE5hbWU6IHN0cmluZywgYXJyYXk6IEFycmF5PGFueT4sIGNiOiBhbnkpIHtcblx0XHRjYiA9IGNiIHx8IGZ1bmN0aW9uICgpIHsgfTtcblxuXHRcdC8qKlxuXHRcdCAqIFN5bmNzIGl0ZW0gY3JlYXRpb24vdXBkYXRlcyBvbiAnbW9kZWw6c2F2ZSdcblx0XHQgKi9cblx0XHR0aGlzLnNvY2tldC5vbihtb2RlbE5hbWUgKyAnOnNhdmUnLCBmdW5jdGlvbiAoaXRlbSkge1xuXG5cdFx0XHR2YXIgb2xkSXRlbSA9IF8uZmluZChhcnJheSwgeyBfaWQ6IGl0ZW0uX2lkIH0pO1xuXHRcdFx0dmFyIGluZGV4ID0gYXJyYXkuaW5kZXhPZihvbGRJdGVtKTtcblx0XHRcdHZhciBldmVudCA9ICdjcmVhdGVkJztcblxuXHRcdFx0Ly8gcmVwbGFjZSBvbGRJdGVtIGlmIGl0IGV4aXN0c1xuXHRcdFx0Ly8gb3RoZXJ3aXNlIGp1c3QgYWRkIGl0ZW0gdG8gdGhlIGNvbGxlY3Rpb25cblx0XHRcdGlmIChvbGRJdGVtKSB7XG5cdFx0XHRcdGFycmF5LnNwbGljZShpbmRleCwgMSwgaXRlbSk7XG5cdFx0XHRcdGV2ZW50ID0gJ3VwZGF0ZWQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXJyYXkucHVzaChpdGVtKTtcblx0XHRcdH1cblxuXHRcdFx0Y2IoZXZlbnQsIGl0ZW0sIGFycmF5KTtcblx0XHR9KTtcblxuXHRcdC8qKlxuXHRcdCAqIFN5bmNzIHJlbW92ZWQgaXRlbXMgb24gJ21vZGVsOnJlbW92ZSdcblx0XHQgKi9cblx0XHR0aGlzLnNvY2tldC5vbihtb2RlbE5hbWUgKyAnOnJlbW92ZScsIGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgZXZlbnQgPSAnZGVsZXRlZCc7XG5cdFx0XHRfLnJlbW92ZShhcnJheSwgeyBfaWQ6IGl0ZW0uX2lkIH0pO1xuXHRcdFx0Y2IoZXZlbnQsIGl0ZW0sIGFycmF5KTtcblx0XHR9KTtcblx0fS8vRW5kIG9mIHN5bmNVcGRhdGVzXG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgbGlzdGVuZXJzIGZvciBhIG1vZGVscyB1cGRhdGVzIG9uIHRoZSB0aGlzLnNvY2tldFxuXHQgKlxuXHQgKiBAcGFyYW0gbW9kZWxOYW1lXG5cdCAqL1xuXHR1bnN5bmNBcnJheShtb2RlbE5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMuc29ja2V0LnJlbW92ZUFsbExpc3RlbmVycyhtb2RlbE5hbWUgKyAnOnNhdmUnKTtcblx0XHR0aGlzLnNvY2tldC5yZW1vdmVBbGxMaXN0ZW5lcnMobW9kZWxOYW1lICsgJzpyZW1vdmUnKTtcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
