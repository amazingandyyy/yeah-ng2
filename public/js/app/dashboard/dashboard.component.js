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
            // import { NotificationsService, SimpleNotificationsComponent } from 'notifications';
            DashboardComponent = (function () {
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
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUEsc0ZBQXNGO1lBWXRGO2dCQVVJLDRCQUNZLFdBQXdCLEVBQ3hCLE1BQWMsRUFDZCxNQUFxQixFQUNyQixhQUE0QjtvQkFINUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBZTtvQkFDckIsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBWHhDLG1CQUFjLEdBQVksS0FBSyxDQUFDO29CQUNoQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztvQkFldkIsWUFBTyxHQUFHO3dCQUNiLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFlBQVksRUFBRSxJQUFJO3dCQUNsQixZQUFZLEVBQUUsSUFBSTt3QkFDbEIsU0FBUyxFQUFFLENBQUM7d0JBQ1osUUFBUSxFQUFFLENBQUM7d0JBQ1gsZUFBZSxFQUFFLElBQUk7d0JBQ3JCLFlBQVksRUFBRSxJQUFJO3dCQUNsQixpQkFBaUIsRUFBRSxLQUFLO3dCQUN4QixxQkFBcUIsRUFBRSxTQUFTO3dCQUNoQyxHQUFHLEVBQUUsS0FBSzt3QkFDVixPQUFPLEVBQUUsT0FBTzt3QkFDaEIsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztxQkFDaEMsQ0FBQTtnQkFmQyxDQUFDO2dCQWlCSCwyQ0FBYyxHQUFkLFVBQWUsSUFBWTtvQkFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsbUNBQU0sR0FBTjtvQkFDSSw4REFBOEQ7b0JBQzlELHNDQUFzQztvQkFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDakMsQ0FBQztnQkFFRCxvQ0FBTyxHQUFQO29CQUFBLGlCQVdDO29CQVZHLElBQUksQ0FBQyxXQUFXLENB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Q0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFFaEMsQ0FBQztnQkFFRCx3Q0FBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqRSxDQUFDO2dCQS9KTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTt3QkFDbkIsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLDBCQUEwQjt3QkFDdkMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsOEJBQWEsRUFBRSxvQ0FBYSxDQUFDO3dCQUN0RCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztxQkFDckMsQ0FBQzs7c0NBQUE7Z0JBeUpGLHlCQUFDO1lBQUQsQ0F2SkEsQUF1SkMsSUFBQTtZQXZKRCxtREF1SkMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWNlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvdXNlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvbm90aWZpY2F0aW9uJztcbi8vIGltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLCBTaW1wbGVOb3RpZmljYXRpb25zQ29tcG9uZW50IH0gZnJvbSAnbm90aWZpY2F0aW9ucyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3llYWgtZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgU29ja2V0U2VydmljZSwgTm90aWNlU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJ2Rhc2hib2FyZC5zdHlsZS5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuICAgIC8vIHNlcnZlIGZvciB0aGUgdHdvIGRyb3Bkb3duIGxpc3QgaW4gdG9wLXJpZ2h0IG9mIHRoZSBuYXZiYXJcbiAgICBjdXJyZW50VXNlcjogVXNlcjtcbiAgICBwcm9maWxlVG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGluYm94VG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGN1cnJlbnRTZXNzaW9uOiBzdHJpbmc7XG4gICAgY3VycmVudFVzZXJSb2xlOiBzdHJpbmc7XG4gICAgbm90aWZpY2F0aW9uczogQXJyYXk8Tm90aWZpY2F0aW9uPjtcbiAgICBub3RpY2VDb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHNvY2tldDogU29ja2V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBub3RpY2VTZXJ2aWNlOiBOb3RpY2VTZXJ2aWNlLFxuICAgICAgICAvLyBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlXG5cbiAgICApe31cblxuICAgIHB1YmxpYyBvcHRpb25zID0ge1xuICAgICAgICB0aW1lT3V0OiA1MDAwLFxuICAgICAgICBsYXN0T25Cb3R0b206IHRydWUsXG4gICAgICAgIGNsaWNrVG9DbG9zZTogdHJ1ZSxcbiAgICAgICAgbWF4TGVuZ3RoOiAwLFxuICAgICAgICBtYXhTdGFjazogNyxcbiAgICAgICAgc2hvd1Byb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgIHByZXZlbnREdXBsaWNhdGVzOiBmYWxzZSxcbiAgICAgICAgcHJldmVudExhc3REdXBsaWNhdGVzOiBcInZpc2libGVcIixcbiAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZTogXCJzY2FsZVwiLFxuICAgICAgICBwb3NpdGlvbjogW1wicmlnaHRcIiwgXCJib3R0b21cIl1cbiAgICB9XG5cbiAgICBjaGVja01lbnVTdHlsZShpdGVtOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2Vzc2lvbiA9IGl0ZW07XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvLyB0aGUgc2VydmljZSB3aWxsIGRlbGV0ZSB1c2VyIGRhdGEgYW5kIHRva2VuIGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAvLyBhbmQgYnJpbmcgdXNlciBvdXQgb2YgdGhlIGRhc2hib2FyZFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKVxuICAgIH1cblxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpLl9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyUm9sZSA9IHVzZXIucm9sZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uKGNiKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmdldFRocmVlKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBub3RpY2VzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBub3RpY2VzO1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5vdGlmaWNhdGlvbkNvdW50KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm90aWNlU2VydmljZS5nZXRDb3VudCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgY291bnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGlzTmFOKGNvdW50KSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGljZUNvdW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGljZUNvdW50ID0gY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzcG9uZFRvSW52aXRhdGlvbihub3RpY2U6IE5vdGlmaWNhdGlvbiwgcmVzcG9uc2U6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIG5vdGljZS5yZXNwb25zZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub3RpY2UucmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vdGljZVNlcnZpY2UuY29uZmlybUludml0YXRpb24obm90aWNlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIG5vdGljZSA9PiB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZmlybWVkJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrTm90aWNhdGlvbnMobm90aWNlOiBOb3RpZmljYXRpb24sIGNiOiBhbnkpIHtcbiAgICAgICAgbGV0IGV4aXN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGVhY2hOb3RpY2VOb3cpIHtcbiAgICAgICAgICAgIGlmKG5vdGljZS5faWQgPT09IGVhY2hOb3RpY2VOb3cuX2lkKSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNiKGV4aXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYihleGlzdCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy9MaXN0ZW4gdG8gdXBkYXRlcyBhZnRlciBsb2FkaW5nIHRoZSBmaXJzdCB0aHJlZSBub3RpZmljYXRpb25zXG4gICAgICAgICAgICBzZWxmLnNvY2tldC5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgc2VsZi5jdXJyZW50VXNlci5faWQsIGZ1bmN0aW9uKG5vdGljZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2hlY2tOb3RpY2F0aW9ucyhub3RpY2UsIGZ1bmN0aW9uKGV4aXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbm90aWZpY2F0aW9uIGFscmVhZHkgZXhpc3Qgb25seSB1cGRhdGUgcmVhZCBjb3VudFxuICAgICAgICAgICAgICAgICAgICBpZihleGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobm90aWNlLnJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGljZUNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2Vzcyhub3RpY2UudGl0bGUsIG5vdGljZS5kZXNjcmlwdGlvbiwge2lkOiAxMjN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWZpY2F0aW9ucy51bnNoaWZ0KG5vdGljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL09ubHkgZGlzcGxheSB0aHJlZSBtZXNzYWdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5ub3RpZmljYXRpb25zLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmaWNhdGlvbnMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighbm90aWNlLnJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGljZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pOyAgIFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25Db3VudCgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
