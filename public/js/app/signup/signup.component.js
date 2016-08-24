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
var SignupComponent = (function () {
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
            self.router.navigate(['dashboard/account']);
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
            selector: 'yeah-signup',
            templateUrl: 'signup.component.html',
            providers: [auth_service_1.AuthService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBELGlCQUFpQixDQUFDLENBQUE7QUFHNUUsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFXOUQ7SUFTSSx5QkFDUyxNQUFjLEVBQ2IsS0FBcUIsRUFDckIsV0FBd0I7UUFGekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNiLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQzlCLENBQUM7SUFFTCxrQ0FBUSxHQUFSLFVBQVMsUUFBZ0I7UUFDdkIsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVBLG9DQUFVLEdBQVYsVUFBVyxRQUFnQjtRQUN6QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxJQUFVLEVBQUUsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsOENBQThDO1FBQzlDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixrREFBa0Q7WUFDaEQs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QUssQ0FBQztnQkFDVixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztZQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUF4SEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNsQyxDQUFDOzt1QkFBQTtJQW1IRixzQkFBQztBQUFELENBakhBLEFBaUhDLElBQUE7QUFqSFksdUJBQWUsa0JBaUgzQixDQUFBIiwiZmlsZSI6InNpZ251cC9zaWdudXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzL2F1dGgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1zaWdudXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2lnbnVwLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0ICBwcml2YXRlIHNlbGVjdGVkUm9sZTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgcHJpdmF0ZSByb2xlQ2g6IHN0cmluZztcbiAgICBwcml2YXRlIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcHdNc2dTdWNjZXNzOiBib29sZWFuO1xuICAgIHByaXZhdGUgcHdNc2dGYWlsOiBib29sZWFuO1xuICAgIHByaXZhdGUgbG9nTWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgXHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBnb1RvRm9ybShzZWxlY3RlZDogc3RyaW5nKSB7XG4gICAgICAvLyByb3V0ZSB0byAjL3NpZ251cC86cGFyYW1zXG4gICAgICB0aGlzLmNvbmZpcm1QYXNzd29yZCA9IG51bGw7XG4gICAgICB0aGlzLnB3TXNnU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5wd01zZ0ZhaWwgPSBmYWxzZTtcbiAgICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NpZ251cCcsIHNlbGVjdGVkXSk7XG4gIFx0fVxuXG4gICAgY2hlY2tTdHlsZShzZWxlY3RlZDogc3RyaW5nKSB7XG4gICAgICBpZih0aGlzLnNlbGVjdGVkUm9sZSA9PT0gc2VsZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2hlY2tQdyhhdXRoOiBBdXRoLCBjb25maXJtUHc6IHN0cmluZykge1xuICAgICAgdGhpcy5wd01zZ1N1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMucHdNc2dGYWlsID0gZmFsc2U7XG4gICAgICAvL09ubHkgY2hlY2sgaWYgdGhlcmUncyBwdyBhbmQgaGFzIHNhbWUgbGVuZ3RoXG4gICAgICBpZihhdXRoLnBhc3N3b3JkICYmIGNvbmZpcm1Qdykge1xuICAgICAgICAvLyBpZihhdXRoLnBhc3N3b3JkLmxlbmd0aCA9PT0gY29uZmlybVB3Lmxlbmd0aCkge1xuICAgICAgICAgIGlmKGF1dGgucGFzc3dvcmQgPT09IGNvbmZpcm1Qdykge1xuICAgICAgICAgICAgLy9MZXQgdXNlciBrbm93IHRoYXQgdGhlIHB3IG1hdGNoZXNcbiAgICAgICAgICAgIHRoaXMucHdNc2dTdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL0xldCB1c2VyIGtub3cgdGhhdCB0aGUgcHcgZG9lc24ndCBtYXRjaFxuICAgICAgICAgICAgdGhpcy5wd01zZ0ZhaWwgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0KGF1dGg6IEF1dGgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgLy9QVyBjaGVja2luZ1xuICAgICAgaWYoYXV0aC5wYXNzd29yZCA9PT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgLy9Eb24ndCBzZW5kIGNvbmZpcm0gcGFzc3dvcmQgdG8gdGhlIGJhY2tlbmRcbiAgICAgICAgZGVsZXRlIGF1dGguY29uZmlybVBhc3N3b3JkO1xuICAgICAgICBhdXRoLnJvbGUgPSB0aGlzLnNlbGVjdGVkUm9sZTtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWduVXAoYXV0aClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gaGFuZGxlUmVzcG9uc2UocmVzKSxcbiAgICAgICAgICAgIGVyciA9PiBoYW5kbGVFcnJvcihlcnIpXG4gICAgICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgSlNPTi5zdHJpbmdpZnkocmVzLnRva2VuKSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KHJlcy51c2VyKSk7XG4gICAgICAgICAgc2VsZi5yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQvYWNjb3VudCddKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyKSB7XG4gICAgICAgIGlmKGVyci5zdGF0dXNUZXh0ID09PSAnQ29uZmxpY3QnKSB7XG4gICAgICAgICAgLy9MZXQgdXNlciBrbm93IHRoaXMgZW1haWwgYWxyZWFkeSBleGlzdFxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGVtYWlsIGFscmVhZHkgZXhpc3QnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIC8vIHNlbGYubG9nTWVzc2FnZSA9IEpTT04ucGFyc2UoZXJyLl9ib2R5KS5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0vL0VuZCBvZiBvbiBzdWJtaXRcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFJvbGUgPSB1bmRlZmluZWQ7XG4gICAgICBpZih0aGlzLnJvdXRlKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAucGFyYW1zXG4gICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUm9sZSA9IHBhcmFtc1sncm9sZSddO1xuICAgICAgICAgIHN3aXRjaCh0aGlzLnNlbGVjdGVkUm9sZSkge1xuICAgICAgICAgICAgY2FzZSAnc3R1ZGVudCc6XG4gICAgICAgICAgICAgIHRoaXMucm9sZUNoID0gJ1N0dWRlbnQnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Fkdmlzb3InOlxuICAgICAgICAgICAgICB0aGlzLnJvbGVDaCA9ICdBZHZpc29yJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdXBlcnZpc29yJzpcbiAgICAgICAgICAgICAgdGhpcy5yb2xlQ2ggPSAnU3VwZXJ2aXNvcic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRtaW4nOlxuICAgICAgICAgICAgICB0aGlzLnJvbGVDaCA9ICdBZG1pbic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3VwZXJhZG1pbic6XG4gICAgICAgICAgICAgIHRoaXMucm9sZUNoID0gJ1N1cGVyYWRtaW4nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgaWYodGhpcy5zdWIpe1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH1cbn0gIFxuXHQiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
