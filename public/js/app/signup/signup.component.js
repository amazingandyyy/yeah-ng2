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
    var SignupComponent;
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
            SignupComponent = (function () {
                function SignupComponent(router, route, authService) {
                    this.router = router;
                    this.route = route;
                    this.authService = authService;
                }
                SignupComponent.prototype.goToForm = function (selected) {
                    // route to #/signup/:params
                    this.confirmPassword = null;
                    this.pwMsgSuccess = false;
                    this.pwMsgFail = false;
                    this.router.navigate(['/signup', selected]);
                };
                SignupComponent.prototype.checkStyle = function (selected) {
                    if (this.selectedRole === selected) {
                        return true;
                    }
                    return false;
                };
                SignupComponent.prototype.checkPw = function (auth, confirmPw) {
                    this.pwMsgSuccess = false;
                    this.pwMsgFail = false;
                    //Only check if there's pw and has same length
                    if (auth.password && confirmPw) {
                        // if(auth.password.length === confirmPw.length) {
                        if (auth.password === confirmPw) {
                            //Let user know that the pw matches
                            this.pwMsgSuccess = true;
                        }
                        else {
                            //Let user know that the pw doesn't match
                            this.pwMsgFail = true;
                        }
                    }
                };
                SignupComponent.prototype.onSubmit = function (auth) {
                    var self = this;
                    //PW checking
                    if (auth.password === this.confirmPassword) {
                        //Don't send confirm password to the backend
                        delete auth.confirmPassword;
                        auth.role = this.selectedRole;
                        this.authService.signUp(auth)
                            .subscribe(function (res) { return handleResponse(res); }, function (err) { return handleError(err); });
                    }
                    function handleResponse(res) {
                        console.log(res);
                        localStorage.setItem('id_token', JSON.stringify(res.token));
                        localStorage.setItem('current_user', JSON.stringify(res.user));
                        self.router.navigate(['dashboard']);
                    }
                    function handleError(err) {
                        if (err.statusText === 'Conflict') {
                            //Let user know this email already exist
                            console.log('this email already exist');
                            console.log(err);
                        }
                    }
                }; //End of on submit
                SignupComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.selectedRole = undefined;
                    if (this.route) {
                        this.sub = this.route
                            .params
                            .subscribe(function (params) {
                            _this.selectedRole = params['role'];
                            switch (_this.selectedRole) {
                                case 'student':
                                    _this.roleCh = 'Student';
                                    break;
                                case 'advisor':
                                    _this.roleCh = 'Advisor';
                                    break;
                                case 'supervisor':
                                    _this.roleCh = 'Supervisor';
                                    break;
                                case 'admin':
                                    _this.roleCh = 'Admin';
                                    break;
                                case 'superadmin':
                                    _this.roleCh = 'Superadmin';
                                    break;
                            }
                        });
                    }
                };
                SignupComponent.prototype.ngOnDestroy = function () {
                    if (this.sub) {
                        this.sub.unsubscribe();
                    }
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'signup',
                        templateUrl: 'signup.component.html',
                        styleUrls: ['../shared/scss/partial/auth.css'],
                        providers: [auth_service_1.AuthService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, auth_service_1.AuthService])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQVNJLHlCQUNTLE1BQWMsRUFDYixLQUFxQixFQUNyQixXQUF3QjtvQkFGekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFDYixVQUFLLEdBQUwsS0FBSyxDQUFnQjtvQkFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7Z0JBQzlCLENBQUM7Z0JBRUwsa0NBQVEsR0FBUixVQUFTLFFBQWdCO29CQUN2Qiw0QkFBNEI7b0JBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO29CQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBRUEsb0NBQVUsR0FBVixVQUFXLFFBQWdCO29CQUN6QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2QsQ0FBQztvQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNmLENBQUM7Z0JBRUQsaUNBQU8sR0FBUCxVQUFRLElBQVUsRUFBRSxTQUFpQjtvQkFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2Qiw4Q0FBOEM7b0JBQzlDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsa0RBQWtEO3dCQUNoRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxD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O3dCQUNILENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxxQ0FBVyxHQUFYO29CQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO3dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3pCLENBQUM7Z0JBQ0gsQ0FBQztnQkF6SEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7d0JBQ25CLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsdUJBQXVCO3dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzt3QkFDOUMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQzt3QkFDeEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O21DQUFBO2dCQW1IRixzQkFBQztZQUFELENBakhBLEFBaUhDLElBQUE7WUFqSEQsNkNBaUhDLENBQUEiLCJmaWxlIjoic2lnbnVwL3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvYXV0aCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzaWdudXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2lnbnVwLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vc2hhcmVkL3Njc3MvcGFydGlhbC9hdXRoLmNzcyddLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0ICBwcml2YXRlIHNlbGVjdGVkUm9sZTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgcHJpdmF0ZSByb2xlQ2g6IHN0cmluZztcbiAgICBwcml2YXRlIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcHdNc2dTdWNjZXNzOiBib29sZWFuO1xuICAgIHByaXZhdGUgcHdNc2dGYWlsOiBib29sZWFuO1xuICAgIHByaXZhdGUgbG9nTWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgXHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBnb1RvRm9ybShzZWxlY3RlZDogc3RyaW5nKSB7XG4gICAgICAvLyByb3V0ZSB0byAjL3NpZ251cC86cGFyYW1zXG4gICAgICB0aGlzLmNvbmZpcm1QYXNzd29yZCA9IG51bGw7XG4gICAgICB0aGlzLnB3TXNnU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5wd01zZ0ZhaWwgPSBmYWxzZTtcbiAgICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NpZ251cCcsIHNlbGVjdGVkXSk7XG4gIFx0fVxuXG4gICAgY2hlY2tTdHlsZShzZWxlY3RlZDogc3RyaW5nKSB7XG4gICAgICBpZih0aGlzLnNlbGVjdGVkUm9sZSA9PT0gc2VsZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2hlY2tQdyhhdXRoOiBBdXRoLCBjb25maXJtUHc6IHN0cmluZykge1xuICAgICAgdGhpcy5wd01zZ1N1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMucHdNc2dGYWlsID0gZmFsc2U7XG4gICAgICAvL09ubHkgY2hlY2sgaWYgdGhlcmUncyBwdyBhbmQgaGFzIHNhbWUgbGVuZ3RoXG4gICAgICBpZihhdXRoLnBhc3N3b3JkICYmIGNvbmZpcm1Qdykge1xuICAgICAgICAvLyBpZihhdXRoLnBhc3N3b3JkLmxlbmd0aCA9PT0gY29uZmlybVB3Lmxlbmd0aCkge1xuICAgICAgICAgIGlmKGF1dGgucGFzc3dvcmQgPT09IGNvbmZpcm1Qdykge1xuICAgICAgICAgICAgLy9MZXQgdXNlciBrbm93IHRoYXQgdGhlIHB3IG1hdGNoZXNcbiAgICAgICAgICAgIHRoaXMucHdNc2dTdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL0xldCB1c2VyIGtub3cgdGhhdCB0aGUgcHcgZG9lc24ndCBtYXRjaFxuICAgICAgICAgICAgdGhpcy5wd01zZ0ZhaWwgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0KGF1dGg6IEF1dGgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgLy9QVyBjaGVja2luZ1xuICAgICAgaWYoYXV0aC5wYXNzd29yZCA9PT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgLy9Eb24ndCBzZW5kIGNvbmZpcm0gcGFzc3dvcmQgdG8gdGhlIGJhY2tlbmRcbiAgICAgICAgZGVsZXRlIGF1dGguY29uZmlybVBhc3N3b3JkO1xuICAgICAgICBhdXRoLnJvbGUgPSB0aGlzLnNlbGVjdGVkUm9sZTtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWduVXAoYXV0aClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gaGFuZGxlUmVzcG9uc2UocmVzKSxcbiAgICAgICAgICAgIGVyciA9PiBoYW5kbGVFcnJvcihlcnIpXG4gICAgICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgSlNPTi5zdHJpbmdpZnkocmVzLnRva2VuKSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KHJlcy51c2VyKSk7XG4gICAgICAgICAgc2VsZi5yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQnXSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycikge1xuICAgICAgICBpZihlcnIuc3RhdHVzVGV4dCA9PT0gJ0NvbmZsaWN0Jykge1xuICAgICAgICAgIC8vTGV0IHVzZXIga25vdyB0aGlzIGVtYWlsIGFscmVhZHkgZXhpc3RcbiAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBlbWFpbCBhbHJlYWR5IGV4aXN0Jyk7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAvLyBzZWxmLmxvZ01lc3NhZ2UgPSBKU09OLnBhcnNlKGVyci5fYm9keSkuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9Ly9FbmQgb2Ygb24gc3VibWl0XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb2xlID0gdW5kZWZpbmVkO1xuICAgICAgaWYodGhpcy5yb3V0ZSkge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgICAgLnBhcmFtc1xuICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJvbGUgPSBwYXJhbXNbJ3JvbGUnXTtcbiAgICAgICAgICBzd2l0Y2godGhpcy5zZWxlY3RlZFJvbGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0dWRlbnQnOlxuICAgICAgICAgICAgICB0aGlzLnJvbGVDaCA9ICdTdHVkZW50JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZHZpc29yJzpcbiAgICAgICAgICAgICAgdGhpcy5yb2xlQ2ggPSAnQWR2aXNvcic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3VwZXJ2aXNvcic6XG4gICAgICAgICAgICAgIHRoaXMucm9sZUNoID0gJ1N1cGVydmlzb3InO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkbWluJzpcbiAgICAgICAgICAgICAgdGhpcy5yb2xlQ2ggPSAnQWRtaW4nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N1cGVyYWRtaW4nOlxuICAgICAgICAgICAgICB0aGlzLnJvbGVDaCA9ICdTdXBlcmFkbWluJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgIGlmKHRoaXMuc3ViKXtcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9XG59ICBcblx0Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
