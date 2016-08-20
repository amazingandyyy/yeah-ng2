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
        // this.getNotification(function() {
        //     //Listen to updates after loading the first three notifications
        //     self.socket.syncById('notification', self.currentUser._id, (notice) => {
        //         self.getNotificationCount()
        //         self.checkNotications(notice, function(exist) {
        //             //If notification already exist only update read count
        //             if(exist) {
        //                 if(notice.read) {
        //                     self.noticeCount--;
        //                 }
        //                 return;
        //             } else {
        //                 // self.notificationService.success(notice.title, notice.description, {id: 123});
        //                 self.notifications.unshift(notice);
        //                 //Only display three messages
        //                 if(self.notifications.length > 3) {
        //                     self.notifications.pop();
        //                 }
        //                 if(!notice.read) {
        //                     self.noticeCount++;
        //                 }
        //             }
        //         });
        //     });   
        // });
        // this.getNotificationCount();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQscUNBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFlbEU7SUFVSSw0QkFDWSxXQUF3QixFQUN4QixNQUFjLEVBQ2QsTUFBcUI7UUFDN0IscURBQXFEO1FBQzdDLGFBQTRCO1FBSjVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBRXJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWnhDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBY3ZCLFlBQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDaEMsQ0FBQTtJQWZDLENBQUM7SUFpQkgsMkNBQWMsR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSw4REFBOEQ7UUFDOUQsc0NBQXNDO1FBQ3RDLElB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QUFNO1FBQ04sK0JBQStCO0lBQ25DLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQXhLTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1lBQy9CLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsOEJBQWEsRUFBRSxvQ0FBYSxDQUFDO1lBQ3RELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7OzBCQUFBO0lBa0tGLHlCQUFDO0FBQUQsQ0FoS0EsQUFnS0MsSUFBQTtBQWhLWSwwQkFBa0IscUJBZ0s5QixDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNvY2tldFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvc29ja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3NoYXJlZC90eXBlcy91c2VyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC90eXBlcy9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UsIFNpbXBsZU5vdGlmaWNhdGlvbnNNb2R1bGUgfSBmcm9tICdub3RpZmljYXRpb25zJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBTb2NrZXRTZXJ2aWNlLCBOb3RpY2VTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnZGFzaGJvYXJkLnN0eWxlLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gICAgLy8gc2VydmUgZm9yIHRoZSB0d28gZHJvcGRvd24gbGlzdCBpbiB0b3AtcmlnaHQgb2YgdGhlIG5hdmJhclxuICAgIGN1cnJlbnRVc2VyOiBVc2VyO1xuICAgIHByb2ZpbGVUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW5ib3hUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY3VycmVudFNlc3Npb246IHN0cmluZztcbiAgICBjdXJyZW50VXNlclJvbGU6IHN0cmluZztcbiAgICBub3RpZmljYXRpb25zOiBBcnJheTxOb3RpZmljYXRpb24+O1xuICAgIG5vdGljZUNvdW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgc29ja2V0OiBTb2NrZXRTZXJ2aWNlLFxuICAgICAgICAvLyBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5vdGljZVNlcnZpY2U6IE5vdGljZVNlcnZpY2VcbiAgICApe31cblxuICAgIHB1YmxpYyBvcHRpb25zID0ge1xuICAgICAgICB0aW1lT3V0OiA1MDAwLFxuICAgICAgICBsYXN0T25Cb3R0b206IHRydWUsXG4gICAgICAgIGNsaWNrVG9DbG9zZTogdHJ1ZSxcbiAgICAgICAgbWF4TGVuZ3RoOiAwLFxuICAgICAgICBtYXhTdGFjazogNyxcbiAgICAgICAgc2hvd1Byb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgIHByZXZlbnREdXBsaWNhdGVzOiBmYWxzZSxcbiAgICAgICAgcHJldmVudExhc3REdXBsaWNhdGVzOiBcInZpc2libGVcIixcbiAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZTogXCJzY2FsZVwiLFxuICAgICAgICBwb3NpdGlvbjogW1wicmlnaHRcIiwgXCJib3R0b21cIl1cbiAgICB9XG5cbiAgICBjaGVja01lbnVTdHlsZShpdGVtOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2Vzc2lvbiA9IGl0ZW07XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvLyB0aGUgc2VydmljZSB3aWxsIGRlbGV0ZSB1c2VyIGRhdGEgYW5kIHRva2VuIGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAvLyBhbmQgYnJpbmcgdXNlciBvdXQgb2YgdGhlIGRhc2hib2FyZFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKVxuICAgIH1cblxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpLl9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyUm9sZSA9IHVzZXIucm9sZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm90aWNlU2VydmljZS5nZXRUaHJlZSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbm90aWNlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zID0gbm90aWNlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5vdGlmaWNhdGlvbkNvdW50KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm90aWNlU2VydmljZS5nZXRDb3VudCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgY291bnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGlzTmFOKGNvdW50KSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGljZUNvdW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGljZUNvdW50ID0gY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzcG9uZFRvSW52aXRhdGlvbihub3RpY2U6IE5vdGlmaWNhdGlvbiwgcmVzcG9uc2U6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIG5vdGljZS5yZXNwb25zZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub3RpY2UucmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vdGljZVNlcnZpY2UuY29uZmlybUludml0YXRpb24obm90aWNlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIG5vdGljZSA9PiB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZmlybWVkJylcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrTm90aWNhdGlvbnMobm90aWNlOiBOb3RpZmljYXRpb24sIGNiOiBhbnkpIHtcbiAgICAgICAgbGV0IGV4aXN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGVhY2hOb3RpY2VOb3cpIHtcbiAgICAgICAgICAgIGlmKG5vdGljZS5faWQgPT09IGVhY2hOb3RpY2VOb3cuX2lkKSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNiKGV4aXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYihleGlzdCk7XG4gICAgfVxuXG4gICAgZ29Ub01lc3NhZ2VQYWdlKCkge1xuICAgICAgICB0aGlzLmluYm94VG9nZ2xlZCA9ICF0aGlzLmluYm94VG9nZ2xlZDtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQvbWVzc2FnZXMnXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uKClcbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25Db3VudCgpXG4gICAgICAgIHNlbGYuc29ja2V0LnN5bmNCeUlkKCdub3RpZmljYXRpb24nLCBzZWxmLmN1cnJlbnRVc2VyLl9pZCwgKG5vdGljZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb24oKVxuICAgICAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25Db3VudCgpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRoaXMuZ2V0Tm90aWZpY2F0aW9uKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgLy9MaXN0ZW4gdG8gdXBkYXRlcyBhZnRlciBsb2FkaW5nIHRoZSBmaXJzdCB0aHJlZSBub3RpZmljYXRpb25zXG4gICAgICAgIC8vICAgICBzZWxmLnNvY2tldC5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgc2VsZi5jdXJyZW50VXNlci5faWQsIChub3RpY2UpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBzZWxmLmdldE5vdGlmaWNhdGlvbkNvdW50KClcbiAgICAgICAgLy8gICAgICAgICBzZWxmLmNoZWNrTm90aWNhdGlvbnMobm90aWNlLCBmdW5jdGlvbihleGlzdCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAvL0lmIG5vdGlmaWNhdGlvbiBhbHJlYWR5IGV4aXN0IG9ubHkgdXBkYXRlIHJlYWQgY291bnRcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoZXhpc3QpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmKG5vdGljZS5yZWFkKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpY2VDb3VudC0tO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gc2VsZi5ub3RpZmljYXRpb25TZXJ2aWNlLnN1Y2Nlc3Mobm90aWNlLnRpdGxlLCBub3RpY2UuZGVzY3JpcHRpb24sIHtpZDogMTIzfSk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmaWNhdGlvbnMudW5zaGlmdChub3RpY2UpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy9Pbmx5IGRpc3BsYXkgdGhyZWUgbWVzc2FnZXNcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmKHNlbGYubm90aWZpY2F0aW9ucy5sZW5ndGggPiAzKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZmljYXRpb25zLnBvcCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYoIW5vdGljZS5yZWFkKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpY2VDb3VudCsrO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9KTsgICBcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
