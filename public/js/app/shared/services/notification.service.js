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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLDZCQUF5QixjQUFjLENBQUMsQ0FBQTtBQUd4QztJQUVDLHVCQUNTLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDeEIsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFDTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUM7YUFDcEQsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLGdDQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7YUFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLFlBQTBCO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxZQUFZLENBQUM7YUFDekUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLEdBQWE7UUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVBLG1DQUFXLEdBQVgsVUFBWSxHQUFRO1FBQ2pCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBaENMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUFrQ2Isb0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLHFCQUFhLGdCQWlDekIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi90eXBlcy9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgQXV0aEh0dHAgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWNlU2VydmljZSB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGF1dGhIdHRwOiBBdXRoSHR0cFxuXHQpIHt9XG5cblx0Z2V0VGhyZWUoKTogT2JzZXJ2YWJsZTxBcnJheTxOb3RpZmljYXRpb24+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldCgnL2FwaS9ub3RpZmljYXRpb24vZ2V0VGhyZWVOZXcnKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgLy9HZXQgdW5yZWFkIGNvdW50XG4gICAgZ2V0Q291bnQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KCcvYXBpL25vdGlmaWNhdGlvbi9nZXRDb3VudHMnKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgY29uZmlybUludml0YXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiBPYnNlcnZhYmxlPE5vdGlmaWNhdGlvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5wb3N0KCcvYXBpL25vdGlmaWNhdGlvbi9jb25maXJtSW52aXRhdGlvbicsIG5vdGlmaWNhdGlvbilcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGhhbmRlbFJlc3BvbnNlKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkgfHwge307XG4gICAgfVxuICAgIFxuICAgICBoYW5kZWxFcnJvcihlcnI6IGFueSkge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
