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
        console.log('dashboard init');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQscUNBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsK0JBQThCLG1DQUFtQyxDQUFDLENBQUE7QUFjbEU7SUFVSSw0QkFDVyxXQUF3QixFQUN2QixNQUFjLEVBQ2QsTUFBcUIsRUFDckIsYUFBNEI7UUFIN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFYeEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFHOUIsa0JBQWEsR0FBd0IsRUFBRSxDQUFDO1FBVWpDLFlBQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLElBQUk7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7U0FDaEMsQ0FBQTtJQWZHLENBQUM7SUFpQkwsMkNBQWMsR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSw4REFBOEQ7UUFDOUQs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RkFBbUY7UUFDbkYscUNBQXFDO1FBQ3JDLDBDQUEwQztRQUMxQyxhQUFhO1FBRWIsK0VBQStFO1FBQy9FLHVFQUF1RTtRQUN2RSwyQ0FBMkM7UUFDM0MscUVBQXFFO1FBQ3JFLGFBQWE7SUFDVCxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNJLCtEQUErRDtRQUMvRCx1REFBdUQ7UUFDdkQsMERBQTBEO0lBQzlELENBQUM7SUExS0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLG9DQUFhLENBQUM7WUFDekMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDckMsQ0FBQzs7MEJBQUE7SUFvS0YseUJBQUM7QUFBRCxDQWxLQSxBQWtLQyxJQUFBO0FBbEtZLDBCQUFrQixxQkFrSzlCLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGljZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzL3VzZXInO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSwgU2ltcGxlTm90aWZpY2F0aW9uc01vZHVsZSB9IGZyb20gJ25vdGlmaWNhdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW1NvY2tldFNlcnZpY2UsIE5vdGljZVNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogWydkYXNoYm9hcmQuc3R5bGUuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgLy8gc2VydmUgZm9yIHRoZSB0d28gZHJvcGRvd24gbGlzdCBpbiB0b3AtcmlnaHQgb2YgdGhlIG5hdmJhclxuICAgIGN1cnJlbnRVc2VyOiBVc2VyO1xuICAgIHByb2ZpbGVUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW5ib3hUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY3VycmVudFNlc3Npb246IHN0cmluZztcbiAgICBjdXJyZW50VXNlclJvbGU6IHN0cmluZztcbiAgICBub3RpZmljYXRpb25zOiBBcnJheTxOb3RpZmljYXRpb24+ID0gW107XG4gICAgbm90aWNlQ291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHNvY2tldDogU29ja2V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBub3RpY2VTZXJ2aWNlOiBOb3RpY2VTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIHB1YmxpYyBvcHRpb25zID0ge1xuICAgICAgICB0aW1lT3V0OiA1MDAwLFxuICAgICAgICBsYXN0T25Cb3R0b206IHRydWUsXG4gICAgICAgIGNsaWNrVG9DbG9zZTogdHJ1ZSxcbiAgICAgICAgbWF4TGVuZ3RoOiAwLFxuICAgICAgICBtYXhTdGFjazogNyxcbiAgICAgICAgc2hvd1Byb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgIHByZXZlbnREdXBsaWNhdGVzOiBmYWxzZSxcbiAgICAgICAgcHJldmVudExhc3REdXBsaWNhdGVzOiBcInZpc2libGVcIixcbiAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZTogXCJzY2FsZVwiLFxuICAgICAgICBwb3NpdGlvbjogW1wicmlnaHRcIiwgXCJib3R0b21cIl1cbiAgICB9XG5cbiAgICBjaGVja01lbnVTdHlsZShpdGVtOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2Vzc2lvbiA9IGl0ZW07XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvLyB0aGUgc2VydmljZSB3aWxsIGRlbGV0ZSB1c2VyIGRhdGEgYW5kIHRva2VuIGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAvLyBhbmQgYnJpbmcgdXNlciBvdXQgb2YgdGhlIGRhc2hib2FyZFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ091dCgpXG4gICAgfVxuXG4gICAgLy8gcmVxdWVzdFVzZXJEYXRhRnJvbURhdGFCYXNlKHVzZXJJZCkge1xuICAgIC8vICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKHVzZXJJZClcbiAgICAvLyAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgLy8gICAgICAgICB1c2VyID0+IHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyUm9sZSA9IHVzZXIucm9sZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcjtcbiAgICAvLyAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudF91c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlclJvbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSkucm9sZTtcbiAgICB9XG5cbiAgICBnZXROb3RpZmljYXRpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmdldFRocmVlKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBub3RpY2VzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBub3RpY2VzO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXROb3RpZmljYXRpb25Db3VudCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vdGljZVNlcnZpY2UuZ2V0Q291bnQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGNvdW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4oY291bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWNlQ291bnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWNlQ291bnQgPSBjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjaGVja05vdGljYXRpb25zKG5vdGljZTogTm90aWZpY2F0aW9uLCBjYjogYW55KSB7XG4gICAgLy8gICAgIGxldCBleGlzdCA9IGZhbHNlO1xuICAgIC8vICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZWFjaE5vdGljZU5vdykge1xuICAgIC8vICAgICAgICAgaWYgKG5vdGljZS5faWQgPT09IGVhY2hOb3RpY2VOb3cuX2lkKSB7XG4gICAgLy8gICAgICAgICAgICAgZXhpc3QgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIGNiKGV4aXN0KTtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBjYihleGlzdCk7XG4gICAgLy8gfVxuICAgIC8qSWYgdXNlciBjbGlja3Mgb24gc3BlY2lmaWMgbWVzc2FnZSwgXG4gICAgaXQgc2hvdWxkIHRha2UgdGhhdCBwYXJhbSB0byB0aGUgbWVzc2FnZSBjb21wb25lbnQgdG8gZGlzcGxheSB0aGF0IHNwZWNpZmljIG1lc3NhZ2UqL1xuICAgIGdvVG9NZXNzYWdlUGFnZSgpIHtcbiAgICAgICAgdGhpcy5pbmJveFRvZ2dsZWQgPSAhdGhpcy5pbmJveFRvZ2dsZWQ7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkL21lc3NhZ2VzJ10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZGFzaGJvYXJkIGluaXQnKVxuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyKClcblxuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbigpXG4gICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuXG4gICAgICAgIC8vIHRoaXMuc29ja2V0LnN5bmNCeUlkKCd1c2VyJywgdGhpcy5jdXJyZW50VXNlci5faWQsICh1c2VyKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhgVHJpZ2dlciAke3RoaXMuY3VycmVudFVzZXIuX2lkfSdzIHNvY2tldC5gKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd1c2VyIGZyb20gc29ja2V0OiAnLCB1c2VyKTtcbiAgICAgICAgLy8gICAgIC8vIHRyaWdnZXIgYXV0aFNlcnZpY2UgYWdhaW5cbiAgICAgICAgLy8gICAgIHRoaXMucmVxdWVzdFVzZXJEYXRhRnJvbURhdGFCYXNlKHRoaXMuY3VycmVudFVzZXIuX2lkKVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4pO1xuXG4gICAgICAgIC8vIHRoaXMuc29ja2V0LnN5bmNCeUlkKCdub3RpZmljYXRpb24nLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKG5vdGljZSkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5nZXROb3RpZmljYXRpb24oKVxuICAgICAgICAvLyAgICAgdGhpcy5nZXROb3RpZmljYXRpb25Db3VudCgpXG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgLy8gdGhpcy5zb2NrZXQuc3luY0J5SWQoJ3NlcnZpY2UnLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKHNlcnZpY2UpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGBUcmlnZ2VyICR7dGhpcy5jdXJyZW50VXNlci5faWR9J3Mgc29ja2V0LmApO1xuICAgICAgICAvLyAgICAgLy8gdHJpZ2dlciBhdXRoU2VydmljZSBhZ2FpblxuICAgICAgICAvLyAgICAgdGhpcy5yZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIC8vIH0pXG5cbi8vICAgICAgICAgdGhpcy5zb2NrZXQuc3luY0J5SWQoJ3VzZXInLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKHVzZXIpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUcmlnZ2VyICR7dGhpcy5jdXJyZW50VXNlci5faWR9J3Mgc29ja2V0LmApO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgZnJvbSBzb2NrZXQ6ICcsIHVzZXIpO1xuLy8gICAgICAgICAgICAgLy8gdHJpZ2dlciBhdXRoU2VydmljZSBhZ2FpblxuLy8gICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodGhpcy5jdXJyZW50VXNlci5faWQpXG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb24oKVxuLy8gICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KClcblxuLy8gICAgICAgICB0aGlzLnNvY2tldC5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQsIChub3RpY2UpID0+IHtcbi8vICAgICAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uKClcbi8vICAgICAgICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuLy8gICAgICAgICB9KVxuXG4vLyAgICAgICAgIHRoaXMuc29ja2V0LnN5bmNCeUlkKCdzZXJ2aWNlJywgdGhpcy5jdXJyZW50VXNlci5faWQsIChzZXJ2aWNlKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVHJpZ2dlciAke3RoaXMuY3VycmVudFVzZXIuX2lkfSdzIHNvY2tldC5gKVxuLy8gICAgICAgICAgICAgLy8gdHJpZ2dlciBhdXRoU2VydmljZSBhZ2FpblxuLy8gICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXNlckRhdGFGcm9tRGF0YUJhc2UodGhpcy5jdXJyZW50VXNlci5faWQpXG4vLyAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIHRoaXMuc29ja2V0LnVuc3luY0J5SWQoJ25vdGlmaWNhdGlvbicsIHRoaXMuY3VycmVudFVzZXIuX2lkKVxuICAgICAgICAvLyB0aGlzLnNvY2tldC51bnN5bmNCeUlkKCd1c2VyJywgdGhpcy5jdXJyZW50VXNlci5faWQpXG4gICAgICAgIC8vIHRoaXMuc29ja2V0LnVuc3luY0J5SWQoJ3NlcnZpY2UnLCB0aGlzLmN1cnJlbnRVc2VyLl9pZClcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
