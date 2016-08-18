System.register(['@angular/core', '@angular/router', '../shared/services/auth.service', '../shared/services/notification.service', '../shared/services/socket.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, auth_service_1, notification_service_1, socket_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(authService, router, socket, noticeService) {
                    this.authService = authService;
                    this.router = router;
                    this.socket = socket;
                    this.noticeService = noticeService;
                    this.profileToggled = false;
                    this.inboxToggled = false;
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
                        console.log('notifications', notices);
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
                        self.noticeCount = count;
                    }, function (error) {
                        console.log(error);
                    });
                };
                DashboardComponent.prototype.ngOnInit = function () {
                    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
                    this.getUser();
                    var self = this;
                    this.getNotification(function () {
                        //Listen to updates after loading the first three notifications
                        self.socket.syncById('notification', self.currentUser._id, function (notice) {
                            this.notifications.unshift(notice);
                            this.notifications.pop();
                            if (!notice.read) {
                                self.noticeCount++;
                            }
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
                        providers: [auth_service_1.AuthService, socket_service_1.SocketService, notification_service_1.NotificationService],
                        styleUrls: ['dashboard.style.css']
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, socket_service_1.SocketService, notification_service_1.NotificationService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQVVJLDRCQUNZLFdBQXdCLEVBQ3hCLE1BQWMsRUFDZCxNQUFxQixFQUNyQixhQUFrQztvQkFIbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBZTtvQkFDckIsa0JBQWEsR0FBYixhQUFhLENBQXFCO29CQVg5QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztvQkFDaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7Z0JBVzVCLENBQUM7Z0JBRUgsMkNBQWMsR0FBZCxVQUFlLElBQVk7b0JBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMvQixDQUFDO2dCQUVELG1DQUFNLEdBQU47b0JBQ0ksOERBQThEO29CQUM5RCxzQ0FBc0M7b0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUE7Z0JBQ2pDLENBQUM7Z0JBRUQsb0NBQU8sR0FBUDtvQkFBQSxpQkFXQztvQkFWRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7eUJBQ2hGLFNBQVMsQ0FDVixVQUFBLElBQUk7d0JBQ0EsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNqQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtvQkFDM0IsQ0FBQyxFQUNELFVBQUEsS0FBSzt3QkFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFNLEtBQUssQ0FBQyxDQUFBO29CQUMzQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELDRDQUFlLEdBQWYsVUFBZ0IsRUFBRTtvQkFBbEIsaUJBYUM7b0JBWkcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTt5QkFDeEIsU0FBUyxDQUNWLFVBQUEsT0FBTzt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQTt3QkFDckMsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7d0JBQzdCLEVBQUUsRUFBRSxDQUFDO29CQUNULENBQUMsRUFDRCxVQUFBLEtBQUs7d0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBTSxLQUFLLENBQUMsQ0FBQTt3QkFDdkIsRUFBRSxFQUFFLENBQUM7b0JBQ1QsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRCxpREFBb0IsR0FBcEI7b0JBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTt5QkFDeEIsU0FBUyxDQUNWLFVBQUEsS0FBSzt3QkFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDN0IsQ0FBQyxFQUNELFVBQUEsS0FBSzt3QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFNLEtBQUssQ0FBQyxDQUFBO29CQUMzQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDcEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNmLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQzt3QkFDakIsK0RBQStEO3dCQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsVUFBUyxNQUFNOzRCQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFDekIsRUFBRSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQ0FDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7NEJBQ3ZCLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7Z0JBRWhDLENBQUM7Z0JBRUQsd0NBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakUsQ0FBQztnQkFoR0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7d0JBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSwwQkFBMEI7d0JBQ3ZDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDhCQUFhLEVBQUUsMENBQW1CLENBQUM7d0JBQzVELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNyQyxDQUFDOztzQ0FBQTtnQkEwRkYseUJBQUM7WUFBRCxDQXhGQSxBQXdGQyxJQUFBO1lBeEZELG1EQXdGQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNvY2tldFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvc29ja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3NoYXJlZC90eXBlcy91c2VyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC90eXBlcy9ub3RpZmljYXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd5ZWFoLWRhc2hib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFNvY2tldFNlcnZpY2UsIE5vdGlmaWNhdGlvblNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogWydkYXNoYm9hcmQuc3R5bGUuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgICAvLyBzZXJ2ZSBmb3IgdGhlIHR3byBkcm9wZG93biBsaXN0IGluIHRvcC1yaWdodCBvZiB0aGUgbmF2YmFyXG4gICAgY3VycmVudFVzZXI6IFVzZXI7XG4gICAgcHJvZmlsZVRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbmJveFRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjdXJyZW50U2Vzc2lvbjogc3RyaW5nO1xuICAgIGN1cnJlbnRVc2VyUm9sZTogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvbnM6IEFycmF5PE5vdGlmaWNhdGlvbj47XG4gICAgbm90aWNlQ291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzb2NrZXQ6IFNvY2tldFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbm90aWNlU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZVxuICAgICl7fVxuXG4gICAgY2hlY2tNZW51U3R5bGUoaXRlbTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNlc3Npb24gPSBpdGVtO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLy8gdGhlIHNlcnZpY2Ugd2lsbCBkZWxldGUgdXNlciBkYXRhIGFuZCB0b2tlbiBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgLy8gYW5kIGJyaW5nIHVzZXIgb3V0IG9mIHRoZSBkYXNoYm9hcmRcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KClcbiAgICB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKS5faWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclJvbGUgPSB1c2VyLnJvbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5vdGlmaWNhdGlvbihjYikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm90aWNlU2VydmljZS5nZXRUaHJlZSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbm90aWNlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGlmaWNhdGlvbnMnLCBub3RpY2VzKVxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IG5vdGljZXM7XG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uQ291bnQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmdldENvdW50KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ub3RpY2VDb3VudCA9IGNvdW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy9MaXN0ZW4gdG8gdXBkYXRlcyBhZnRlciBsb2FkaW5nIHRoZSBmaXJzdCB0aHJlZSBub3RpZmljYXRpb25zXG4gICAgICAgICAgICBzZWxmLnNvY2tldC5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgc2VsZi5jdXJyZW50VXNlci5faWQsIGZ1bmN0aW9uKG5vdGljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy51bnNoaWZ0KG5vdGljZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLnBvcCgpO1xuICAgICAgICAgICAgICAgIGlmKCFub3RpY2UucmVhZCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGljZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7ICAgXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbkNvdW50KCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnNvY2tldC51bnN5bmNCeUlkKCdub3RpZmljYXRpb24nLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
