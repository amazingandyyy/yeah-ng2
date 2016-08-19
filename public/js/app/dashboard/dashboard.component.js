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
// import { NotificationsService, SimpleNotificationsComponent } from 'notifications';
var DashboardComponent = (function () {
    function DashboardComponent(authService, router, socket, noticeService) {
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
    DashboardComponent.prototype.getNotification = function (cb) {
        var _this = this;
        var self = this;
        this.noticeService.getThree()
            .subscribe(function (notices) {
            _this.notifications = notices;
            cb();
        }, function (error) {
            console.log(error);
            cb();
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
    DashboardComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getUser();
        var self = this;
        this.getNotification(function () {
            //Listen to updates after loading the first three notifications
            self.socket.syncById('notification', self.currentUser._id, function (notice) {
                self.checkNotications(notice, function (exist) {
                    //If notification already exist only update read count
                    if (exist) {
                        if (notice.read) {
                            self.noticeCount--;
                        }
                        return;
                    }
                    else {
                        // self.notificationService.success(notice.title, notice.description, {id: 123});
                        self.notifications.unshift(notice);
                        //Only display three messages
                        if (self.notifications.length > 3) {
                            self.notifications.pop();
                        }
                        if (!notice.read) {
                            self.noticeCount++;
                        }
                    }
                });
            });
        });
        this.getNotificationCount();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQscUNBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFHbEUsc0ZBQXNGO0FBWXRGO0lBVUksNEJBQ1ksV0FBd0IsRUFDeEIsTUFBYyxFQUNkLE1BQXFCLEVBQ3JCLGFBQTRCO1FBSDVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWHhDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBZXZCLFlBQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDaEMsQ0FBQTtJQWZDLENBQUM7SUFpQkgsMkNBQWMsR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSw4REFBOEQ7UUFDOUQsc0NBQXNDO1FBQ3RDLElB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Q0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFFaEMsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBL0pMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBYSxFQUFFLG9DQUFhLENBQUM7WUFDdEQsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDckMsQ0FBQzs7MEJBQUE7SUF5SkYseUJBQUM7QUFBRCxDQXZKQSxBQXVKQyxJQUFBO0FBdkpZLDBCQUFrQixxQkF1SjlCLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGljZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzL3VzZXInO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzL25vdGlmaWNhdGlvbic7XG4vLyBpbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSwgU2ltcGxlTm90aWZpY2F0aW9uc0NvbXBvbmVudCB9IGZyb20gJ25vdGlmaWNhdGlvbnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd5ZWFoLWRhc2hib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFNvY2tldFNlcnZpY2UsIE5vdGljZVNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogWydkYXNoYm9hcmQuc3R5bGUuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgICAvLyBzZXJ2ZSBmb3IgdGhlIHR3byBkcm9wZG93biBsaXN0IGluIHRvcC1yaWdodCBvZiB0aGUgbmF2YmFyXG4gICAgY3VycmVudFVzZXI6IFVzZXI7XG4gICAgcHJvZmlsZVRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbmJveFRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjdXJyZW50U2Vzc2lvbjogc3RyaW5nO1xuICAgIGN1cnJlbnRVc2VyUm9sZTogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvbnM6IEFycmF5PE5vdGlmaWNhdGlvbj47XG4gICAgbm90aWNlQ291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzb2NrZXQ6IFNvY2tldFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbm90aWNlU2VydmljZTogTm90aWNlU2VydmljZSxcbiAgICAgICAgLy8gcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZVxuXG4gICAgKXt9XG5cbiAgICBwdWJsaWMgb3B0aW9ucyA9IHtcbiAgICAgICAgdGltZU91dDogNTAwMCxcbiAgICAgICAgbGFzdE9uQm90dG9tOiB0cnVlLFxuICAgICAgICBjbGlja1RvQ2xvc2U6IHRydWUsXG4gICAgICAgIG1heExlbmd0aDogMCxcbiAgICAgICAgbWF4U3RhY2s6IDcsXG4gICAgICAgIHNob3dQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBwcmV2ZW50RHVwbGljYXRlczogZmFsc2UsXG4gICAgICAgIHByZXZlbnRMYXN0RHVwbGljYXRlczogXCJ2aXNpYmxlXCIsXG4gICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgIGFuaW1hdGU6IFwic2NhbGVcIixcbiAgICAgICAgcG9zaXRpb246IFtcInJpZ2h0XCIsIFwiYm90dG9tXCJdXG4gICAgfVxuXG4gICAgY2hlY2tNZW51U3R5bGUoaXRlbTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNlc3Npb24gPSBpdGVtO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLy8gdGhlIHNlcnZpY2Ugd2lsbCBkZWxldGUgdXNlciBkYXRhIGFuZCB0b2tlbiBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgLy8gYW5kIGJyaW5nIHVzZXIgb3V0IG9mIHRoZSBkYXNoYm9hcmRcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KClcbiAgICB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKS5faWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclJvbGUgPSB1c2VyLnJvbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5vdGlmaWNhdGlvbihjYikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm90aWNlU2VydmljZS5nZXRUaHJlZSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbm90aWNlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zID0gbm90aWNlcztcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXROb3RpZmljYXRpb25Db3VudCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vdGljZVNlcnZpY2UuZ2V0Q291bnQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGNvdW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZihpc05hTihjb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpY2VDb3VudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpY2VDb3VudCA9IGNvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3BvbmRUb0ludml0YXRpb24obm90aWNlOiBOb3RpZmljYXRpb24sIHJlc3BvbnNlOiBib29sZWFuKSB7XG4gICAgICAgIGlmKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBub3RpY2UucmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm90aWNlLnJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmNvbmZpcm1JbnZpdGF0aW9uKG5vdGljZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBub3RpY2UgPT4ge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmZpcm1lZCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja05vdGljYXRpb25zKG5vdGljZTogTm90aWZpY2F0aW9uLCBjYjogYW55KSB7XG4gICAgICAgIGxldCBleGlzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihlYWNoTm90aWNlTm93KSB7XG4gICAgICAgICAgICBpZihub3RpY2UuX2lkID09PSBlYWNoTm90aWNlTm93Ll9pZCkge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYihleGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2IoZXhpc3QpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpO1xuICAgICAgICB0aGlzLmdldFVzZXIoKTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vTGlzdGVuIHRvIHVwZGF0ZXMgYWZ0ZXIgbG9hZGluZyB0aGUgZmlyc3QgdGhyZWUgbm90aWZpY2F0aW9uc1xuICAgICAgICAgICAgc2VsZi5zb2NrZXQuc3luY0J5SWQoJ25vdGlmaWNhdGlvbicsIHNlbGYuY3VycmVudFVzZXIuX2lkLCBmdW5jdGlvbihub3RpY2UpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNoZWNrTm90aWNhdGlvbnMobm90aWNlLCBmdW5jdGlvbihleGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAvL0lmIG5vdGlmaWNhdGlvbiBhbHJlYWR5IGV4aXN0IG9ubHkgdXBkYXRlIHJlYWQgY291bnRcbiAgICAgICAgICAgICAgICAgICAgaWYoZXhpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5vdGljZS5yZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpY2VDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5ub3RpZmljYXRpb25TZXJ2aWNlLnN1Y2Nlc3Mobm90aWNlLnRpdGxlLCBub3RpY2UuZGVzY3JpcHRpb24sIHtpZDogMTIzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmaWNhdGlvbnMudW5zaGlmdChub3RpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9Pbmx5IGRpc3BsYXkgdGhyZWUgbWVzc2FnZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubm90aWZpY2F0aW9ucy5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZmljYXRpb25zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIW5vdGljZS5yZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpY2VDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTsgICBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc29ja2V0LnVuc3luY0J5SWQoJ25vdGlmaWNhdGlvbicsIHRoaXMuY3VycmVudFVzZXIuX2lkKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
