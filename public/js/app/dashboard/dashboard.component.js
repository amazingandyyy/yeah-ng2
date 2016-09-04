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
        var _this = this;
        var self = this;
        this.noticeService.getThree()
            .subscribe(function (notices) {
            console.log('getThree: ', notices);
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
        var _this = this;
        this.getCurrentUser();
        this.socket.syncById('user', this.currentUser._id, function (user) {
            console.log("Trigger " + _this.currentUser._id + "'s socket.");
            console.log('user from socket: ', user);
            // trigger authService again
            _this.requestUserDataFromDataBase(_this.currentUser._id);
        });
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
            providers: [auth_service_1.AuthService, socket_service_1.SocketService, notification_service_1.NoticeService],
            styleUrls: ['dashboard.style.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, socket_service_1.SocketService, notification_service_1.NoticeService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQscUNBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFjbEU7SUFVSSw0QkFDWSxXQUF3QixFQUN4QixNQUFjLEVBQ2QsTUFBcUI7UUFDN0IscURBQXFEO1FBQzdDLGFBQTRCO1FBSjVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBRXJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWnhDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBY3ZCLFlBQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDaEMsQ0FBQTtJQWZHLENBQUM7SUFpQkwsMkNBQWMsR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSw4REFBOEQ7UUFDOUQsc0NBQXNDO1FBQ3RDLElB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QyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFqSkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDhCQUFhLEVBQUUsb0NBQWEsQ0FBQztZQUN0RCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNyQyxDQUFDOzswQkFBQTtJQTJJRix5QkFBQztBQUFELENBeklBLEFBeUlDLElBQUE7QUF6SVksMEJBQWtCLHFCQXlJOUIsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWNlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvdXNlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLCBTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlIH0gZnJvbSAnbm90aWZpY2F0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd5ZWFoLWRhc2hib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFNvY2tldFNlcnZpY2UsIE5vdGljZVNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogWydkYXNoYm9hcmQuc3R5bGUuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgLy8gc2VydmUgZm9yIHRoZSB0d28gZHJvcGRvd24gbGlzdCBpbiB0b3AtcmlnaHQgb2YgdGhlIG5hdmJhclxuICAgIGN1cnJlbnRVc2VyOiBVc2VyO1xuICAgIHByb2ZpbGVUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW5ib3hUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY3VycmVudFNlc3Npb246IHN0cmluZztcbiAgICBjdXJyZW50VXNlclJvbGU6IHN0cmluZztcbiAgICBub3RpZmljYXRpb25zOiBBcnJheTxOb3RpZmljYXRpb24+O1xuICAgIG5vdGljZUNvdW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgc29ja2V0OiBTb2NrZXRTZXJ2aWNlLFxuICAgICAgICAvLyBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5vdGljZVNlcnZpY2U6IE5vdGljZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgcHVibGljIG9wdGlvbnMgPSB7XG4gICAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICAgIGxhc3RPbkJvdHRvbTogdHJ1ZSxcbiAgICAgICAgY2xpY2tUb0Nsb3NlOiB0cnVlLFxuICAgICAgICBtYXhMZW5ndGg6IDAsXG4gICAgICAgIG1heFN0YWNrOiA3LFxuICAgICAgICBzaG93UHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgcHJldmVudER1cGxpY2F0ZXM6IGZhbHNlLFxuICAgICAgICBwcmV2ZW50TGFzdER1cGxpY2F0ZXM6IFwidmlzaWJsZVwiLFxuICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICBhbmltYXRlOiBcInNjYWxlXCIsXG4gICAgICAgIHBvc2l0aW9uOiBbXCJyaWdodFwiLCBcImJvdHRvbVwiXVxuICAgIH1cblxuICAgIGNoZWNrTWVudVN0eWxlKGl0ZW06IHN0cmluZykge1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gaXRlbTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIC8vIHRoZSBzZXJ2aWNlIHdpbGwgZGVsZXRlIHVzZXIgZGF0YSBhbmQgdG9rZW4gaW4gbG9jYWxTdG9yYWdlXG4gICAgICAgIC8vIGFuZCBicmluZyB1c2VyIG91dCBvZiB0aGUgZGFzaGJvYXJkXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpXG4gICAgfVxuXG4gICAgcmVxdWVzdFVzZXJEYXRhRnJvbURhdGFCYXNlKHVzZXJJZCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKHVzZXJJZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyUm9sZSA9IHVzZXIucm9sZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudF91c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJSb2xlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpLnJvbGU7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm90aWNlU2VydmljZS5nZXRUaHJlZSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbm90aWNlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldFRocmVlOiAnLCBub3RpY2VzKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBub3RpY2VzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uQ291bnQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmdldENvdW50KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKGNvdW50KSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGljZUNvdW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGljZUNvdW50ID0gY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tOb3RpY2F0aW9ucyhub3RpY2U6IE5vdGlmaWNhdGlvbiwgY2I6IGFueSkge1xuICAgICAgICBsZXQgZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGVhY2hOb3RpY2VOb3cpIHtcbiAgICAgICAgICAgIGlmIChub3RpY2UuX2lkID09PSBlYWNoTm90aWNlTm93Ll9pZCkge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYihleGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2IoZXhpc3QpO1xuICAgIH1cblxuICAgIGdvVG9NZXNzYWdlUGFnZSgpIHtcbiAgICAgICAgdGhpcy5pbmJveFRvZ2dsZWQgPSAhdGhpcy5pbmJveFRvZ2dsZWQ7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkL21lc3NhZ2VzJ10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyKClcbiAgICAgICAgdGhpcy5zb2NrZXQuc3luY0J5SWQoJ3VzZXInLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUcmlnZ2VyICR7dGhpcy5jdXJyZW50VXNlci5faWR9J3Mgc29ja2V0LmApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgZnJvbSBzb2NrZXQ6ICcsIHVzZXIpO1xuICAgICAgICAgICAgLy8gdHJpZ2dlciBhdXRoU2VydmljZSBhZ2FpblxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb24oKVxuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcblxuICAgICAgICB0aGlzLnNvY2tldC5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQsIChub3RpY2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uKClcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc29ja2V0LnN5bmNCeUlkKCdzZXJ2aWNlJywgdGhpcy5jdXJyZW50VXNlci5faWQsIChzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVHJpZ2dlciAke3RoaXMuY3VycmVudFVzZXIuX2lkfSdzIHNvY2tldC5gKVxuICAgICAgICAgICAgLy8gdHJpZ2dlciBhdXRoU2VydmljZSBhZ2FpblxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc29ja2V0LnVuc3luY0J5SWQoJ25vdGlmaWNhdGlvbicsIHRoaXMuY3VycmVudFVzZXIuX2lkKVxuICAgICAgICB0aGlzLnNvY2tldC51bnN5bmNCeUlkKCd1c2VyJywgdGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIHRoaXMuc29ja2V0LnVuc3luY0J5SWQoJ3NlcnZpY2UnLCB0aGlzLmN1cnJlbnRVc2VyLl9pZClcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
