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
    DashboardComponent.prototype.requestUserDataFromDataBase = function (userId) {
        var _this = this;
        this.authService.getCurrentUser(userId)
            .subscribe(function (user) {
            _this.currentUserRole = user.role;
            _this.currentUser = user;
            localStorage.setItem('current_user', JSON.stringify(user));
        }, function (error) {
            _this.authService.logUserOut();
            console.log(error);
        });
    };
    DashboardComponent.prototype.getCurrentUser = function () {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.currentUserRole = JSON.parse(localStorage.getItem('current_user')).role;
    };
    DashboardComponent.prototype.getNotification = function () {
        var self = this;
        // this.noticeService.getThree()
        //     .subscribe(
        //     notices => {
        //         this.notifications = notices;
        //     },
        //     error => {
        //         console.log(<any>error)
        //     });
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
        this.getCurrentUser();
        // this.socket.syncById('user', this.currentUser._id, (user) => {
        //     console.log(`Trigger ${this.currentUser._id}'s socket.`);
        //     console.log('user from socket: ', user);
        //     // trigger authService again
        //     this.requestUserDataFromDataBase(this.currentUser._id)
        // })
        this.getNotification();
        this.getNotificationCount();
        this.socket.syncById('notification', this.currentUser._id, function (notice) {
            _this.getNotification();
            _this.getNotificationCount();
        });
        this.socket.syncById('service', this.currentUser._id, function (service) {
            console.log("Trigger " + _this.currentUser._id + "'s socket.");
            // trigger authService again
            _this.requestUserDataFromDataBase(_this.currentUser._id);
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        // this.socket.unsyncById('notification', this.currentUser._id);
        this.socket.unsyncById('user', this.currentUser._id);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQscUNBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFjbEU7SUFVSSw0QkFDWSxXQUF3QixFQUN4QixNQUFjLEVBQ2QsTUFBcUI7UUFDN0IscURBQXFEO1FBQzdDLGFBQTRCO1FBSjVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBRXJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWnhDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBY3ZCLFlBQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDaEMsQ0FBQTtJQWZDLENBQUM7SUFpQkgsMkNBQWMsR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSw4REFBOEQ7UUFDOUQsc0NBQXNDO1FBQ3RDLElB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STlCLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGljZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzL3VzZXInO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSwgU2ltcGxlTm90aWZpY2F0aW9uc01vZHVsZSB9IGZyb20gJ25vdGlmaWNhdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBTb2NrZXRTZXJ2aWNlLCBOb3RpY2VTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnZGFzaGJvYXJkLnN0eWxlLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gICAgLy8gc2VydmUgZm9yIHRoZSB0d28gZHJvcGRvd24gbGlzdCBpbiB0b3AtcmlnaHQgb2YgdGhlIG5hdmJhclxuICAgIGN1cnJlbnRVc2VyOiB7fTtcbiAgICBwcm9maWxlVG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGluYm94VG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGN1cnJlbnRTZXNzaW9uOiBzdHJpbmc7XG4gICAgY3VycmVudFVzZXJSb2xlOiBzdHJpbmc7XG4gICAgbm90aWZpY2F0aW9uczogQXJyYXk8Tm90aWZpY2F0aW9uPjtcbiAgICBub3RpY2VDb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHNvY2tldDogU29ja2V0U2VydmljZSxcbiAgICAgICAgLy8gcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBub3RpY2VTZXJ2aWNlOiBOb3RpY2VTZXJ2aWNlXG4gICAgKXt9XG5cbiAgICBwdWJsaWMgb3B0aW9ucyA9IHtcbiAgICAgICAgdGltZU91dDogNTAwMCxcbiAgICAgICAgbGFzdE9uQm90dG9tOiB0cnVlLFxuICAgICAgICBjbGlja1RvQ2xvc2U6IHRydWUsXG4gICAgICAgIG1heExlbmd0aDogMCxcbiAgICAgICAgbWF4U3RhY2s6IDcsXG4gICAgICAgIHNob3dQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBwcmV2ZW50RHVwbGljYXRlczogZmFsc2UsXG4gICAgICAgIHByZXZlbnRMYXN0RHVwbGljYXRlczogXCJ2aXNpYmxlXCIsXG4gICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgIGFuaW1hdGU6IFwic2NhbGVcIixcbiAgICAgICAgcG9zaXRpb246IFtcInJpZ2h0XCIsIFwiYm90dG9tXCJdXG4gICAgfVxuXG4gICAgY2hlY2tNZW51U3R5bGUoaXRlbTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNlc3Npb24gPSBpdGVtO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLy8gdGhlIHNlcnZpY2Ugd2lsbCBkZWxldGUgdXNlciBkYXRhIGFuZCB0b2tlbiBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgLy8gYW5kIGJyaW5nIHVzZXIgb3V0IG9mIHRoZSBkYXNoYm9hcmRcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KClcbiAgICB9XG5cbiAgICByZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodXNlcklkKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIodXNlcklkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJSb2xlID0gdXNlci5yb2xlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50X3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50VXNlcigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlclJvbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSkucm9sZTtcbiAgICB9XG5cbiAgICBnZXROb3RpZmljYXRpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gdGhpcy5ub3RpY2VTZXJ2aWNlLmdldFRocmVlKClcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIC8vICAgICBub3RpY2VzID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBub3RpY2VzO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIGVycm9yID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAvLyAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uQ291bnQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmdldENvdW50KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaXNOYU4oY291bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWNlQ291bnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWNlQ291bnQgPSBjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja05vdGljYXRpb25zKG5vdGljZTogTm90aWZpY2F0aW9uLCBjYjogYW55KSB7XG4gICAgICAgIGxldCBleGlzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihlYWNoTm90aWNlTm93KSB7XG4gICAgICAgICAgICBpZihub3RpY2UuX2lkID09PSBlYWNoTm90aWNlTm93Ll9pZCkge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYihleGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2IoZXhpc3QpO1xuICAgIH1cblxuICAgIGdvVG9NZXNzYWdlUGFnZSgpIHtcbiAgICAgICAgdGhpcy5pbmJveFRvZ2dsZWQgPSAhdGhpcy5pbmJveFRvZ2dsZWQ7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkL21lc3NhZ2VzJ10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyKClcbiAgICAgICAgLy8gdGhpcy5zb2NrZXQuc3luY0J5SWQoJ3VzZXInLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKHVzZXIpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGBUcmlnZ2VyICR7dGhpcy5jdXJyZW50VXNlci5faWR9J3Mgc29ja2V0LmApO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3VzZXIgZnJvbSBzb2NrZXQ6ICcsIHVzZXIpO1xuICAgICAgICAvLyAgICAgLy8gdHJpZ2dlciBhdXRoU2VydmljZSBhZ2FpblxuICAgICAgICAvLyAgICAgdGhpcy5yZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb24oKVxuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcblxuICAgICAgICB0aGlzLnNvY2tldC5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQsIChub3RpY2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uKClcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc29ja2V0LnN5bmNCeUlkKCdzZXJ2aWNlJywgdGhpcy5jdXJyZW50VXNlci5faWQsIChzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVHJpZ2dlciAke3RoaXMuY3VycmVudFVzZXIuX2lkfSdzIHNvY2tldC5gKTtcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgYXV0aFNlcnZpY2UgYWdhaW5cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFVzZXJEYXRhRnJvbURhdGFCYXNlKHRoaXMuY3VycmVudFVzZXIuX2lkKVxuICAgICAgICB9KVxuPj4+Pj4+PiBmZjBlYjg2MjZlMmUyOTE2ZmJlN2JhNWJlNzA5ODVkN2JkMDU3OGQ4XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIHRoaXMuc29ja2V0LnVuc3luY0J5SWQoJ25vdGlmaWNhdGlvbicsIHRoaXMuY3VycmVudFVzZXIuX2lkKTtcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgndXNlcicsIHRoaXMuY3VycmVudFVzZXIuX2lkKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
