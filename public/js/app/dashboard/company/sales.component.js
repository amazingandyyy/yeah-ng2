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
var SalesComponent = (function () {
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
exports.SalesComponent = SalesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jb21wYW55L3NhbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9ELElBQU8sTUFBTSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBR2xDLHNCQUEyRCw2QkFBNkIsQ0FBQyxDQUFBO0FBVXpGO0lBV0ksd0JBQ1ksTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLGVBQWdDO1FBSGhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFkcEMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRXRCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFPcEIsQ0FBQztJQUVMLGdDQUFPLEdBQVA7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUNoRixTQUFTLENBQ1YsVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7UUFDM0IsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBTSxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMs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QUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQWhHTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNoQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixTQUFTLEVBQUUsQ0FBQyxtQkFBVyxFQUFFLG9CQUFZLEVBQUUsdUJBQWUsQ0FBQztTQUMxRCxDQUFDOztzQkFBQTtJQTBGRixxQkFBQztBQUFELENBekZBLEFBeUZDLElBQUE7QUF6Rlksc0JBQWMsaUJBeUYxQixDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9jb21wYW55L3NhbGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcy91c2VyJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIEFkbWluU2VydmljZSwgVXNlckRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3llYWgtc2FsZXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2FsZXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydjb21wYW55LnN0eWxlLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIEFkbWluU2VydmljZSwgVXNlckRhdGFTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTYWxlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlciA9IHt9O1xuICAgIHByaXZhdGUgdXNlckRhdGFMaXN0ID0ge307XG4gICAgcHJpdmF0ZSBhcnJheU9mVXNlcnNLZXlzID0gW107XG4gICAgcHJpdmF0ZSBzZWxlY3RlZFVzZXJJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRVc2VyID0ge307XG5cbiAgICBwcml2YXRlIHN0dWRlbnRzTGlzdCA9IFtdO1xuICAgIHByaXZhdGUgYWR2aXNvcnNMaXN0ID0gW107XG4gICAgcHJpdmF0ZSBhZG1pbnNMaXN0ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWRtaW5TZXJ2aWNlOiBBZG1pblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXNlckRhdGFTZXJ2aWNlOiBVc2VyRGF0YVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgZ2V0VXNlcigpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSkuX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMoKSB7XG4gICAgICAgIHRoaXMuYWRtaW5TZXJ2aWNlLmdldEFsbFVzZXJzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB1c2VycyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FsbCBVc2VyczogJywgdXNlcnMpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckRhdGFMaXN0ID0gdXNlcnM7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheU9mVXNlcnNLZXlzID0gT2JqZWN0LmtleXModXNlcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1N1bW1hcnkoKSB7XG4gICAgICAgIHRoaXMuc3R1ZGVudHNMaXN0ID0gW107XG4gICAgICAgIHRoaXMuYWR2aXNvcnNMaXN0ID0gW107XG4gICAgICAgIHRoaXMuYWRtaW5zTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmFycmF5T2ZVc2Vyc0tleXMuZm9yRWFjaCh1c2VyS2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJLZXksIHRoaXMudXNlckRhdGFMaXN0W3VzZXJLZXldKTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy51c2VyRGF0YUxpc3RbdXNlcktleV0ucm9sZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0dWRlbnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzTGlzdC5wdXNoKHRoaXMudXNlckRhdGFMaXN0W3VzZXJLZXldKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhZHZpc29yJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZpc29yc0xpc3QucHVzaCh0aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWRtaW4nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkbWluc0xpc3QucHVzaCh0aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBgVG90YWw6ICR7dGhpcy5hcnJheU9mVXNlcnNLZXlzLmxlbmd0aH0gdXNlcnMgKCR7dGhpcy5zdHVkZW50c0xpc3QubGVuZ3RofSBzdHVkZW50cywgJHt0aGlzLmFkdmlzb3JzTGlzdC5sZW5ndGh9IGFkdmlzb3JzLCAke3RoaXMuYWRtaW5zTGlzdC5sZW5ndGh9IGFkbWlucylgXG4gICAgfVxuXG4gICAgcmVuZGVyTExUKHVuaXgpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudCh1bml4KS5mb3JtYXQoJ0xMTCcpO1xuICAgIH1cblxuICAgIGdldFNpbmdsZVVzZXIodXNlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy51c2VyRGF0YVNlcnZpY2UuZ2V0U2luZ2xlVXNlcih1c2VySWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIuX2lkID09IHRoaXMuc2VsZWN0ZWRVc2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NpbmdsZSBVc2VyOiAnLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
