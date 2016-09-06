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
var Observable_1 = require('rxjs/Observable');
var angular2_jwt_1 = require('angular2-jwt');
var NoticeService = (function () {
    function NoticeService(authHttp) {
        this.authHttp = authHttp;
    }
    NoticeService.prototype.getThree = function () {
        return this.authHttp.get('/api/notification/getThreeNew')
            .map(this.handelResponse)
            .catch(this.handelError);
    };
    NoticeService.prototype.getAll = function () {
        return this.authHttp.get('/api/notification/getAll')
            .map(this.handelResponse)
            .catch(this.handelError);
    };
    NoticeService.prototype.sendMessage = function (notification) {
        return this.authHttp.post('/api/notification/send', notification)
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
exports.NoticeService = NoticeService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLDZCQUF5QixjQUFjLENBQUMsQ0FBQTtBQUd4QztJQUVDLHVCQUNTLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDeEIsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFDTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUM7YUFDcEQsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQzthQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksWUFBMEI7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFlBQVksQ0FBQzthQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsZ0NBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQzthQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsWUFBMEI7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxFQUFFLFlBQVksQ0FBQzthQUN6RSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsR0FBYTtRQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUEsbUNBQVcsR0FBWCxVQUFZLEdBQVE7UUFDakIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUE1Q0w7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQThDYixvQkFBQztBQUFELENBN0NBLEFBNkNDLElBQUE7QUE3Q1kscUJBQWEsZ0JBNkN6QixDQUFBIiwiZmlsZSI6InNoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3R5cGVzL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpY2VTZXJ2aWNlIHtcblx0XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgYXV0aEh0dHA6IEF1dGhIdHRwXG5cdCkge31cblxuXHRnZXRUaHJlZSgpOiBPYnNlcnZhYmxlPEFycmF5PE5vdGlmaWNhdGlvbj4+IHsgICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoJy9hcGkvbm90aWZpY2F0aW9uL2dldFRocmVlTmV3JylcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGdldEFsbCgpOiBPYnNlcnZhYmxlPEFycmF5PE5vdGlmaWNhdGlvbj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KCcvYXBpL25vdGlmaWNhdGlvbi9nZXRBbGwnKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgc2VuZE1lc3NhZ2Uobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAucG9zdCgnL2FwaS9ub3RpZmljYXRpb24vc2VuZCcsIG5vdGlmaWNhdGlvbilcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIC8vR2V0IHVucmVhZCBjb3VudFxuICAgIGdldENvdW50KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldCgnL2FwaS9ub3RpZmljYXRpb24vZ2V0Q291bnRzJylcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGNvbmZpcm1JbnZpdGF0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAucG9zdCgnL2FwaS9ub3RpZmljYXRpb24vY29uZmlybUludml0YXRpb24nLCBub3RpZmljYXRpb24pXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBoYW5kZWxSZXNwb25zZShyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpIHx8IHt9O1xuICAgIH1cbiAgICBcbiAgICAgaGFuZGVsRXJyb3IoZXJyOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
