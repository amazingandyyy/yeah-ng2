System.register(['@angular/core', '@angular/router', 'angular2-jwt'], function(exports_1, context_1) {
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
    var core_1, router_1, angular2_jwt_1;
    var LoginGuard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            LoginGuard = (function () {
                function LoginGuard(
                    // private authService: AuthService,
                    router) {
                    this.router = router;
                    this.jwtHelper = new angular2_jwt_1.JwtHelper();
                }
                LoginGuard.prototype.canActivate = function (route, state) {
                    var current_user = JSON.parse(localStorage.getItem('current_user'));
                    var token = JSON.parse(localStorage.getItem('id_token'));
                    if (token) {
                        if (!this.jwtHelper.isTokenExpired(token) && current_user) {
                            console.log('LoginGuard passed');
                            return true;
                        }
                    }
                    this.router.navigate(['/login']);
                    return false;
                };
                LoginGuard = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], LoginGuard);
                return LoginGuard;
            }());
            exports_1("LoginGuard", LoginGuard);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ndWFyZC9sb2dpbi1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQ0U7b0JBQ0Usb0NBQW9DO29CQUM1QixNQUFjO29CQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBR3hCLGNBQVMsR0FBYyxJQUFJLHdCQUFTLEVBQUUsQ0FBQztnQkFGbkMsQ0FBQztnQkFJTCxnQ0FBVyxHQUFYLFVBQVksS0FBNkIsRUFBRSxLQUEwQjtvQkFDbkUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7b0JBQ25FLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO29CQUV4RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQzs0QkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOzRCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNkLENBQUM7b0JBQ0gsQ0FBQztvQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2YsQ0FBQztnQkF0Qkg7b0JBQUMsaUJBQVUsRUFBRTs7OEJBQUE7Z0JBdUJiLGlCQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCxtQ0FzQkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvZ3VhcmQvbG9naW4tZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIFJvdXRlclN0YXRlU25hcHNob3QgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSAgICAgICAgICAgIGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBKd3RIZWxwZXIgfSAgICAgICAgICAgICAgZnJvbSAnYW5ndWxhcjItand0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7IH1cblxuICBqd3RIZWxwZXI6IEp3dEhlbHBlciA9IG5ldyBKd3RIZWxwZXIoKTtcblxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICB2YXIgY3VycmVudF91c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpXG4gICAgdmFyIHRva2VuID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSlcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgaWYgKCF0aGlzLmp3dEhlbHBlci5pc1Rva2VuRXhwaXJlZCh0b2tlbikgJiYgY3VycmVudF91c2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbkd1YXJkIHBhc3NlZCcpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
