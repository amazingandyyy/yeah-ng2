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
    var NoticeService;
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
            NoticeService = (function () {
                function NoticeService(authHttp) {
                    this.authHttp = authHttp;
                }
                NoticeService.prototype.getThree = function () {
                    return this.authHttp.get('/api/notification/getThreeNew')
                        .map(this.handelResponse)
                        .catch(this.handelError);
                };
                //Get unread count
                NoticeService.prototype.getCount = function () {
                    return this.authHttp.get('/api/notification/getCounts')
                        .map(this.handelResponse)
                        .catch(this.handelError);
                };
                NoticeService.prototype.confirmInvitation = function (notification) {
                    return this.authHttp.post('/api/notification/confirmInvitation', notification)
                        .map(this.handelResponse)
                        .catch(this.handelError);
                };
                NoticeService.prototype.handelResponse = function (res) {
                    return res.json() || {};
                };
                NoticeService.prototype.handelError = function (err) {
                    return Observable_1.Observable.throw(err);
                };
                NoticeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
                ], NoticeService);
                return NoticeService;
            }());
            exports_1("NoticeService", NoticeService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUVDLHVCQUNTLFFBQWtCO29CQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO2dCQUN4QixDQUFDO2dCQUVKLGdDQUFRLEdBQVI7b0JBQ08sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDO3lCQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCxrQkFBa0I7Z0JBQ2xCLGdDQUFRLEdBQVI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDO3lCQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsWUFBMEI7b0JBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxZQUFZLENBQUM7eUJBQ3pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO3lCQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUNoQyxDQUFDO2dCQUVELHNDQUFjLEdBQWQsVUFBZSxHQUFhO29CQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFFQSxtQ0FBVyxHQUFYLFVBQVksR0FBUTtvQkFDakIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQWhDTDtvQkFBQyxpQkFBVSxFQUFFOztpQ0FBQTtnQkFrQ2Isb0JBQUM7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNELHlDQWlDQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3R5cGVzL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpY2VTZXJ2aWNlIHtcblx0XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgYXV0aEh0dHA6IEF1dGhIdHRwXG5cdCkge31cblxuXHRnZXRUaHJlZSgpOiBPYnNlcnZhYmxlPEFycmF5PE5vdGlmaWNhdGlvbj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KCcvYXBpL25vdGlmaWNhdGlvbi9nZXRUaHJlZU5ldycpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICAvL0dldCB1bnJlYWQgY291bnRcbiAgICBnZXRDb3VudCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoJy9hcGkvbm90aWZpY2F0aW9uL2dldENvdW50cycpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBjb25maXJtSW52aXRhdGlvbihub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLnBvc3QoJy9hcGkvbm90aWZpY2F0aW9uL2NvbmZpcm1JbnZpdGF0aW9uJywgbm90aWZpY2F0aW9uKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgaGFuZGVsUmVzcG9uc2UocmVzOiBSZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKSB8fCB7fTtcbiAgICB9XG4gICAgXG4gICAgIGhhbmRlbEVycm9yKGVycjogYW55KSB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
