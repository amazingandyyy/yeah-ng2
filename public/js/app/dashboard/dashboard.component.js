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
var router_1 = require('@angular/router');
var auth_service_1 = require('../shared/services/auth.service');
var notification_service_1 = require('../shared/services/notification.service');
var socket_service_1 = require('../shared/services/socket.service');
var DashboardComponent = (function () {
    function DashboardComponent(authService, router, socket, 
        // private notificationService: NotificationsService,
        noticeService) {
        this.authService = authService;
        this.router = router;
        this.socket = socket;
        this.noticeService = noticeService;
        this.profileToggled = false;
        this.inboxToggled = false;
        this.options = {
            timeOut: 5000,
            lastOnBottom: true,
            clickToClose: true,
            maxLength: 0,
            maxStack: 7,
            showProgressBar: true,
            pauseOnHover: true,
            preventDuplicates: false,
            preventLastDuplicates: "visible",
            rtl: false,
            animate: "scale",
            position: ["right", "bottom"]
        };
    }
    DashboardComponent.prototype.checkMenuStyle = function (item) {
        this.currentSession = item;
    };
    DashboardComponent.prototype.logout = function () {
        // the service will delete user data and token in localStorage
        // and bring user out of the dashboard
        this.authService.logUserOut();
    };
    DashboardComponent.prototype.getUser = function () {
        var _this = this;
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(function (user) {
            _this.currentUserRole = user.role;
            _this.currentUser = user;
            console.log("dashboard " + user.role + ": ", user);
        }, function (error) {
            _this.authService.logUserOut();
            console.log(error);
        });
    };
    DashboardComponent.prototype.getNotification = function () {
        var _this = this;
        var self = this;
        this.noticeService.getThree()
            .subscribe(function (notices) {
            _this.notifications = notices;
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.getNotificationCount = function () {
        var self = this;
        this.noticeService.getCount()
            .subscribe(function (count) {
            if (isNaN(count)) {
                self.noticeCount = null;
            }
            else {
                self.noticeCount = count;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.respondToInvitation = function (notice, response) {
        var _this = this;
        if (response) {
            notice.response = true;
        }
        else {
            notice.response = false;
        }
        this.noticeService.confirmInvitation(notice)
            .subscribe(function (notice) {
            //
            console.log('confirmed');
            _this.getNotificationCount();
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.checkNotications = function (notice, cb) {
        var exist = false;
        this.notifications.forEach(function (eachNoticeNow) {
            if (notice._id === eachNoticeNow._id) {
                exist = true;
                cb(exist);
                return;
            }
        });
        cb(exist);
    };
    DashboardComponent.prototype.goToMessagePage = function () {
        this.inboxToggled = !this.inboxToggled;
        this.router.navigate(['dashboard/messages']);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getUser();
        var self = this;
        this.getNotification();
        this.getNotificationCount();
        self.socket.syncById('notification', self.currentUser._id, function (notice) {
            _this.getNotification();
            _this.getNotificationCount();
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.socket.unsyncById('notification', this.currentUser._id);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'yeah-dashboard',
            templateUrl: 'dashboard.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [auth_service_1.AuthService, socket_service_1.SocketService, notification_service_1.NoticeService],
            styleUrls: ['dashboard.style.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, socket_service_1.SocketService, notification_service_1.NoticeService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQscUNBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFlbEU7SUFVSSw0QkFDWSxXQUF3QixFQUN4QixNQUFjLEVBQ2QsTUFBcUI7UUFDN0IscURBQXFEO1FBQzdDLGFBQTRCO1FBSjVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBRXJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWnhDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBY3ZCLFlBQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDaEMsQ0FBQTtJQWZDLENBQUM7SUFpQkgsMkNBQWMsR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSw4REFBOEQ7UUFDOUQsc0NBQXNDO1FBQ3RDLElB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Q0FBQztZQUMvQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDhCQUFhLEVBQUUsb0NBQWEsQ0FBQztZQUN0RCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNyQyxDQUFDOzswQkFBQTtJQXlJRix5QkFBQztBQUFELENBdklBLEFBdUlDLElBQUE7QUF2SVksMEJBQWtCLHFCQXVJOUIsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWNlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvdXNlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLCBTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlIH0gZnJvbSAnbm90aWZpY2F0aW9ucyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3llYWgtZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgU29ja2V0U2VydmljZSwgTm90aWNlU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJ2Rhc2hib2FyZC5zdHlsZS5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuICAgIC8vIHNlcnZlIGZvciB0aGUgdHdvIGRyb3Bkb3duIGxpc3QgaW4gdG9wLXJpZ2h0IG9mIHRoZSBuYXZiYXJcbiAgICBjdXJyZW50VXNlcjogVXNlcjtcbiAgICBwcm9maWxlVG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGluYm94VG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGN1cnJlbnRTZXNzaW9uOiBzdHJpbmc7XG4gICAgY3VycmVudFVzZXJSb2xlOiBzdHJpbmc7XG4gICAgbm90aWZpY2F0aW9uczogQXJyYXk8Tm90aWZpY2F0aW9uPjtcbiAgICBub3RpY2VDb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHNvY2tldDogU29ja2V0U2VydmljZSxcbiAgICAgICAgLy8gcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBub3RpY2VTZXJ2aWNlOiBOb3RpY2VTZXJ2aWNlXG4gICAgKXt9XG5cbiAgICBwdWJsaWMgb3B0aW9ucyA9IHtcbiAgICAgICAgdGltZU91dDogNTAwMCxcbiAgICAgICAgbGFzdE9uQm90dG9tOiB0cnVlLFxuICAgICAgICBjbGlja1RvQ2xvc2U6IHRydWUsXG4gICAgICAgIG1heExlbmd0aDogMCxcbiAgICAgICAgbWF4U3RhY2s6IDcsXG4gICAgICAgIHNob3dQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBwcmV2ZW50RHVwbGljYXRlczogZmFsc2UsXG4gICAgICAgIHByZXZlbnRMYXN0RHVwbGljYXRlczogXCJ2aXNpYmxlXCIsXG4gICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgIGFuaW1hdGU6IFwic2NhbGVcIixcbiAgICAgICAgcG9zaXRpb246IFtcInJpZ2h0XCIsIFwiYm90dG9tXCJdXG4gICAgfVxuXG4gICAgY2hlY2tNZW51U3R5bGUoaXRlbTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNlc3Npb24gPSBpdGVtO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLy8gdGhlIHNlcnZpY2Ugd2lsbCBkZWxldGUgdXNlciBkYXRhIGFuZCB0b2tlbiBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgLy8gYW5kIGJyaW5nIHVzZXIgb3V0IG9mIHRoZSBkYXNoYm9hcmRcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KClcbiAgICB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKS5faWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclJvbGUgPSB1c2VyLnJvbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGFzaGJvYXJkICR7dXNlci5yb2xlfTogYCwgdXNlcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXROb3RpZmljYXRpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmdldFRocmVlKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBub3RpY2VzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBub3RpY2VzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uQ291bnQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmdldENvdW50KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaXNOYU4oY291bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWNlQ291bnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWNlQ291bnQgPSBjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNwb25kVG9JbnZpdGF0aW9uKG5vdGljZTogTm90aWZpY2F0aW9uLCByZXNwb25zZTogYm9vbGVhbikge1xuICAgICAgICBpZihyZXNwb25zZSkge1xuICAgICAgICAgICAgbm90aWNlLnJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vdGljZS5yZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90aWNlU2VydmljZS5jb25maXJtSW52aXRhdGlvbihub3RpY2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbm90aWNlID0+IHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25maXJtZWQnKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tOb3RpY2F0aW9ucyhub3RpY2U6IE5vdGlmaWNhdGlvbiwgY2I6IGFueSkge1xuICAgICAgICBsZXQgZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLmZvckVhY2goZnVuY3Rpb24oZWFjaE5vdGljZU5vdykge1xuICAgICAgICAgICAgaWYobm90aWNlLl9pZCA9PT0gZWFjaE5vdGljZU5vdy5faWQpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2IoZXhpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNiKGV4aXN0KTtcbiAgICB9XG5cbiAgICBnb1RvTWVzc2FnZVBhZ2UoKSB7XG4gICAgICAgIHRoaXMuaW5ib3hUb2dnbGVkID0gIXRoaXMuaW5ib3hUb2dnbGVkO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZC9tZXNzYWdlcyddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICAgICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb24oKVxuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcbiAgICAgICAgc2VsZi5zb2NrZXQuc3luY0J5SWQoJ25vdGlmaWNhdGlvbicsIHNlbGYuY3VycmVudFVzZXIuX2lkLCAobm90aWNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbigpXG4gICAgICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
