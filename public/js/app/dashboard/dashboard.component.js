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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQscUNBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFlbEU7SUFVSSw0QkFDWSxXQUF3QixFQUN4QixNQUFjLEVBQ2QsTUFBcUI7UUFDN0IscURBQXFEO1FBQzdDLGFBQTRCO1FBSjVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBRXJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWnhDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBY3ZCLFlBQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDaEMsQ0FBQTtJQWZDLENBQUM7SUFpQkgsMkNBQWMsR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSw4REFBOEQ7UUFDOUQsc0NBQXNDO1FBQ3RDLElB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QUFFLENBQUMscUJBQXFCLENBQUM7U0FDckMsQ0FBQzs7MEJBQUE7SUF3SUYseUJBQUM7QUFBRCxDQXRJQSxBQXNJQyxJQUFBO0FBdElZLDBCQUFrQixxQkFzSTlCLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGljZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzL3VzZXInO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSwgU2ltcGxlTm90aWZpY2F0aW9uc01vZHVsZSB9IGZyb20gJ25vdGlmaWNhdGlvbnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd5ZWFoLWRhc2hib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFNvY2tldFNlcnZpY2UsIE5vdGljZVNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogWydkYXNoYm9hcmQuc3R5bGUuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgICAvLyBzZXJ2ZSBmb3IgdGhlIHR3byBkcm9wZG93biBsaXN0IGluIHRvcC1yaWdodCBvZiB0aGUgbmF2YmFyXG4gICAgY3VycmVudFVzZXI6IFVzZXI7XG4gICAgcHJvZmlsZVRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbmJveFRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjdXJyZW50U2Vzc2lvbjogc3RyaW5nO1xuICAgIGN1cnJlbnRVc2VyUm9sZTogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvbnM6IEFycmF5PE5vdGlmaWNhdGlvbj47XG4gICAgbm90aWNlQ291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzb2NrZXQ6IFNvY2tldFNlcnZpY2UsXG4gICAgICAgIC8vIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbm90aWNlU2VydmljZTogTm90aWNlU2VydmljZVxuICAgICl7fVxuXG4gICAgcHVibGljIG9wdGlvbnMgPSB7XG4gICAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICAgIGxhc3RPbkJvdHRvbTogdHJ1ZSxcbiAgICAgICAgY2xpY2tUb0Nsb3NlOiB0cnVlLFxuICAgICAgICBtYXhMZW5ndGg6IDAsXG4gICAgICAgIG1heFN0YWNrOiA3LFxuICAgICAgICBzaG93UHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgcHJldmVudER1cGxpY2F0ZXM6IGZhbHNlLFxuICAgICAgICBwcmV2ZW50TGFzdER1cGxpY2F0ZXM6IFwidmlzaWJsZVwiLFxuICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICBhbmltYXRlOiBcInNjYWxlXCIsXG4gICAgICAgIHBvc2l0aW9uOiBbXCJyaWdodFwiLCBcImJvdHRvbVwiXVxuICAgIH1cblxuICAgIGNoZWNrTWVudVN0eWxlKGl0ZW06IHN0cmluZykge1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gaXRlbTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIC8vIHRoZSBzZXJ2aWNlIHdpbGwgZGVsZXRlIHVzZXIgZGF0YSBhbmQgdG9rZW4gaW4gbG9jYWxTdG9yYWdlXG4gICAgICAgIC8vIGFuZCBicmluZyB1c2VyIG91dCBvZiB0aGUgZGFzaGJvYXJkXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpXG4gICAgfVxuXG4gICAgZ2V0VXNlcigpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSkuX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJSb2xlID0gdXNlci5yb2xlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXROb3RpZmljYXRpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmdldFRocmVlKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBub3RpY2VzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBub3RpY2VzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uQ291bnQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmdldENvdW50KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaXNOYU4oY291bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWNlQ291bnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWNlQ291bnQgPSBjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNwb25kVG9JbnZpdGF0aW9uKG5vdGljZTogTm90aWZpY2F0aW9uLCByZXNwb25zZTogYm9vbGVhbikge1xuICAgICAgICBpZihyZXNwb25zZSkge1xuICAgICAgICAgICAgbm90aWNlLnJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vdGljZS5yZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90aWNlU2VydmljZS5jb25maXJtSW52aXRhdGlvbihub3RpY2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbm90aWNlID0+IHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25maXJtZWQnKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tOb3RpY2F0aW9ucyhub3RpY2U6IE5vdGlmaWNhdGlvbiwgY2I6IGFueSkge1xuICAgICAgICBsZXQgZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLmZvckVhY2goZnVuY3Rpb24oZWFjaE5vdGljZU5vdykge1xuICAgICAgICAgICAgaWYobm90aWNlLl9pZCA9PT0gZWFjaE5vdGljZU5vdy5faWQpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2IoZXhpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNiKGV4aXN0KTtcbiAgICB9XG5cbiAgICBnb1RvTWVzc2FnZVBhZ2UoKSB7XG4gICAgICAgIHRoaXMuaW5ib3hUb2dnbGVkID0gIXRoaXMuaW5ib3hUb2dnbGVkO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZC9tZXNzYWdlcyddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICAgICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb24oKVxuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcbiAgICAgICAgc2VsZi5zb2NrZXQuc3luY0J5SWQoJ25vdGlmaWNhdGlvbicsIHNlbGYuY3VycmVudFVzZXIuX2lkLCAobm90aWNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbigpXG4gICAgICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
