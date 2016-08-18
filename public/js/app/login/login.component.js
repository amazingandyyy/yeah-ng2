System.register(['@angular/core', '@angular/router', '../shared/services/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1;
    var LoginComponent;
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
            }],
        execute: function() {
            LoginComponent = (function () {
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
                        self.router.navigate(['dashboard/pipe']);
                    }
                };
                LoginComponent.prototype.ngOnInit = function () { };
                LoginComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'yeah-login',
                        templateUrl: 'login.component.html',
                        styleUrls: ['../shared/scss/partial/auth.css'],
                        providers: [auth_service_1.AuthService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUNDLHdCQUNlLFdBQXdCLEVBQ3hCLE1BQWM7b0JBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7Z0JBQ3BCLENBQUM7Z0JBRVYsaUNBQVEsR0FBUixVQUFTLElBQVU7b0JBQ1osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7eUJBQzNCLFNBQVMsQ0FDTixVQUFBLEdBQUcsSUFBSSxPQUFBLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBbkIsQ0FBbUIsRUFDMUIsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxFQUF4QyxDQUF3QyxDQUNsRCxDQUFBO29CQUVMLHdCQUF3QixHQUFHO3dCQUN2QixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUM1RCxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtvQkFDNUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVKLGlDQUFRLEdBQVIsY0FBWSxDQUFDO2dCQTdCZDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTt3QkFDbkIsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO3dCQUMzQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3dCQUN4QixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQzs7a0NBQUE7Z0JBdUJGLHFCQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCwyQ0FzQkMsQ0FBQSIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvYXV0aCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICd5ZWFoLWxvZ2luJyxcblx0dGVtcGxhdGVVcmw6ICdsb2dpbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuLi9zaGFyZWQvc2Nzcy9wYXJ0aWFsL2F1dGguY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICAgICAgKXt9XG4gICAgICAgIFxuXHRvblN1Ym1pdChhdXRoOiBBdXRoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VySW4oYXV0aClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IGhhbmRsZVJlc3BvbnNlKHJlcyksXG4gICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnIgd2hlbiBsb2dVc2VySW46ICcsIGVycilcbiAgICAgICAgICAgIClcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXMpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIEpTT04uc3RyaW5naWZ5KHJlcy50b2tlbikpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KHJlcy51c2VyKSk7XG4gICAgICAgICAgICBzZWxmLnJvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZC9waXBlJ10pXG4gICAgICAgIH1cbiAgICB9XG5cblx0bmdPbkluaXQoKSB7fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
