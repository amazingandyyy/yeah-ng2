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
            providers: [auth_service_1.AuthService, socket_service_1.SocketService, service_service_1.ServiceService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, socket_service_1.SocketService, service_service_1.ServiceService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsSUFBTyxNQUFNLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFHbEMsNkJBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFDakUsZ0NBQStCLHVDQUF1QyxDQUFDLENBQUE7QUFDdkUsK0JBQThCLHNDQUFzQyxDQUFDLENBQUE7QUFVckU7SUFTSSwwQkFDWSxNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsTUFBcUIsRUFDckIsY0FBOEI7UUFIOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTjFDLFlBQU8sR0FBRyxTQUFTLENBQUM7SUFPaEIsQ0FBQztJQUVMLHVDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCw0Q0FBaUIsR0FBakIsVUFBa0IsS0FBVSxFQUFFLFFBQWdCO1FBQzFDLHNDQUFzQztRQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLFdB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LENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFVBQUMsSUFBSTtZQUNwRCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUF4SEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLEVBQUMsbUJBQW1CLENBQUM7WUFDekQsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBYSxFQUFFLGdDQUFjLENBQUM7U0FDMUQsQ0FBQzs7d0JBQUE7SUFtSEYsdUJBQUM7QUFBRCxDQWpIQSxBQWlIQyxJQUFBO0FBakhZLHdCQUFnQixtQkFpSDVCLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3R5cGVzL3VzZXInXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvc2VydmljZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNvY2tldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvc29ja2V0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1hY2NvdW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FjY291bnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi9kYXNoYm9hcmQuc3R5bGUuY3NzJywnYWNjb3VudC5zdHlsZS5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgU29ja2V0U2VydmljZSwgU2VydmljZVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3VudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBjdXJyZW50VXNlcjogVXNlcjtcbiAgICBlZGl0QUk6IGJvb2xlYW47XG4gICAgZWRpdEdJOiBib29sZWFuO1xuICAgIGVtYWlsRXJyb3I6IGJvb2xlYW47XG4gICAgc2VuZGluZzogYm9vbGVhbjtcbiAgICByb2xlTm90TWF0Y2hTZXJ2aWNlOiBib29sZWFuO1xuICAgIHNlcnZpY2UgPSAnc3R1ZGVudCc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc29ja2V0OiBTb2NrZXRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNlcnZpY2VQYWNrYWdlOiBTZXJ2aWNlU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBnZW5lcmF0ZVRpbWUodW5peCkge1xuICAgICAgICByZXR1cm4gbW9tZW50KHVuaXgpLmZvcm1hdCgnTExMJyk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEYXRlKHVuaXgpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudCh1bml4KS5mb3JtYXQoJ0xMJyk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VycmVudFVzZXIodmFsdWU6IGFueSwgY2FyZE5hbWU6IHN0cmluZykge1xuICAgICAgICAvLyBTZW5kIHVwZGF0ZWQgdXNlciBvYmplY3QgdG8gYmFja2VuZFxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnVwZGF0ZUN1cnJlbnRVc2VyKHZhbHVlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXMgPT4gaGFuZGxlUmVzcG9uc2UocmVzKSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2VyciBAdXBkYXRlVXNlcjogJywgZXJyKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlcykge1xuICAgICAgICAgICAgLy8gQWZ0ZXIgc2F2aW5nIHN1Y2Nlc3NmdWxseSBDbG9zZSB0aGUgc3BlY2lmaWMgY2FyZChmb3JtKVxuICAgICAgICAgICAgc2VsZltjYXJkTmFtZV0gPSAhKHNlbGZbY2FyZE5hbWVdKTtcbiAgICAgICAgICAgIHNlbGYuZ2V0Q3VycmVudFVzZXIoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRpdChjYXJkTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXNbY2FyZE5hbWVdID0gISh0aGlzW2NhcmROYW1lXSk7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICB9XG5cbiAgICBjaGVja1JvbGUocm9sZTogc3RyaW5nLCB1c2VyOiBVc2VyKSB7XG4gICAgICAgIC8vIHJvbGUgaXMgdGhlIHJlcXVpcmVkIHJvbGUgdG8gYWNjZXNzIHRoZSBjb250ZW50XG4gICAgICAgIC8vIFVzZXIncyByb2xlIG11c3QgaGF2ZSBoaWdoZXIgb3IgZXF1YWwgYXV0aG9yaXR5IHRvIHRoaXMgcm9sZVxuICAgICAgICBpZih1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5jaGVja0F1dGhvcml0eShyb2xlLCB1c2VyLnJvbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRFcnIoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnJvbGVOb3RNYXRjaFNlcnZpY2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWFpbEVycm9yID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkU2VydmljZShlbWFpbDogc3RyaW5nLCBzZXJ2aWNlOnN0cmluZykge1xuICAgICAgICBpZihlbWFpbCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXI6IHRoaXMuY3VycmVudFVzZXIsXG4gICAgICAgICAgICAgICAgdXNlclRvQWRkOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc2VuZGluZyA9IHRydWU7XG4gICAgICAgICAgICAvL0ZpbmQgdXNlciBieSBlbWFpbFxuXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJCeUVtYWlsKGVtYWlsKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdGhpcyB1c2VyIGhhcyB0aGUgcm9sZSBmb3IgdGhlIGludGVuZGVkIHNlcnZpY2VcbiAgICAgICAgICAgICAgICBpZih1c2VyLnJvbGUgPT09IHNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51c2VyVG9BZGQgPSB1c2VyO1xuICAgICAgICAgICAgICAgICAgICAvL0FkZCB1c2VyIHRvIHRoaXMgdXNlcidzIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUGFja2FnZS5jcmVhdGVTZXJ2aWNlKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZpY2UgY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yb2xlTm90TWF0Y2hTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmVtYWlsRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuc2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7ICAgXG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICB0aGlzLnNvY2tldC5zeW5jQnlJZCgndXNlcicsIHRoaXMuY3VycmVudFVzZXIuX2lkLCAodXNlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgndXNlcicsIHRoaXMuY3VycmVudFVzZXIuX2lkKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
