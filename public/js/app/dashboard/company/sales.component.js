System.register(['@angular/core', '@angular/router', 'moment', '../../shared/services/index'], function(exports_1, context_1) {
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
    var core_1, router_1, moment, index_1;
    var SalesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (moment_1) {
                moment = moment_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            SalesComponent = (function () {
                function SalesComponent(router, authService, adminService, userDataService) {
                    this.router = router;
                    this.authService = authService;
                    this.adminService = adminService;
                    this.userDataService = userDataService;
                    this.currentUser = {};
                    this.userDataList = {};
                    this.arrayOfUsersKeys = [];
                    this.selectedUser = {};
                    this.studentsList = [];
                    this.advisorsList = [];
                    this.adminsList = [];
                }
                SalesComponent.prototype.getUser = function () {
                    var _this = this;
                    this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
                        .subscribe(function (user) {
                        _this.currentUser = user;
                    }, function (error) {
                        _this.authService.logUserOut();
                        console.log(error);
                    });
                };
                SalesComponent.prototype.getUsers = function () {
                    var _this = this;
                    this.adminService.getAllUsers()
                        .subscribe(function (users) {
                        console.log('All Users: ', users);
                        _this.userDataList = users;
                        _this.arrayOfUsersKeys = Object.keys(users);
                    }, function (error) {
                        _this.authService.logUserOut();
                        console.log(error);
                    });
                };
                SalesComponent.prototype.showSummary = function () {
                    var _this = this;
                    this.studentsList = [];
                    this.advisorsList = [];
                    this.adminsList = [];
                    this.arrayOfUsersKeys.forEach(function (userKey) {
                        console.log(userKey, _this.userDataList[userKey]);
                        switch (_this.userDataList[userKey].role) {
                            case 'student':
                                _this.studentsList.push(_this.userDataList[userKey]);
                                break;
                            case 'advisor':
                                _this.advisorsList.push(_this.userDataList[userKey]);
                                break;
                            case 'admin':
                                _this.adminsList.push(_this.userDataList[userKey]);
                                break;
                        }
                    });
                    return "Total: " + this.arrayOfUsersKeys.length + " users (" + this.studentsList.length + " students, " + this.advisorsList.length + " advisors, " + this.adminsList.length + " admins)";
                };
                SalesComponent.prototype.renderLLT = function (unix) {
                    return moment(unix).format('LLL');
                };
                SalesComponent.prototype.getSingleUser = function (userId) {
                    var _this = this;
                    this.selectedUserId = userId;
                    this.userDataService.getSingleUser(userId)
                        .subscribe(function (user) {
                        if (user._id == _this.selectedUserId) {
                            console.log('Single User: ', user);
                            _this.selectedUser = user;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                };
                SalesComponent.prototype.ngOnInit = function () {
                    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
                    this.getUser();
                };
                SalesComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'yeah-sales',
                        templateUrl: 'sales.component.html',
                        styleUrls: ['company.style.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [index_1.AuthService, index_1.AdminService, index_1.UserDataService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, index_1.AuthService, index_1.AdminService, index_1.UserDataService])
                ], SalesComponent);
                return SalesComponent;
            }());
            exports_1("SalesComponent", SalesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jb21wYW55L3NhbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQVdJLHdCQUNZLE1BQWMsRUFDZCxXQUF3QixFQUN4QixZQUEwQixFQUMxQixlQUFnQztvQkFIaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFkcEMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ2pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO29CQUNsQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7b0JBRXRCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO29CQUVsQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsaUJBQVksR0FBRyxFQUFFLENBQUM7b0JBQ2xCLGVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBT3BCLENBQUM7Z0JBRUwsZ0NBQU8sR0FBUDtvQkFBQSxpQkFVQztvQkFURyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7eUJBQ2hGLFNBQVMsQ0FDVixVQUFBLElBQUk7d0JBQ0EsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7b0JBQzNCLENBQUMsRUFDRCxVQUFBLEtBQUs7d0JBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBTSxLQUFLLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUFBLGlCQVlDO29CQVhHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO3lC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YyxDQUFDLENBQUMsQ0FBQztvQkFDcEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQWhHTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTt3QkFDbkIsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNoQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMsbUJBQVcsRUFBRSxvQkFBWSxFQUFFLHVCQUFlLENBQUM7cUJBQzFELENBQUM7O2tDQUFBO2dCQTBGRixxQkFBQztZQUFELENBekZBLEFBeUZDLElBQUE7WUF6RkQsMkNBeUZDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2NvbXBhbnkvc2FsZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3R5cGVzL3VzZXInXG5pbXBvcnQgeyBBdXRoU2VydmljZSwgQWRtaW5TZXJ2aWNlLCBVc2VyRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1zYWxlcycsXG4gICAgdGVtcGxhdGVVcmw6ICdzYWxlcy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2NvbXBhbnkuc3R5bGUuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgQWRtaW5TZXJ2aWNlLCBVc2VyRGF0YVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNhbGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyID0ge307XG4gICAgcHJpdmF0ZSB1c2VyRGF0YUxpc3QgPSB7fTtcbiAgICBwcml2YXRlIGFycmF5T2ZVc2Vyc0tleXMgPSBbXTtcbiAgICBwcml2YXRlIHNlbGVjdGVkVXNlcklkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZFVzZXIgPSB7fTtcblxuICAgIHByaXZhdGUgc3R1ZGVudHNMaXN0ID0gW107XG4gICAgcHJpdmF0ZSBhZHZpc29yc0xpc3QgPSBbXTtcbiAgICBwcml2YXRlIGFkbWluc0xpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhZG1pblNlcnZpY2U6IEFkbWluU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB1c2VyRGF0YVNlcnZpY2U6IFVzZXJEYXRhU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKS5faWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVc2VycygpIHtcbiAgICAgICAgdGhpcy5hZG1pblNlcnZpY2UuZ2V0QWxsVXNlcnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXJzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWxsIFVzZXJzOiAnLCB1c2Vycyk7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YUxpc3QgPSB1c2VycztcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5T2ZVc2Vyc0tleXMgPSBPYmplY3Qua2V5cyh1c2Vycyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93U3VtbWFyeSgpIHtcbiAgICAgICAgdGhpcy5zdHVkZW50c0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5hZHZpc29yc0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5hZG1pbnNMaXN0ID0gW107XG4gICAgICAgIHRoaXMuYXJyYXlPZlVzZXJzS2V5cy5mb3JFYWNoKHVzZXJLZXkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcktleSwgdGhpcy51c2VyRGF0YUxpc3RbdXNlcktleV0pO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XS5yb2xlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3R1ZGVudCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudHNMaXN0LnB1c2godGhpcy51c2VyRGF0YUxpc3RbdXNlcktleV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Fkdmlzb3InOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkdmlzb3JzTGlzdC5wdXNoKHRoaXMudXNlckRhdGFMaXN0W3VzZXJLZXldKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhZG1pbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRtaW5zTGlzdC5wdXNoKHRoaXMudXNlckRhdGFMaXN0W3VzZXJLZXldKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGBUb3RhbDogJHt0aGlzLmFycmF5T2ZVc2Vyc0tleXMubGVuZ3RofSB1c2VycyAoJHt0aGlzLnN0dWRlbnRzTGlzdC5sZW5ndGh9IHN0dWRlbnRzLCAke3RoaXMuYWR2aXNvcnNMaXN0Lmxlbmd0aH0gYWR2aXNvcnMsICR7dGhpcy5hZG1pbnNMaXN0Lmxlbmd0aH0gYWRtaW5zKWBcbiAgICB9XG5cbiAgICByZW5kZXJMTFQodW5peCkge1xuICAgICAgICByZXR1cm4gbW9tZW50KHVuaXgpLmZvcm1hdCgnTExMJyk7XG4gICAgfVxuXG4gICAgZ2V0U2luZ2xlVXNlcih1c2VySWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLnVzZXJEYXRhU2VydmljZS5nZXRTaW5nbGVVc2VyKHVzZXJJZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5faWQgPT0gdGhpcy5zZWxlY3RlZFVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2luZ2xlIFVzZXI6ICcsIHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICAgICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
