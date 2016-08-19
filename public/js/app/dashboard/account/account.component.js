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
var auth_service_1 = require('../../shared/services/auth.service');
var service_service_1 = require('../../shared/services/service.service');
var socket_service_1 = require('../../shared/services/socket.service');
var AccountComponent = (function () {
    function AccountComponent(router, authService, socket, servicePackage) {
        this.router = router;
        this.authService = authService;
        this.socket = socket;
        this.servicePackage = servicePackage;
        this.service = 'student';
    }
    AccountComponent.prototype.generateTime = function (unix) {
        return moment(unix).format('LLL');
    };
    AccountComponent.prototype.generateDate = function (unix) {
        return moment(unix).format('LL');
    };
    AccountComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(function (user) {
            console.log(user);
            _this.currentUser = user;
        }, function (error) {
            _this.authService.logUserOut();
            console.log(error);
        });
    };
    AccountComponent.prototype.updateCurrentUser = function (value, cardName) {
        // Send updated user object to backend
        var self = this;
        this.authService.updateCurrentUser(value)
            .subscribe(function (res) { return handleResponse(res); }, function (err) { return console.log('err @updateUser: ', err); });
        function handleResponse(res) {
            // After saving successfully Close the specific card(form)
            self[cardName] = !(self[cardName]);
        }
    };
    AccountComponent.prototype.edit = function (cardName) {
        this[cardName] = !(this[cardName]);
        this.getCurrentUser();
    };
    AccountComponent.prototype.checkRole = function (role, user) {
        // role is the required role to access the content
        // User's role must have higher or equal authority to this role
        if (user) {
            return this.authService.checkAuthority(role, user.role);
        }
        else {
            return false;
        }
    };
    AccountComponent.prototype.resetErr = function (event) {
        this.roleNotMatchService = false;
        this.emailError = false;
    };
    AccountComponent.prototype.addService = function (email, service) {
        var _this = this;
        if (email) {
            var data_1 = {
                currentUser: this.currentUser,
                userToAdd: {}
            };
            var self_1 = this;
            this.sending = true;
            //Find user by email
            this.authService.getUserByEmail(email)
                .subscribe(function (user) {
                //Check if this user has the role for the intended service
                if (user.role === service) {
                    data_1.userToAdd = user;
                    //Add user to this user's service
                    _this.servicePackage.createService(data_1)
                        .subscribe(function (user) {
                        console.log('service created');
                        self_1.sending = false;
                    }, function (error) {
                        console.log(error);
                    });
                }
                else {
                    self_1.roleNotMatchService = true;
                    self_1.sending = false;
                }
            }, function (error) {
                self_1.emailError = true;
                self_1.sending = false;
            });
        }
    };
    AccountComponent.prototype.ngOnInit = function () {
        var self = this;
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getCurrentUser();
        this.socket.syncById('user', this.currentUser._id, function (user) {
            self.currentUser = user;
        });
    };
    AccountComponent.prototype.ngOnDestroy = function () {
        this.socket.unsyncById('user', this.currentUser._id);
    };
    AccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'yeah-account',
            templateUrl: 'account.component.html',
            styleUrls: ['account.style.css'],
            providers: [auth_service_1.AuthService, socket_service_1.SocketService, service_service_1.ServiceService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, socket_service_1.SocketService, service_service_1.ServiceService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsSUFBTyxNQUFNLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFHbEMsNkJBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFDakUsZ0NBQStCLHVDQUF1QyxDQUFDLENBQUE7QUFDdkUsK0JBQThCLHNDQUFzQyxDQUFDLENBQUE7QUFVckU7SUFTSSwwQkFDWSxNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsTUFBcUIsRUFDckIsY0FBOEI7UUFIOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTjFDLFlBQU8sR0FBRyxTQUFTLENBQUM7SUFPaEIsQ0FBQztJQUVMLHVDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUNoRixTQUFTLENBQ1YsVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVsQixLQUFJLENBQUMs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QkFBZ0IsbUJBNEg1QixDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcy91c2VyJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3NlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3llYWgtYWNjb3VudCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhY2NvdW50LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnYWNjb3VudC5zdHlsZS5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgU29ja2V0U2VydmljZSwgU2VydmljZVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3VudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBjdXJyZW50VXNlcjogVXNlcjtcbiAgICBlZGl0QUk6IGJvb2xlYW47XG4gICAgZWRpdEdJOiBib29sZWFuO1xuICAgIGVtYWlsRXJyb3I6IGJvb2xlYW47XG4gICAgc2VuZGluZzogYm9vbGVhbjtcbiAgICByb2xlTm90TWF0Y2hTZXJ2aWNlOiBib29sZWFuO1xuICAgIHNlcnZpY2UgPSAnc3R1ZGVudCc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc29ja2V0OiBTb2NrZXRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNlcnZpY2VQYWNrYWdlOiBTZXJ2aWNlU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBnZW5lcmF0ZVRpbWUodW5peCkge1xuICAgICAgICByZXR1cm4gbW9tZW50KHVuaXgpLmZvcm1hdCgnTExMJyk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEYXRlKHVuaXgpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudCh1bml4KS5mb3JtYXQoJ0xMJyk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpLl9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnRVc2VyKHZhbHVlOiBhbnksIGNhcmROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gU2VuZCB1cGRhdGVkIHVzZXIgb2JqZWN0IHRvIGJhY2tlbmRcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS51cGRhdGVDdXJyZW50VXNlcih2YWx1ZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IGhhbmRsZVJlc3BvbnNlKHJlcyksXG4gICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnIgQHVwZGF0ZVVzZXI6ICcsIGVycilcbiAgICAgICAgICAgIClcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXMpIHtcbiAgICAgICAgICAgIC8vIEFmdGVyIHNhdmluZyBzdWNjZXNzZnVsbHkgQ2xvc2UgdGhlIHNwZWNpZmljIGNhcmQoZm9ybSlcbiAgICAgICAgICAgIHNlbGZbY2FyZE5hbWVdID0gIShzZWxmW2NhcmROYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0KGNhcmROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpc1tjYXJkTmFtZV0gPSAhKHRoaXNbY2FyZE5hbWVdKTtcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50VXNlcigpO1xuICAgIH1cblxuICAgIGNoZWNrUm9sZShyb2xlOiBzdHJpbmcsIHVzZXI6IFVzZXIpIHtcbiAgICAgICAgLy8gcm9sZSBpcyB0aGUgcmVxdWlyZWQgcm9sZSB0byBhY2Nlc3MgdGhlIGNvbnRlbnRcbiAgICAgICAgLy8gVXNlcidzIHJvbGUgbXVzdCBoYXZlIGhpZ2hlciBvciBlcXVhbCBhdXRob3JpdHkgdG8gdGhpcyByb2xlXG4gICAgICAgIGlmKHVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmNoZWNrQXV0aG9yaXR5KHJvbGUsIHVzZXIucm9sZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldEVycihldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMucm9sZU5vdE1hdGNoU2VydmljZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRTZXJ2aWNlKGVtYWlsOiBzdHJpbmcsIHNlcnZpY2U6c3RyaW5nKSB7XG4gICAgICAgIGlmKGVtYWlsKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlcjogdGhpcy5jdXJyZW50VXNlcixcbiAgICAgICAgICAgICAgICB1c2VyVG9BZGQ6IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vRmluZCB1c2VyIGJ5IGVtYWlsXG5cbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlckJ5RW1haWwoZW1haWwpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgLy9DaGVjayBpZiB0aGlzIHVzZXIgaGFzIHRoZSByb2xlIGZvciB0aGUgaW50ZW5kZWQgc2VydmljZVxuICAgICAgICAgICAgICAgIGlmKHVzZXIucm9sZSA9PT0gc2VydmljZSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnVzZXJUb0FkZCA9IHVzZXI7XG4gICAgICAgICAgICAgICAgICAgIC8vQWRkIHVzZXIgdG8gdGhpcyB1c2VyJ3Mgc2VydmljZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VQYWNrYWdlLmNyZWF0ZVNlcnZpY2UoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VydmljZSBjcmVhdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJvbGVOb3RNYXRjaFNlcnZpY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZW1haWxFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VsZi5zZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTsgICBcbiAgICAgICAgfSAgIFxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuc3luY0J5SWQoJ3VzZXInLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50VXNlciA9IHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnNvY2tldC51bnN5bmNCeUlkKCd1c2VyJywgdGhpcy5jdXJyZW50VXNlci5faWQpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
