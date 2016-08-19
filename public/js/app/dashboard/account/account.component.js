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
            styleUrls: ['../dashboard.style.css', 'account.style.css'],
            providers: [auth_service_1.AuthService, socket_service_1.SocketService, service_service_1.ServiceService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, socket_service_1.SocketService, service_service_1.ServiceService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsSUFBTyxNQUFNLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFHbEMsNkJBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFDakUsZ0NBQStCLHVDQUF1QyxDQUFDLENBQUE7QUFDdkUsK0JBQThCLHNDQUFzQyxDQUFDLENBQUE7QUFVckU7SUFTSSwwQkFDWSxNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsTUFBcUIsRUFDckIsY0FBOEI7UUFIOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTjFDLFlBQU8sR0FBRyxTQUFTLENBQUM7SUFPaEIsQ0FBQztJQUVMLHVDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUNoRixTQUFTLENBQ1YsVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVsQixLQUFJLENBQUMs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SUFBQTtBQTVIWSx3QkFBZ0IsbUJBNEg1QixDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcy91c2VyJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3NlcnZpY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3llYWgtYWNjb3VudCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhY2NvdW50LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vZGFzaGJvYXJkLnN0eWxlLmNzcycsJ2FjY291bnQuc3R5bGUuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIFNvY2tldFNlcnZpY2UsIFNlcnZpY2VTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFjY291bnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgY3VycmVudFVzZXI6IFVzZXI7XG4gICAgZWRpdEFJOiBib29sZWFuO1xuICAgIGVkaXRHSTogYm9vbGVhbjtcbiAgICBlbWFpbEVycm9yOiBib29sZWFuO1xuICAgIHNlbmRpbmc6IGJvb2xlYW47XG4gICAgcm9sZU5vdE1hdGNoU2VydmljZTogYm9vbGVhbjtcbiAgICBzZXJ2aWNlID0gJ3N0dWRlbnQnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNvY2tldDogU29ja2V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlUGFja2FnZTogU2VydmljZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgZ2VuZXJhdGVUaW1lKHVuaXgpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudCh1bml4KS5mb3JtYXQoJ0xMTCcpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGF0ZSh1bml4KSB7XG4gICAgICAgIHJldHVybiBtb21lbnQodW5peCkuZm9ybWF0KCdMTCcpO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKS5faWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW50VXNlcih2YWx1ZTogYW55LCBjYXJkTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIC8vIFNlbmQgdXBkYXRlZCB1c2VyIG9iamVjdCB0byBiYWNrZW5kXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UudXBkYXRlQ3VycmVudFVzZXIodmFsdWUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlcyA9PiBoYW5kbGVSZXNwb25zZShyZXMpLFxuICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZygnZXJyIEB1cGRhdGVVc2VyOiAnLCBlcnIpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzKSB7XG4gICAgICAgICAgICAvLyBBZnRlciBzYXZpbmcgc3VjY2Vzc2Z1bGx5IENsb3NlIHRoZSBzcGVjaWZpYyBjYXJkKGZvcm0pXG4gICAgICAgICAgICBzZWxmW2NhcmROYW1lXSA9ICEoc2VsZltjYXJkTmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRpdChjYXJkTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXNbY2FyZE5hbWVdID0gISh0aGlzW2NhcmROYW1lXSk7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICB9XG5cbiAgICBjaGVja1JvbGUocm9sZTogc3RyaW5nLCB1c2VyOiBVc2VyKSB7XG4gICAgICAgIC8vIHJvbGUgaXMgdGhlIHJlcXVpcmVkIHJvbGUgdG8gYWNjZXNzIHRoZSBjb250ZW50XG4gICAgICAgIC8vIFVzZXIncyByb2xlIG11c3QgaGF2ZSBoaWdoZXIgb3IgZXF1YWwgYXV0aG9yaXR5IHRvIHRoaXMgcm9sZVxuICAgICAgICBpZih1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5jaGVja0F1dGhvcml0eShyb2xlLCB1c2VyLnJvbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRFcnIoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnJvbGVOb3RNYXRjaFNlcnZpY2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkU2VydmljZShlbWFpbDogc3RyaW5nLCBzZXJ2aWNlOnN0cmluZykge1xuICAgICAgICBpZihlbWFpbCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXI6IHRoaXMuY3VycmVudFVzZXIsXG4gICAgICAgICAgICAgICAgdXNlclRvQWRkOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc2VuZGluZyA9IHRydWU7XG4gICAgICAgICAgICAvL0ZpbmQgdXNlciBieSBlbWFpbFxuXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJCeUVtYWlsKGVtYWlsKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdGhpcyB1c2VyIGhhcyB0aGUgcm9sZSBmb3IgdGhlIGludGVuZGVkIHNlcnZpY2VcbiAgICAgICAgICAgICAgICBpZih1c2VyLnJvbGUgPT09IHNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51c2VyVG9BZGQgPSB1c2VyO1xuICAgICAgICAgICAgICAgICAgICAvL0FkZCB1c2VyIHRvIHRoaXMgdXNlcidzIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUGFja2FnZS5jcmVhdGVTZXJ2aWNlKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZpY2UgY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yb2xlTm90TWF0Y2hTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmVtYWlsRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuc2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7ICAgXG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpO1xuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgIHRoaXMuc29ja2V0LnN5bmNCeUlkKCd1c2VyJywgdGhpcy5jdXJyZW50VXNlci5faWQsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFVzZXIgPSB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgndXNlcicsIHRoaXMuY3VycmVudFVzZXIuX2lkKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
