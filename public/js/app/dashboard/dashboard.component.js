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
    // requestUserDataFromDataBase(userId) {
    //     this.authService.getCurrentUser(userId)
    //         .subscribe(
    //         user => {
    //             this.currentUserRole = user.role;
    //             this.currentUser = user;
    //             localStorage.setItem('current_user', JSON.stringify(user));
    //         },
    //         error => {
    //             this.authService.logUserOut();
    //             console.log(<any>error)
    //         });
    // }
    DashboardComponent.prototype.getCurrentUser = function () {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.currentUserRole = JSON.parse(localStorage.getItem('current_user')).role;
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
    // checkNotications(notice: Notification, cb: any) {
    //     let exist = false;
    //     this.notifications.forEach(function (eachNoticeNow) {
    //         if (notice._id === eachNoticeNow._id) {
    //             exist = true;
    //             cb(exist);
    //             return;
    //         }
    //     });
    //     cb(exist);
    // }
    /*If user clicks on specific message,
    it should take that param to the message component to display that specific message*/
    DashboardComponent.prototype.goToMessagePage = function () {
        this.inboxToggled = !this.inboxToggled;
        this.router.navigate(['dashboard/messages']);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
        this.getNotification();
        this.getNotificationCount();
        // this.socket.syncById('user', this.currentUser._id, (user) => {
        //     console.log(`Trigger ${this.currentUser._id}'s socket.`);
        //     console.log('user from socket: ', user);
        //     // trigger authService again
        //     this.requestUserDataFromDataBase(this.currentUser._id)
        // })
        // console.log(this.authService.isLoggedIn);
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
        // this.socket.unsyncById('notification', this.currentUser._id)
        // this.socket.unsyncById('user', this.currentUser._id)
        // this.socket.unsyncById('service', this.currentUser._id)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQscUNBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFjbEU7SUFVSSw0QkFDVyxXQUF3QixFQUN2QixNQUFjLEVBQ2QsTUFBcUIsRUFDckIsYUFBNEI7UUFIN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFYeEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFHOUIsa0JBQWEsR0FBd0IsRUFBRSxDQUFDO1FBVWpDLFlBQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDaEMsQ0FBQTtJQWZHLENBQUM7SUFpQkwsMkNBQWMsR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSw4REFBOEQ7UUFDOUQs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UUFFYiwrRUFBK0U7UUFDL0UsdUVBQXVFO1FBQ3ZFLDJDQUEyQztRQUMzQyxxRUFBcUU7UUFDckUsYUFBYTtJQUNULENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0ksK0RBQStEO1FBQy9ELHVEQUF1RDtRQUN2RCwwREFBMEQ7SUFDOUQsQ0FBQztJQXpLTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1lBQy9CLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsb0NBQWEsQ0FBQztZQUN6QyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNyQyxDQUFDOzswQkFBQTtJQW1LRix5QkFBQztBQUFELENBaktBLEFBaUtDLElBQUE7QUFqS1ksMEJBQWtCLHFCQWlLOUIsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWNlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvdXNlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLCBTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlIH0gZnJvbSAnbm90aWZpY2F0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd5ZWFoLWRhc2hib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbU29ja2V0U2VydmljZSwgTm90aWNlU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJ2Rhc2hib2FyZC5zdHlsZS5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICAvLyBzZXJ2ZSBmb3IgdGhlIHR3byBkcm9wZG93biBsaXN0IGluIHRvcC1yaWdodCBvZiB0aGUgbmF2YmFyXG4gICAgY3VycmVudFVzZXI6IFVzZXI7XG4gICAgcHJvZmlsZVRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbmJveFRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjdXJyZW50U2Vzc2lvbjogc3RyaW5nO1xuICAgIGN1cnJlbnRVc2VyUm9sZTogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvbnM6IEFycmF5PE5vdGlmaWNhdGlvbj4gPSBbXTtcbiAgICBub3RpY2VDb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgc29ja2V0OiBTb2NrZXRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5vdGljZVNlcnZpY2U6IE5vdGljZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgcHVibGljIG9wdGlvbnMgPSB7XG4gICAgICAgIHRpbWVPdXQ6IDUwMDAsXG4gICAgICAgIGxhc3RPbkJvdHRvbTogdHJ1ZSxcbiAgICAgICAgY2xpY2tUb0Nsb3NlOiB0cnVlLFxuICAgICAgICBtYXhMZW5ndGg6IDAsXG4gICAgICAgIG1heFN0YWNrOiA3LFxuICAgICAgICBzaG93UHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgcHJldmVudER1cGxpY2F0ZXM6IGZhbHNlLFxuICAgICAgICBwcmV2ZW50TGFzdER1cGxpY2F0ZXM6IFwidmlzaWJsZVwiLFxuICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICBhbmltYXRlOiBcInNjYWxlXCIsXG4gICAgICAgIHBvc2l0aW9uOiBbXCJyaWdodFwiLCBcImJvdHRvbVwiXVxuICAgIH1cblxuICAgIGNoZWNrTWVudVN0eWxlKGl0ZW06IHN0cmluZykge1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gaXRlbTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIC8vIHRoZSBzZXJ2aWNlIHdpbGwgZGVsZXRlIHVzZXIgZGF0YSBhbmQgdG9rZW4gaW4gbG9jYWxTdG9yYWdlXG4gICAgICAgIC8vIGFuZCBicmluZyB1c2VyIG91dCBvZiB0aGUgZGFzaGJvYXJkXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nT3V0KClcbiAgICB9XG5cbiAgICAvLyByZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodXNlcklkKSB7XG4gICAgLy8gICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIodXNlcklkKVxuICAgIC8vICAgICAgICAgLnN1YnNjcmliZShcbiAgICAvLyAgICAgICAgIHVzZXIgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJSb2xlID0gdXNlci5yb2xlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyO1xuICAgIC8vICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50X3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICBnZXRDdXJyZW50VXNlcigpIHtcblxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyUm9sZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKS5yb2xlO1xuICAgIH1cblxuICAgIGdldE5vdGlmaWNhdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vdGljZVNlcnZpY2UuZ2V0VGhyZWUoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIG5vdGljZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IG5vdGljZXM7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5vdGlmaWNhdGlvbkNvdW50KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm90aWNlU2VydmljZS5nZXRDb3VudCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgY291bnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc05hTihjb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpY2VDb3VudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpY2VDb3VudCA9IGNvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNoZWNrTm90aWNhdGlvbnMobm90aWNlOiBOb3RpZmljYXRpb24sIGNiOiBhbnkpIHtcbiAgICAvLyAgICAgbGV0IGV4aXN0ID0gZmFsc2U7XG4gICAgLy8gICAgIHRoaXMubm90aWZpY2F0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChlYWNoTm90aWNlTm93KSB7XG4gICAgLy8gICAgICAgICBpZiAobm90aWNlLl9pZCA9PT0gZWFjaE5vdGljZU5vdy5faWQpIHtcbiAgICAvLyAgICAgICAgICAgICBleGlzdCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgY2IoZXhpc3QpO1xuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGNiKGV4aXN0KTtcbiAgICAvLyB9XG4gICAgLypJZiB1c2VyIGNsaWNrcyBvbiBzcGVjaWZpYyBtZXNzYWdlLCBcbiAgICBpdCBzaG91bGQgdGFrZSB0aGF0IHBhcmFtIHRvIHRoZSBtZXNzYWdlIGNvbXBvbmVudCB0byBkaXNwbGF5IHRoYXQgc3BlY2lmaWMgbWVzc2FnZSovXG4gICAgZ29Ub01lc3NhZ2VQYWdlKCkge1xuICAgICAgICB0aGlzLmluYm94VG9nZ2xlZCA9ICF0aGlzLmluYm94VG9nZ2xlZDtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQvbWVzc2FnZXMnXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKVxuXG4gICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uKClcbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25Db3VudCgpXG5cbiAgICAgICAgLy8gdGhpcy5zb2NrZXQuc3luY0J5SWQoJ3VzZXInLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKHVzZXIpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGBUcmlnZ2VyICR7dGhpcy5jdXJyZW50VXNlci5faWR9J3Mgc29ja2V0LmApO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3VzZXIgZnJvbSBzb2NrZXQ6ICcsIHVzZXIpO1xuICAgICAgICAvLyAgICAgLy8gdHJpZ2dlciBhdXRoU2VydmljZSBhZ2FpblxuICAgICAgICAvLyAgICAgdGhpcy5yZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbik7XG5cbiAgICAgICAgLy8gdGhpcy5zb2NrZXQuc3luY0J5SWQoJ25vdGlmaWNhdGlvbicsIHRoaXMuY3VycmVudFVzZXIuX2lkLCAobm90aWNlKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbigpXG4gICAgICAgIC8vICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyB0aGlzLnNvY2tldC5zeW5jQnlJZCgnc2VydmljZScsIHRoaXMuY3VycmVudFVzZXIuX2lkLCAoc2VydmljZSkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYFRyaWdnZXIgJHt0aGlzLmN1cnJlbnRVc2VyLl9pZH0ncyBzb2NrZXQuYCk7XG4gICAgICAgIC8vICAgICAvLyB0cmlnZ2VyIGF1dGhTZXJ2aWNlIGFnYWluXG4gICAgICAgIC8vICAgICB0aGlzLnJlcXVlc3RVc2VyRGF0YUZyb21EYXRhQmFzZSh0aGlzLmN1cnJlbnRVc2VyLl9pZClcbiAgICAgICAgLy8gfSlcblxuLy8gICAgICAgICB0aGlzLnNvY2tldC5zeW5jQnlJZCgndXNlcicsIHRoaXMuY3VycmVudFVzZXIuX2lkLCAodXNlcikgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYFRyaWdnZXIgJHt0aGlzLmN1cnJlbnRVc2VyLl9pZH0ncyBzb2NrZXQuYCk7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciBmcm9tIHNvY2tldDogJywgdXNlcik7XG4vLyAgICAgICAgICAgICAvLyB0cmlnZ2VyIGF1dGhTZXJ2aWNlIGFnYWluXG4vLyAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVc2VyRGF0YUZyb21EYXRhQmFzZSh0aGlzLmN1cnJlbnRVc2VyLl9pZClcbi8vICAgICAgICAgfSlcblxuLy8gICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbigpXG4vLyAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuXG4vLyAgICAgICAgIHRoaXMuc29ja2V0LnN5bmNCeUlkKCdub3RpZmljYXRpb24nLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKG5vdGljZSkgPT4ge1xuLy8gICAgICAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb24oKVxuLy8gICAgICAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25Db3VudCgpXG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgICAgdGhpcy5zb2NrZXQuc3luY0J5SWQoJ3NlcnZpY2UnLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKHNlcnZpY2UpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUcmlnZ2VyICR7dGhpcy5jdXJyZW50VXNlci5faWR9J3Mgc29ja2V0LmApXG4vLyAgICAgICAgICAgICAvLyB0cmlnZ2VyIGF1dGhTZXJ2aWNlIGFnYWluXG4vLyAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVc2VyRGF0YUZyb21EYXRhQmFzZSh0aGlzLmN1cnJlbnRVc2VyLl9pZClcbi8vICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgLy8gdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIC8vIHRoaXMuc29ja2V0LnVuc3luY0J5SWQoJ3VzZXInLCB0aGlzLmN1cnJlbnRVc2VyLl9pZClcbiAgICAgICAgLy8gdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnc2VydmljZScsIHRoaXMuY3VycmVudFVzZXIuX2lkKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
