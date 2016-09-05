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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQscUNBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFjbEU7SUFVSSw0QkFDVyxXQUF3QixFQUN2QixNQUFjLEVBQ2QsTUFBcUIsRUFDckIsYUFBNEI7UUFIN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFYeEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFHOUIsa0JBQWEsR0FBd0IsRUFBRSxDQUFDO1FBVWpDLFlBQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDaEMsQ0FBQTtJQWZHLENBQUM7SUFpQkwsMkNBQWMsR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSw4REFBOEQ7UUFDOUQs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dCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWNlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvdXNlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLCBTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlIH0gZnJvbSAnbm90aWZpY2F0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd5ZWFoLWRhc2hib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbU29ja2V0U2VydmljZSwgTm90aWNlU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJ2Rhc2hib2FyZC5zdHlsZS5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICAvLyBzZXJ2ZSBmb3IgdGhlIHR3byBkcm9wZG93biBsaXN0IGluIHRvcC1yaWdodCBvZiB0aGUgbmF2YmFyXG4gICAgY3VycmVudFVzZXI6IFVzZXI7XG4gICAgcHJvZmlsZVRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbmJveFRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjdXJyZW50U2Vzc2lvbjogc3RyaW5nO1xuICAgIGN1cnJlbnRVc2VyUm9sZTogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvbnM6IEFycmF5PE5vdGlmaWNhdGlvbj4gPSBbXTtcbiAgICBub3RpY2VDb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgc29ja2V0OiBTb2NrZXRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5vdGljZVNlcnZpY2U6IE5vdGljZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgcHVibGljIG9wdGlvbnMgPSB7XG4gICAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICAgIGxhc3RPbkJvdHRvbTogdHJ1ZSxcbiAgICAgICAgY2xpY2tUb0Nsb3NlOiB0cnVlLFxuICAgICAgICBtYXhMZW5ndGg6IDAsXG4gICAgICAgIG1heFN0YWNrOiA3LFxuICAgICAgICBzaG93UHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgcHJldmVudER1cGxpY2F0ZXM6IGZhbHNlLFxuICAgICAgICBwcmV2ZW50TGFzdER1cGxpY2F0ZXM6IFwidmlzaWJsZVwiLFxuICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICBhbmltYXRlOiBcInNjYWxlXCIsXG4gICAgICAgIHBvc2l0aW9uOiBbXCJyaWdodFwiLCBcImJvdHRvbVwiXVxuICAgIH1cblxuICAgIGNoZWNrTWVudVN0eWxlKGl0ZW06IHN0cmluZykge1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gaXRlbTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIC8vIHRoZSBzZXJ2aWNlIHdpbGwgZGVsZXRlIHVzZXIgZGF0YSBhbmQgdG9rZW4gaW4gbG9jYWxTdG9yYWdlXG4gICAgICAgIC8vIGFuZCBicmluZyB1c2VyIG91dCBvZiB0aGUgZGFzaGJvYXJkXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nT3V0KClcbiAgICB9XG5cbiAgICByZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodXNlcklkKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIodXNlcklkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJSb2xlID0gdXNlci5yb2xlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50X3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50VXNlcigpIHtcblxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyUm9sZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKS5yb2xlO1xuICAgIH1cblxuICAgIGdldE5vdGlmaWNhdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vdGljZVNlcnZpY2UuZ2V0VGhyZWUoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIG5vdGljZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3RpZmljYXRpb25zJywgbm90aWNlcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBub3RpY2VzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uQ291bnQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmdldENvdW50KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKGNvdW50KSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGljZUNvdW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGljZUNvdW50ID0gY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tOb3RpY2F0aW9ucyhub3RpY2U6IE5vdGlmaWNhdGlvbiwgY2I6IGFueSkge1xuICAgICAgICBsZXQgZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGVhY2hOb3RpY2VOb3cpIHtcbiAgICAgICAgICAgIGlmIChub3RpY2UuX2lkID09PSBlYWNoTm90aWNlTm93Ll9pZCkge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYihleGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2IoZXhpc3QpO1xuICAgIH1cblxuICAgIGdvVG9NZXNzYWdlUGFnZSgpIHtcbiAgICAgICAgdGhpcy5pbmJveFRvZ2dsZWQgPSAhdGhpcy5pbmJveFRvZ2dsZWQ7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkL21lc3NhZ2VzJ10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZGFzaGJvYXJkIGluaXQnKVxuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyKClcbjw8PDw8PDwgSEVBRFxuICAgICAgICAvLyB0aGlzLnNvY2tldC5zeW5jQnlJZCgndXNlcicsIHRoaXMuY3VycmVudFVzZXIuX2lkLCAodXNlcikgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYFRyaWdnZXIgJHt0aGlzLmN1cnJlbnRVc2VyLl9pZH0ncyBzb2NrZXQuYCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygndXNlciBmcm9tIHNvY2tldDogJywgdXNlcik7XG4gICAgICAgIC8vICAgICAvLyB0cmlnZ2VyIGF1dGhTZXJ2aWNlIGFnYWluXG4gICAgICAgIC8vICAgICB0aGlzLnJlcXVlc3RVc2VyRGF0YUZyb21EYXRhQmFzZSh0aGlzLmN1cnJlbnRVc2VyLl9pZClcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKTtcblxuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbigpXG4gICAgICAgIC8vIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuXG5cbiAgICAgICAgLy8gdGhpcy5zb2NrZXQuc3luY0J5SWQoJ25vdGlmaWNhdGlvbicsIHRoaXMuY3VycmVudFVzZXIuX2lkLCAobm90aWNlKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbigpXG4gICAgICAgIC8vICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyB0aGlzLnNvY2tldC5zeW5jQnlJZCgnc2VydmljZScsIHRoaXMuY3VycmVudFVzZXIuX2lkLCAoc2VydmljZSkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYFRyaWdnZXIgJHt0aGlzLmN1cnJlbnRVc2VyLl9pZH0ncyBzb2NrZXQuYCk7XG4gICAgICAgIC8vICAgICAvLyB0cmlnZ2VyIGF1dGhTZXJ2aWNlIGFnYWluXG4gICAgICAgIC8vICAgICB0aGlzLnJlcXVlc3RVc2VyRGF0YUZyb21EYXRhQmFzZSh0aGlzLmN1cnJlbnRVc2VyLl9pZClcbiAgICAgICAgLy8gfSlcbj09PT09PT1cbiAgICAgICAgdGhpcy5zb2NrZXQuc3luY0J5SWQoJ3VzZXInLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUcmlnZ2VyICR7dGhpcy5jdXJyZW50VXNlci5faWR9J3Mgc29ja2V0LmApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgZnJvbSBzb2NrZXQ6ICcsIHVzZXIpO1xuICAgICAgICAgICAgLy8gdHJpZ2dlciBhdXRoU2VydmljZSBhZ2FpblxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb24oKVxuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcblxuICAgICAgICB0aGlzLnNvY2tldC5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQsIChub3RpY2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uKClcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc29ja2V0LnN5bmNCeUlkKCdzZXJ2aWNlJywgdGhpcy5jdXJyZW50VXNlci5faWQsIChzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVHJpZ2dlciAke3RoaXMuY3VycmVudFVzZXIuX2lkfSdzIHNvY2tldC5gKVxuICAgICAgICAgICAgLy8gdHJpZ2dlciBhdXRoU2VydmljZSBhZ2FpblxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIH0pXG4+Pj4+Pj4+IDVmNTY4NTYzNTg3OGQwN2VlMGFlM2Y0NTM3MzZlZmEyMzMyNDUzYjVcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIHRoaXMuc29ja2V0LnVuc3luY0J5SWQoJ3VzZXInLCB0aGlzLmN1cnJlbnRVc2VyLl9pZClcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnc2VydmljZScsIHRoaXMuY3VycmVudFVzZXIuX2lkKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
