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
    function DashboardComponent(authService, router, socket, noticeService) {
        this.authService = authService;
        this.router = router;
        this.socket = socket;
        this.noticeService = noticeService;
        this.profileToggled = false;
        this.inboxToggled = false;
        this.notifications = [];
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
        this.authService.logOut();
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
        var _this = this;
        var self = this;
        this.noticeService.getThree()
            .subscribe(function (notices) {
            console.log('notifications', notices);
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
        console.log('dashboard init');
        this.getCurrentUser();
        // this.socket.syncById('user', this.currentUser._id, (user) => {
        //     console.log(`Trigger ${this.currentUser._id}'s socket.`);
        //     console.log('user from socket: ', user);
        //     // trigger authService again
        //     this.requestUserDataFromDataBase(this.currentUser._id)
        // })
        // console.log(this.authService.isLoggedIn);
        this.getNotification();
        // this.getNotificationCount()
        // this.socket.syncById('notification', this.currentUser._id, (notice) => {
        //     this.getNotification()
        //     this.getNotificationCount()
        // })
        // this.socket.syncById('service', this.currentUser._id, (service) => {
        //     console.log(`Trigger ${this.currentUser._id}'s socket.`);
        //     // trigger authService again
        //     this.requestUserDataFromDataBase(this.currentUser._id)
        // })
        //         this.socket.syncById('user', this.currentUser._id, (user) => {
        //             console.log(`Trigger ${this.currentUser._id}'s socket.`);
        //             console.log('user from socket: ', user);
        //             // trigger authService again
        //             this.requestUserDataFromDataBase(this.currentUser._id)
        //         })
        //         this.getNotification()
        //         this.getNotificationCount()
        //         this.socket.syncById('notification', this.currentUser._id, (notice) => {
        //             this.getNotification()
        //             this.getNotificationCount()
        //         })
        //         this.socket.syncById('service', this.currentUser._id, (service) => {
        //             console.log(`Trigger ${this.currentUser._id}'s socket.`)
        //             // trigger authService again
        //             this.requestUserDataFromDataBase(this.currentUser._id)
        //         })
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.socket.unsyncById('notification', this.currentUser._id);
        this.socket.unsyncById('user', this.currentUser._id);
        this.socket.unsyncById('service', this.currentUser._id);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'yeah-dashboard',
            templateUrl: 'dashboard.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [socket_service_1.SocketService, notification_service_1.NoticeService],
            styleUrls: ['dashboard.style.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, socket_service_1.SocketService, notification_service_1.NoticeService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQscUNBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFjbEU7SUFVSSw0QkFDVyxXQUF3QixFQUN2QixNQUFjLEVBQ2QsTUFBcUIsRUFDckIsYUFBNEI7UUFIN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFYeEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFHOUIsa0JBQWEsR0FBd0IsRUFBRSxDQUFDO1FBVWpDLFlBQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDaEMsQ0FBQTtJQWZHLENBQUM7SUFpQkwsMkNBQWMsR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSw4REFBOEQ7UUFDOUQs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QUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSxvQ0FBYSxDQUFDO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7OzBCQUFBO0lBb0tGLHlCQUFDO0FBQUQsQ0FsS0EsQUFrS0MsSUFBQTtBQWxLWSwwQkFBa0IscUJBa0s5QixDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNvY2tldFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvc29ja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3NoYXJlZC90eXBlcy91c2VyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC90eXBlcy9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UsIFNpbXBsZU5vdGlmaWNhdGlvbnNNb2R1bGUgfSBmcm9tICdub3RpZmljYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3llYWgtZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtTb2NrZXRTZXJ2aWNlLCBOb3RpY2VTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnZGFzaGJvYXJkLnN0eWxlLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIC8vIHNlcnZlIGZvciB0aGUgdHdvIGRyb3Bkb3duIGxpc3QgaW4gdG9wLXJpZ2h0IG9mIHRoZSBuYXZiYXJcbiAgICBjdXJyZW50VXNlcjogVXNlcjtcbiAgICBwcm9maWxlVG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGluYm94VG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGN1cnJlbnRTZXNzaW9uOiBzdHJpbmc7XG4gICAgY3VycmVudFVzZXJSb2xlOiBzdHJpbmc7XG4gICAgbm90aWZpY2F0aW9uczogQXJyYXk8Tm90aWZpY2F0aW9uPiA9IFtdO1xuICAgIG5vdGljZUNvdW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzb2NrZXQ6IFNvY2tldFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbm90aWNlU2VydmljZTogTm90aWNlU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBwdWJsaWMgb3B0aW9ucyA9IHtcbiAgICAgICAgdGltZU91dDogNTAwMCxcbiAgICAgICAgbGFzdE9uQm90dG9tOiB0cnVlLFxuICAgICAgICBjbGlja1RvQ2xvc2U6IHRydWUsXG4gICAgICAgIG1heExlbmd0aDogMCxcbiAgICAgICAgbWF4U3RhY2s6IDcsXG4gICAgICAgIHNob3dQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBwcmV2ZW50RHVwbGljYXRlczogZmFsc2UsXG4gICAgICAgIHByZXZlbnRMYXN0RHVwbGljYXRlczogXCJ2aXNpYmxlXCIsXG4gICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgIGFuaW1hdGU6IFwic2NhbGVcIixcbiAgICAgICAgcG9zaXRpb246IFtcInJpZ2h0XCIsIFwiYm90dG9tXCJdXG4gICAgfVxuXG4gICAgY2hlY2tNZW51U3R5bGUoaXRlbTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNlc3Npb24gPSBpdGVtO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLy8gdGhlIHNlcnZpY2Ugd2lsbCBkZWxldGUgdXNlciBkYXRhIGFuZCB0b2tlbiBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgLy8gYW5kIGJyaW5nIHVzZXIgb3V0IG9mIHRoZSBkYXNoYm9hcmRcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dPdXQoKVxuICAgIH1cblxuICAgIHJlcXVlc3RVc2VyRGF0YUZyb21EYXRhQmFzZSh1c2VySWQpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcih1c2VySWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclJvbGUgPSB1c2VyLnJvbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRVc2VyKCkge1xuXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJSb2xlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpLnJvbGU7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm90aWNlU2VydmljZS5nZXRUaHJlZSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbm90aWNlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGlmaWNhdGlvbnMnLCBub3RpY2VzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IG5vdGljZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXROb3RpZmljYXRpb25Db3VudCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vdGljZVNlcnZpY2UuZ2V0Q291bnQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGNvdW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4oY291bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWNlQ291bnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWNlQ291bnQgPSBjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja05vdGljYXRpb25zKG5vdGljZTogTm90aWZpY2F0aW9uLCBjYjogYW55KSB7XG4gICAgICAgIGxldCBleGlzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZWFjaE5vdGljZU5vdykge1xuICAgICAgICAgICAgaWYgKG5vdGljZS5faWQgPT09IGVhY2hOb3RpY2VOb3cuX2lkKSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNiKGV4aXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYihleGlzdCk7XG4gICAgfVxuXG4gICAgZ29Ub01lc3NhZ2VQYWdlKCkge1xuICAgICAgICB0aGlzLmluYm94VG9nZ2xlZCA9ICF0aGlzLmluYm94VG9nZ2xlZDtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQvbWVzc2FnZXMnXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXNoYm9hcmQgaW5pdCcpXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKVxuICAgICAgICAvLyB0aGlzLnNvY2tldC5zeW5jQnlJZCgndXNlcicsIHRoaXMuY3VycmVudFVzZXIuX2lkLCAodXNlcikgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYFRyaWdnZXIgJHt0aGlzLmN1cnJlbnRVc2VyLl9pZH0ncyBzb2NrZXQuYCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygndXNlciBmcm9tIHNvY2tldDogJywgdXNlcik7XG4gICAgICAgIC8vICAgICAvLyB0cmlnZ2VyIGF1dGhTZXJ2aWNlIGFnYWluXG4gICAgICAgIC8vICAgICB0aGlzLnJlcXVlc3RVc2VyRGF0YUZyb21EYXRhQmFzZSh0aGlzLmN1cnJlbnRVc2VyLl9pZClcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKTtcblxuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbigpXG4gICAgICAgIC8vIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuXG5cbiAgICAgICAgLy8gdGhpcy5zb2NrZXQuc3luY0J5SWQoJ25vdGlmaWNhdGlvbicsIHRoaXMuY3VycmVudFVzZXIuX2lkLCAobm90aWNlKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbigpXG4gICAgICAgIC8vICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyB0aGlzLnNvY2tldC5zeW5jQnlJZCgnc2VydmljZScsIHRoaXMuY3VycmVudFVzZXIuX2lkLCAoc2VydmljZSkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYFRyaWdnZXIgJHt0aGlzLmN1cnJlbnRVc2VyLl9pZH0ncyBzb2NrZXQuYCk7XG4gICAgICAgIC8vICAgICAvLyB0cmlnZ2VyIGF1dGhTZXJ2aWNlIGFnYWluXG4gICAgICAgIC8vICAgICB0aGlzLnJlcXVlc3RVc2VyRGF0YUZyb21EYXRhQmFzZSh0aGlzLmN1cnJlbnRVc2VyLl9pZClcbiAgICAgICAgLy8gfSlcblxuLy8gICAgICAgICB0aGlzLnNvY2tldC5zeW5jQnlJZCgndXNlcicsIHRoaXMuY3VycmVudFVzZXIuX2lkLCAodXNlcikgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYFRyaWdnZXIgJHt0aGlzLmN1cnJlbnRVc2VyLl9pZH0ncyBzb2NrZXQuYCk7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciBmcm9tIHNvY2tldDogJywgdXNlcik7XG4vLyAgICAgICAgICAgICAvLyB0cmlnZ2VyIGF1dGhTZXJ2aWNlIGFnYWluXG4vLyAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVc2VyRGF0YUZyb21EYXRhQmFzZSh0aGlzLmN1cnJlbnRVc2VyLl9pZClcbi8vICAgICAgICAgfSlcblxuLy8gICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbigpXG4vLyAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuXG4vLyAgICAgICAgIHRoaXMuc29ja2V0LnN5bmNCeUlkKCdub3RpZmljYXRpb24nLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKG5vdGljZSkgPT4ge1xuLy8gICAgICAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb24oKVxuLy8gICAgICAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25Db3VudCgpXG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgICAgdGhpcy5zb2NrZXQuc3luY0J5SWQoJ3NlcnZpY2UnLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKHNlcnZpY2UpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUcmlnZ2VyICR7dGhpcy5jdXJyZW50VXNlci5faWR9J3Mgc29ja2V0LmApXG4vLyAgICAgICAgICAgICAvLyB0cmlnZ2VyIGF1dGhTZXJ2aWNlIGFnYWluXG4vLyAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVc2VyRGF0YUZyb21EYXRhQmFzZSh0aGlzLmN1cnJlbnRVc2VyLl9pZClcbi8vICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIHRoaXMuc29ja2V0LnVuc3luY0J5SWQoJ3VzZXInLCB0aGlzLmN1cnJlbnRVc2VyLl9pZClcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnc2VydmljZScsIHRoaXMuY3VycmVudFVzZXIuX2lkKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
