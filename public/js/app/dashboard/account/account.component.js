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
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    };
    AccountComponent.prototype.updateCurrentUser = function (value, cardName) {
        // Send updated user object to backend
        var self = this;
        this.authService.updateCurrentUser(value)
            .subscribe(function (res) { return handleResponse(res); }, function (err) { return console.log('err @updateUser: ', err); });
        function handleResponse(res) {
            // After saving successfully Close the specific card(form)
            self[cardName] = !(self[cardName]);
            self.getCurrentUser();
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
        var _this = this;
        this.getCurrentUser();
        this.socket.syncById('user', this.currentUser._id, function (user) {
            _this.getCurrentUser();
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
            styleUrls: ['../dashboard.style.css', 'account.style.css'],
            providers: [socket_service_1.SocketService, service_service_1.ServiceService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, socket_service_1.SocketService, service_service_1.ServiceService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsSUFBTyxNQUFNLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFHbEMsNkJBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFDakUsZ0NBQStCLHVDQUF1QyxDQUFDLENBQUE7QUFDdkUsK0JBQThCLHNDQUFzQyxDQUFDLENBQUE7QUFVckU7SUFTSSwwQkFDWSxNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsTUFBcUIsRUFDckIsY0FBOEI7UUFIOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTjFDLFlBQU8sR0FBRyxTQUFTLENBQUM7SUFPaEIsQ0FBQztJQUVMLHVDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCw0Q0FBaUIsR0FBakIsVUFBa0IsS0FBVSxFQUFFLFFBQWdCO1FBQzFDLHNDQUFzQztRQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLFdB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LENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFVBQUMsSUFBSTtZQUNwRCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUF4SEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLEVBQUMsbUJBQW1CLENBQUM7WUFDekQsU0FBUyxFQUFFLENBQUUsOEJBQWEsRUFBRSxnQ0FBYyxDQUFDO1NBQzlDLENBQUM7O3dCQUFBO0lBbUhGLHVCQUFDO0FBQUQsQ0FqSEEsQUFpSEMsSUFBQTtBQWpIWSx3QkFBZ0IsbUJBaUg1QixDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcy91c2VyJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3NlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3llYWgtYWNjb3VudCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhY2NvdW50LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vZGFzaGJvYXJkLnN0eWxlLmNzcycsJ2FjY291bnQuc3R5bGUuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbIFNvY2tldFNlcnZpY2UsIFNlcnZpY2VTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFjY291bnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgY3VycmVudFVzZXI6IFVzZXI7XG4gICAgZWRpdEFJOiBib29sZWFuO1xuICAgIGVkaXRHSTogYm9vbGVhbjtcbiAgICBlbWFpbEVycm9yOiBib29sZWFuO1xuICAgIHNlbmRpbmc6IGJvb2xlYW47XG4gICAgcm9sZU5vdE1hdGNoU2VydmljZTogYm9vbGVhbjtcbiAgICBzZXJ2aWNlID0gJ3N0dWRlbnQnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNvY2tldDogU29ja2V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlUGFja2FnZTogU2VydmljZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgZ2VuZXJhdGVUaW1lKHVuaXgpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudCh1bml4KS5mb3JtYXQoJ0xMTCcpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGF0ZSh1bml4KSB7XG4gICAgICAgIHJldHVybiBtb21lbnQodW5peCkuZm9ybWF0KCdMTCcpO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpO1xuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnRVc2VyKHZhbHVlOiBhbnksIGNhcmROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gU2VuZCB1cGRhdGVkIHVzZXIgb2JqZWN0IHRvIGJhY2tlbmRcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS51cGRhdGVDdXJyZW50VXNlcih2YWx1ZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IGhhbmRsZVJlc3BvbnNlKHJlcyksXG4gICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnIgQHVwZGF0ZVVzZXI6ICcsIGVycilcbiAgICAgICAgICAgIClcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXMpIHtcbiAgICAgICAgICAgIC8vIEFmdGVyIHNhdmluZyBzdWNjZXNzZnVsbHkgQ2xvc2UgdGhlIHNwZWNpZmljIGNhcmQoZm9ybSlcbiAgICAgICAgICAgIHNlbGZbY2FyZE5hbWVdID0gIShzZWxmW2NhcmROYW1lXSk7XG4gICAgICAgICAgICBzZWxmLmdldEN1cnJlbnRVc2VyKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkaXQoY2FyZE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzW2NhcmROYW1lXSA9ICEodGhpc1tjYXJkTmFtZV0pO1xuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgfVxuXG4gICAgY2hlY2tSb2xlKHJvbGU6IHN0cmluZywgdXNlcjogVXNlcikge1xuICAgICAgICAvLyByb2xlIGlzIHRoZSByZXF1aXJlZCByb2xlIHRvIGFjY2VzcyB0aGUgY29udGVudFxuICAgICAgICAvLyBVc2VyJ3Mgcm9sZSBtdXN0IGhhdmUgaGlnaGVyIG9yIGVxdWFsIGF1dGhvcml0eSB0byB0aGlzIHJvbGVcbiAgICAgICAgaWYodXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuY2hlY2tBdXRob3JpdHkocm9sZSwgdXNlci5yb2xlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0RXJyKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5yb2xlTm90TWF0Y2hTZXJ2aWNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1haWxFcnJvciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFkZFNlcnZpY2UoZW1haWw6IHN0cmluZywgc2VydmljZTpzdHJpbmcpIHtcbiAgICAgICAgaWYoZW1haWwpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB0aGlzLmN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgICAgIHVzZXJUb0FkZDoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnNlbmRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgLy9GaW5kIHVzZXIgYnkgZW1haWxcblxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyQnlFbWFpbChlbWFpbClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIHRoaXMgdXNlciBoYXMgdGhlIHJvbGUgZm9yIHRoZSBpbnRlbmRlZCBzZXJ2aWNlXG4gICAgICAgICAgICAgICAgaWYodXNlci5yb2xlID09PSBzZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudXNlclRvQWRkID0gdXNlcjtcbiAgICAgICAgICAgICAgICAgICAgLy9BZGQgdXNlciB0byB0aGlzIHVzZXIncyBzZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVBhY2thZ2UuY3JlYXRlU2VydmljZShkYXRhKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXJ2aWNlIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucm9sZU5vdE1hdGNoU2VydmljZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5lbWFpbEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pOyAgIFxuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuc3luY0J5SWQoJ3VzZXInLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCwgKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc29ja2V0LnVuc3luY0J5SWQoJ3VzZXInLCB0aGlzLmN1cnJlbnRVc2VyLl9pZCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
