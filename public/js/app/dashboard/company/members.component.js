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
    var MembersComponent;
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
            MembersComponent = (function () {
                function MembersComponent(router, authService, superadminService, userDataService) {
                    this.router = router;
                    this.authService = authService;
                    this.superadminService = superadminService;
                    this.userDataService = userDataService;
                    this.currentUser = {};
                    this.userDataList = {};
                    this.arrayOfUsersKeys = [];
                    this.selectedUser = {};
                    this.studentsList = [];
                    this.advisorsList = [];
                    this.adminsList = [];
                    this.supervisorsList = [];
                    this.superadminsList = [];
                }
                MembersComponent.prototype.getUser = function () {
                    var _this = this;
                    this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
                        .subscribe(function (user) {
                        _this.currentUser = user;
                    }, function (error) {
                        _this.authService.logUserOut();
                        console.log(error);
                    });
                };
                MembersComponent.prototype.getUsers = function () {
                    var _this = this;
                    this.superadminService.getAllUsers()
                        .subscribe(function (users) {
                        console.log('All Users: ', users);
                        _this.userDataList = users;
                        _this.arrayOfUsersKeys = Object.keys(_this.userDataList);
                    }, function (error) {
                        _this.authService.logUserOut();
                        console.log(error);
                    });
                };
                MembersComponent.prototype.showSummary = function () {
                    var _this = this;
                    this.studentsList = [];
                    this.advisorsList = [];
                    this.adminsList = [];
                    this.supervisorsList = [];
                    this.superadminsList = [];
                    this.arrayOfUsersKeys.forEach(function (userKey) {
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
                            case 'supervisor':
                                _this.supervisorsList.push(_this.userDataList[userKey]);
                                break;
                            case 'superadmin':
                                _this.superadminsList.push(_this.userDataList[userKey]);
                                break;
                        }
                    });
                    return "Total: " + this.arrayOfUsersKeys.length + " users (" + this.studentsList.length + " students, " + this.advisorsList.length + " advisors, " + this.adminsList.length + " admins, " + this.supervisorsList.length + " supervisors, " + this.superadminsList.length + " superadmins)";
                };
                MembersComponent.prototype.renderLLT = function (unix) {
                    return moment(unix).format('LLL');
                };
                MembersComponent.prototype.getSingleUser = function (userId) {
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
                MembersComponent.prototype.ngOnInit = function () {
                    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
                    this.getUser();
                    this.getUsers();
                };
                MembersComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'yeah-members',
                        templateUrl: 'members.component.html',
                        styleUrls: ['company.style.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [index_1.AuthService, index_1.SuperadminService, index_1.UserDataService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, index_1.AuthService, index_1.SuperadminService, index_1.UserDataService])
                ], MembersComponent);
                return MembersComponent;
            }());
            exports_1("MembersComponent", MembersComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jb21wYW55L21lbWJlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBYUksMEJBQ1ksTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLGlCQUFvQyxFQUNwQyxlQUFnQztvQkFIaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtvQkFDcEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO29CQWhCcEMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ2pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO29CQUNsQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7b0JBRXRCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO29CQUVsQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsaUJBQVksR0FBRyxFQUFFLENBQUM7b0JBQ2xCLGVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ2hCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO29CQUNyQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztnQkFPekIsQ0FBQztnQkFFTCxrQ0FBTyxHQUFQO29CQUFBLGlCQVVDO29CQVRHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzt5QkFDaEYsU0FBUyxDQUNWLFVBQUEsSUFBSTt3QkFDQSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtvQkFDM0IsQ0FBQyxFQUNELFVBQUEsS0FBSzt3QkFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFNLEtBQUssQ0FBQyxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELG1DQUFRLEdBQVI7b0JBQUEsaUJBWUM7b0JBWEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRTt5QkFDL0IsU0FBUyxDQUNWLFVBQUEsS0FBSzt3QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDbEMsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7d0JBQzFCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDM0QsQ0FBQyxFQUNELFVBQUEsS0FBSzt3QkFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFNLEtBQUssQ0FBQyxDQUFBO29CQUMzQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELHNDQUFXLEdBQVg7b0JBQUEsaUJBMkJDO29CQTFCRyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7b0JBRTFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO3dCQUNqQyxNQUFNLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ3RDLEtBQUssU0FBUztnQ0FDVixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0NBQ2xELEtBQUssQ0FBQzs0QkFDVixLQUFLLFNBQVM7Z0NBQ1YsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO2dDQUNsRCxLQUFLLENBQUM7NEJBQ1YsS0FBSyxPQUFPO2dDQUNSLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtnQ0FDaEQsS0FBSyxDQUFDOzRCQUNWLEtBQUssWUFBWTtnQ0FDYixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0NBQ3JELEtBQUssQ0FBQzs0QkFDVixLQUFLLFlBQVk7Z0NBQ2IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO2dDQUNyRCxLQUFLLENBQUM7d0JBQ2QsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQTtvQkFDRixNQUFNLENBQUMsWUFBVSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxnQkFBVyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sbUJBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLG1CQUFjLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxpQkFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sc0JBQWlCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxrQkFBZSxDQUFBO2dCQUNoUSxDQUFDO2dCQUVELG9DQUFTLEdBQVQsVUFBVSxJQUFJO29CQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBYyxNQUFjO29CQUE1QixpQkFhQztvQkFaRyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO3lCQUNyQyxTQUFTLENBQ1YsVUFBQSxJQUFJO3dCQUNBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7NEJBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDOzRCQUNuQyxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt3QkFDN0IsQ0FBQztvQkFDTCxDQUFDLEVBQ0QsVUFBQSxLQUFLO3dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQU0sS0FBSyxDQUFDLENBQUE7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBRUQsbUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixDQUFDO2dCQTFHTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTt3QkFDbkIsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7d0JBQ3JDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNoQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMsbUJBQVcsRUFBRSx5QkFBaUIsRUFBRSx1QkFBZSxDQUFDO3FCQUMvRCxDQUFDOztvQ0FBQTtnQkFvR0YsdUJBQUM7WUFBRCxDQW5HQSxBQW1HQyxJQUFBO1lBbkdELCtDQW1HQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9jb21wYW55L21lbWJlcnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3R5cGVzL3VzZXInXG5pbXBvcnQgeyBBdXRoU2VydmljZSwgU3VwZXJhZG1pblNlcnZpY2UsIFVzZXJEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd5ZWFoLW1lbWJlcnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnbWVtYmVycy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2NvbXBhbnkuc3R5bGUuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgU3VwZXJhZG1pblNlcnZpY2UsIFVzZXJEYXRhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTWVtYmVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlciA9IHt9O1xuICAgIHByaXZhdGUgdXNlckRhdGFMaXN0ID0ge307XG4gICAgcHJpdmF0ZSBhcnJheU9mVXNlcnNLZXlzID0gW107XG4gICAgcHJpdmF0ZSBzZWxlY3RlZFVzZXJJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRVc2VyID0ge307XG5cbiAgICBwcml2YXRlIHN0dWRlbnRzTGlzdCA9IFtdO1xuICAgIHByaXZhdGUgYWR2aXNvcnNMaXN0ID0gW107XG4gICAgcHJpdmF0ZSBhZG1pbnNMaXN0ID0gW107XG4gICAgcHJpdmF0ZSBzdXBlcnZpc29yc0xpc3QgPSBbXTtcbiAgICBwcml2YXRlIHN1cGVyYWRtaW5zTGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHN1cGVyYWRtaW5TZXJ2aWNlOiBTdXBlcmFkbWluU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB1c2VyRGF0YVNlcnZpY2U6IFVzZXJEYXRhU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKS5faWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVc2VycygpIHtcbiAgICAgICAgdGhpcy5zdXBlcmFkbWluU2VydmljZS5nZXRBbGxVc2VycygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlcnMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbGwgVXNlcnM6ICcsIHVzZXJzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhTGlzdCA9IHVzZXJzO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlPZlVzZXJzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudXNlckRhdGFMaXN0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dTdW1tYXJ5KCkge1xuICAgICAgICB0aGlzLnN0dWRlbnRzTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmFkdmlzb3JzTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmFkbWluc0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zdXBlcnZpc29yc0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zdXBlcmFkbWluc0xpc3QgPSBbXTtcblxuICAgICAgICB0aGlzLmFycmF5T2ZVc2Vyc0tleXMuZm9yRWFjaCh1c2VyS2V5ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy51c2VyRGF0YUxpc3RbdXNlcktleV0ucm9sZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0dWRlbnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzTGlzdC5wdXNoKHRoaXMudXNlckRhdGFMaXN0W3VzZXJLZXldKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhZHZpc29yJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZpc29yc0xpc3QucHVzaCh0aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWRtaW4nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkbWluc0xpc3QucHVzaCh0aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3VwZXJ2aXNvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VwZXJ2aXNvcnNMaXN0LnB1c2godGhpcy51c2VyRGF0YUxpc3RbdXNlcktleV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N1cGVyYWRtaW4nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cGVyYWRtaW5zTGlzdC5wdXNoKHRoaXMudXNlckRhdGFMaXN0W3VzZXJLZXldKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGBUb3RhbDogJHt0aGlzLmFycmF5T2ZVc2Vyc0tleXMubGVuZ3RofSB1c2VycyAoJHt0aGlzLnN0dWRlbnRzTGlzdC5sZW5ndGh9IHN0dWRlbnRzLCAke3RoaXMuYWR2aXNvcnNMaXN0Lmxlbmd0aH0gYWR2aXNvcnMsICR7dGhpcy5hZG1pbnNMaXN0Lmxlbmd0aH0gYWRtaW5zLCAke3RoaXMuc3VwZXJ2aXNvcnNMaXN0Lmxlbmd0aH0gc3VwZXJ2aXNvcnMsICR7dGhpcy5zdXBlcmFkbWluc0xpc3QubGVuZ3RofSBzdXBlcmFkbWlucylgXG4gICAgfVxuXG4gICAgcmVuZGVyTExUKHVuaXgpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudCh1bml4KS5mb3JtYXQoJ0xMTCcpO1xuICAgIH1cblxuICAgIGdldFNpbmdsZVVzZXIodXNlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy51c2VyRGF0YVNlcnZpY2UuZ2V0U2luZ2xlVXNlcih1c2VySWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIuX2lkID09IHRoaXMuc2VsZWN0ZWRVc2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NpbmdsZSBVc2VyOiAnLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpO1xuICAgICAgICB0aGlzLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5nZXRVc2VycygpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
