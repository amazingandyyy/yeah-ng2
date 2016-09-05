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
        console.log('yooo');
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
        console.log('response');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLDZCQUF5QixjQUFjLENBQUMsQ0FBQTtBQUd4QztJQUVDLHVCQUNTLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDeEIsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFDTyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQzthQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDO2FBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxZQUEwQjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsWUFBWSxDQUFDO2FBQzVELEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELGtCQUFrQjtJQUNsQixnQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDO2FBQ2xELEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELHlDQUFpQixHQUFqQixVQUFrQixZQUEwQjtRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUNBQXFDLEVBQUUsWUFBWSxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxHQUFhO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVBLG1DQUFXLEdBQVgsVUFBWSxHQUFRO1FBQ2pCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBL0NMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUFpRGIsb0JBQUM7QUFBRCxDQWhEQSxBQWdEQyxJQUFBO0FBaERZLHFCQUFhLGdCQWdEekIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi90eXBlcy9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgQXV0aEh0dHAgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWNlU2VydmljZSB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGF1dGhIdHRwOiBBdXRoSHR0cFxuXHQpIHt9XG5cblx0Z2V0VGhyZWUoKTogT2JzZXJ2YWJsZTxBcnJheTxOb3RpZmljYXRpb24+PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd5b29vJyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoJy9hcGkvbm90aWZpY2F0aW9uL2dldFRocmVlTmV3JylcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGdldEFsbCgpOiBPYnNlcnZhYmxlPEFycmF5PE5vdGlmaWNhdGlvbj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KCcvYXBpL25vdGlmaWNhdGlvbi9nZXRBbGwnKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgc2VuZE1lc3NhZ2Uobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAucG9zdCgnL2FwaS9ub3RpZmljYXRpb24vc2VuZCcsIG5vdGlmaWNhdGlvbilcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIC8vR2V0IHVucmVhZCBjb3VudFxuICAgIGdldENvdW50KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldCgnL2FwaS9ub3RpZmljYXRpb24vZ2V0Q291bnRzJylcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGNvbmZpcm1JbnZpdGF0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAucG9zdCgnL2FwaS9ub3RpZmljYXRpb24vY29uZmlybUludml0YXRpb24nLCBub3RpZmljYXRpb24pXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBoYW5kZWxSZXNwb25zZShyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScpXG4gICAgICAgIHJldHVybiByZXMuanNvbigpIHx8IHt9O1xuICAgIH1cbiAgICBcbiAgICAgaGFuZGVsRXJyb3IoZXJyOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
