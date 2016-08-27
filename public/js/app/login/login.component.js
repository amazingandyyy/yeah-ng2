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
var auth_service_1 = require('../shared/services/auth.service');
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.onSubmit = function (auth) {
        var self = this;
        this.authService.logUserIn(auth)
            .subscribe(function (res) { return handleResponse(res); }, function (err) { return console.log('err when logUserIn: ', err); });
        function handleResponse(res) {
            localStorage.setItem('id_token', JSON.stringify(res.token));
            localStorage.setItem('current_user', JSON.stringify(res.user));
            self.router.navigate(['dashboard/services']);
        }
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'yeah-login',
            templateUrl: 'login.component.html',
            providers: [auth_service_1.AuthService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRzVELDZCQUE0QixpQ0FBaUMsQ0FBQyxDQUFBO0FBUzlEO0lBQ0Msd0JBQ2UsV0FBd0IsRUFDeEIsTUFBYztRQURkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEIsQ0FBQztJQUVWLGlDQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ1osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUMzQixTQUFTLENBQ04sVUFBQSxHQUFHLElBQUksT0FBQSxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQW5CLENBQW1CLEVBQzFCLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsRUFBeEMsQ0FBd0MsQ0FDbEQsQ0FBQTtRQUVMLHdCQUF3QixHQUFHO1lBQ3ZCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtRQUNoRCxDQUFDO0lBQ0wsQ0FBQztJQUVKLGlDQUFRLEdBQVIsY0FBWSxDQUFDO0lBNUJkO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7U0FDbEMsQ0FBQzs7c0JBQUE7SUF1QkYscUJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLHNCQUFjLGlCQXNCMUIsQ0FBQSIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvYXV0aCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICd5ZWFoLWxvZ2luJyxcblx0dGVtcGxhdGVVcmw6ICdsb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICAgICAgKXt9XG4gICAgICAgIFxuXHRvblN1Ym1pdChhdXRoOiBBdXRoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VySW4oYXV0aClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IGhhbmRsZVJlc3BvbnNlKHJlcyksXG4gICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnIgd2hlbiBsb2dVc2VySW46ICcsIGVycilcbiAgICAgICAgICAgIClcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXMpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIEpTT04uc3RyaW5naWZ5KHJlcy50b2tlbikpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KHJlcy51c2VyKSk7XG4gICAgICAgICAgICBzZWxmLnJvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZC9zZXJ2aWNlcyddKVxuICAgICAgICB9XG4gICAgfVxuXG5cdG5nT25Jbml0KCkge31cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
