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
var moment = require('moment');
var index_1 = require('../../shared/services/index');
var MembersComponent = (function () {
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
exports.MembersComponent = MembersComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jb21wYW55L21lbWJlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFDL0QsSUFBTyxNQUFNLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFHbEMsc0JBQWdFLDZCQUE2QixDQUFDLENBQUE7QUFVOUY7SUFhSSwwQkFDWSxNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsaUJBQW9DLEVBQ3BDLGVBQWdDO1FBSGhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWhCcEMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRXRCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsb0JBQWUsR0FBRyxFQUFFLENBQUM7SUFPekIsQ0FBQztJQUVMLGtDQUFPLEdBQVA7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUNoRixTQUFTLENBQ1YsVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7UUFDM0IsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBTSxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFO2FBQy9CLFNBQVMsQ0FDVixVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBTSxLQUFLLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQUEsaUJBMkJDO1FBMUJHLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ2pDLE1BQU0sQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxTQUFTO29CQUNWLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtvQkFDbEQsS0FBSyxDQUFDO2dCQUNWLEtBQUssU0FBUztvQkFDVixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7b0JBQ2xELEtBQUssQ0FBQztnQkFDVixLQUFLLE9BQU87b0JBQ1IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO29CQUNoRCxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxZQUFZO29CQUNiLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtvQkFDckQsS0FBSyxDQUFDO2dCQUNWLEtBQUssWUFBWTtvQkFDYixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7b0JBQ3JELEtBQUssQ0FBQztZQUNkLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxZQUFVLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLGdCQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxtQkFBYyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sbUJBQWMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLGlCQUFZLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxzQkFBaUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLGtCQUFlLENBQUE7SUFDaFEsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxNQUFjO1FBQTVCLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2FBQ3JDLFNBQVMsQ0FDVixVQUFBLElBQUk7WUFDQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFNLEtBQUssQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBMUdMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ2hDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1lBQy9CLFNBQVMsRUFBRSxDQUFDLG1CQUFXLEVBQUUseUJBQWlCLEVBQUUsdUJBQWUsQ0FBQztTQUMvRCxDQUFDOzt3QkFBQTtJQW9HRix1QkFBQztBQUFELENBbkdBLEFBbUdDLElBQUE7QUFuR1ksd0JBQWdCLG1CQW1HNUIsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvY29tcGFueS9tZW1iZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcy91c2VyJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIFN1cGVyYWRtaW5TZXJ2aWNlLCBVc2VyRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1tZW1iZXJzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ21lbWJlcnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydjb21wYW55LnN0eWxlLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFN1cGVyYWRtaW5TZXJ2aWNlLCBVc2VyRGF0YVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE1lbWJlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgY3VycmVudFVzZXIgPSB7fTtcbiAgICBwcml2YXRlIHVzZXJEYXRhTGlzdCA9IHt9O1xuICAgIHByaXZhdGUgYXJyYXlPZlVzZXJzS2V5cyA9IFtdO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRVc2VySWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHNlbGVjdGVkVXNlciA9IHt9O1xuXG4gICAgcHJpdmF0ZSBzdHVkZW50c0xpc3QgPSBbXTtcbiAgICBwcml2YXRlIGFkdmlzb3JzTGlzdCA9IFtdO1xuICAgIHByaXZhdGUgYWRtaW5zTGlzdCA9IFtdO1xuICAgIHByaXZhdGUgc3VwZXJ2aXNvcnNMaXN0ID0gW107XG4gICAgcHJpdmF0ZSBzdXBlcmFkbWluc0xpc3QgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzdXBlcmFkbWluU2VydmljZTogU3VwZXJhZG1pblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXNlckRhdGFTZXJ2aWNlOiBVc2VyRGF0YVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgZ2V0VXNlcigpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSkuX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMoKSB7XG4gICAgICAgIHRoaXMuc3VwZXJhZG1pblNlcnZpY2UuZ2V0QWxsVXNlcnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXJzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWxsIFVzZXJzOiAnLCB1c2Vycyk7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YUxpc3QgPSB1c2VycztcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5T2ZVc2Vyc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLnVzZXJEYXRhTGlzdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93U3VtbWFyeSgpIHtcbiAgICAgICAgdGhpcy5zdHVkZW50c0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5hZHZpc29yc0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5hZG1pbnNMaXN0ID0gW107XG4gICAgICAgIHRoaXMuc3VwZXJ2aXNvcnNMaXN0ID0gW107XG4gICAgICAgIHRoaXMuc3VwZXJhZG1pbnNMaXN0ID0gW107XG5cbiAgICAgICAgdGhpcy5hcnJheU9mVXNlcnNLZXlzLmZvckVhY2godXNlcktleSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMudXNlckRhdGFMaXN0W3VzZXJLZXldLnJvbGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdHVkZW50JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50c0xpc3QucHVzaCh0aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWR2aXNvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWR2aXNvcnNMaXN0LnB1c2godGhpcy51c2VyRGF0YUxpc3RbdXNlcktleV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FkbWluJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZG1pbnNMaXN0LnB1c2godGhpcy51c2VyRGF0YUxpc3RbdXNlcktleV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N1cGVydmlzb3InOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cGVydmlzb3JzTGlzdC5wdXNoKHRoaXMudXNlckRhdGFMaXN0W3VzZXJLZXldKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzdXBlcmFkbWluJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXBlcmFkbWluc0xpc3QucHVzaCh0aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBgVG90YWw6ICR7dGhpcy5hcnJheU9mVXNlcnNLZXlzLmxlbmd0aH0gdXNlcnMgKCR7dGhpcy5zdHVkZW50c0xpc3QubGVuZ3RofSBzdHVkZW50cywgJHt0aGlzLmFkdmlzb3JzTGlzdC5sZW5ndGh9IGFkdmlzb3JzLCAke3RoaXMuYWRtaW5zTGlzdC5sZW5ndGh9IGFkbWlucywgJHt0aGlzLnN1cGVydmlzb3JzTGlzdC5sZW5ndGh9IHN1cGVydmlzb3JzLCAke3RoaXMuc3VwZXJhZG1pbnNMaXN0Lmxlbmd0aH0gc3VwZXJhZG1pbnMpYFxuICAgIH1cblxuICAgIHJlbmRlckxMVCh1bml4KSB7XG4gICAgICAgIHJldHVybiBtb21lbnQodW5peCkuZm9ybWF0KCdMTEwnKTtcbiAgICB9XG5cbiAgICBnZXRTaW5nbGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMudXNlckRhdGFTZXJ2aWNlLmdldFNpbmdsZVVzZXIodXNlcklkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLl9pZCA9PSB0aGlzLnNlbGVjdGVkVXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaW5nbGUgVXNlcjogJywgdXNlcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICAgICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgICAgIHRoaXMuZ2V0VXNlcnMoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
