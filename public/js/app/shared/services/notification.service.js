System.register(['@angular/core', 'rxjs/Observable', 'angular2-jwt'], function(exports_1, context_1) {
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
    var core_1, Observable_1, angular2_jwt_1;
    var NotificationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            NotificationService = (function () {
                function NotificationService(authHttp) {
                    this.authHttp = authHttp;
                }
                NotificationService.prototype.getThree = function () {
                    return this.authHttp.get('/api/notification/getThreeNew')
                        .map(this.handelResponse)
                        .catch(this.handelError);
                };
                //Get unread count
                NotificationService.prototype.getCount = function () {
                    return this.authHttp.get('/api/notification/getCounts')
                        .map(this.handelResponse)
                        .catch(this.handelError);
                };
                NotificationService.prototype.handelResponse = function (res) {
                    return res.json() || {};
                };
                NotificationService.prototype.handelError = function (err) {
                    return Observable_1.Observable.throw(err);
                };
                NotificationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
                ], NotificationService);
                return NotificationService;
            }());
            exports_1("NotificationService", NotificationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUVDLDZCQUNTLFFBQWtCO29CQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO2dCQUN4QixDQUFDO2dCQUVKLHNDQUFRLEdBQVI7b0JBQ08sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDO3lCQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCxrQkFBa0I7Z0JBQ2xCLHNDQUFRLEdBQVI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDO3lCQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCw0Q0FBYyxHQUFkLFVBQWUsR0FBYTtvQkFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUEseUNBQVcsR0FBWCxVQUFZLEdBQVE7b0JBQ2pCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkExQkw7b0JBQUMsaUJBQVUsRUFBRTs7dUNBQUE7Z0JBNEJiLDBCQUFDO1lBQUQsQ0EzQkEsQUEyQkMsSUFBQTtZQTNCRCxxREEyQkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi90eXBlcy9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgQXV0aEh0dHAgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uU2VydmljZSB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGF1dGhIdHRwOiBBdXRoSHR0cFxuXHQpIHt9XG5cblx0Z2V0VGhyZWUoKTogT2JzZXJ2YWJsZTxBcnJheTxOb3RpZmljYXRpb24+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldCgnL2FwaS9ub3RpZmljYXRpb24vZ2V0VGhyZWVOZXcnKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgLy9HZXQgdW5yZWFkIGNvdW50XG4gICAgZ2V0Q291bnQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KCcvYXBpL25vdGlmaWNhdGlvbi9nZXRDb3VudHMnKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgaGFuZGVsUmVzcG9uc2UocmVzOiBSZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKSB8fCB7fTtcbiAgICB9XG4gICAgXG4gICAgIGhhbmRlbEVycm9yKGVycjogYW55KSB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
