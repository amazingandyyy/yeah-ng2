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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBELGlCQUFpQixDQUFDLENBQUE7QUFHNUUsNkJBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFXOUQ7SUFTSSx5QkFDUyxNQUFjLEVBQ2IsS0FBcUIsRUFDckIsV0FBd0I7UUFGekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNiLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQzlCLENBQUM7SUFFTCxrQ0FBUSxHQUFSLFVBQVMsUUFBZ0I7UUFDdkIsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVBLG9DQUFVLEdBQVYsVUFBVyxRQUFnQjtRQUN6QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxJQUFVLEVBQUUsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsOENBQThDO1FBQzlDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixrREFBa0Q7WUFDaEQs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LENBQUM7Z0JBQ1YsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7WUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBeEhMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7U0FDbEMsQ0FBQzs7dUJBQUE7SUFtSEYsc0JBQUM7QUFBRCxDQWpIQSxBQWlIQyxJQUFBO0FBakhZLHVCQUFlLGtCQWlIM0IsQ0FBQSIsImZpbGUiOiJzaWdudXAvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4uL3NoYXJlZC90eXBlcy9hdXRoJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3llYWgtc2lnbnVwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NpZ251cC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHQgIHByaXZhdGUgc2VsZWN0ZWRSb2xlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBwcml2YXRlIHJvbGVDaDogc3RyaW5nO1xuICAgIHByaXZhdGUgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwd01zZ1N1Y2Nlc3M6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBwd01zZ0ZhaWw6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBsb2dNZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICBcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIGdvVG9Gb3JtKHNlbGVjdGVkOiBzdHJpbmcpIHtcbiAgICAgIC8vIHJvdXRlIHRvICMvc2lnbnVwLzpwYXJhbXNcbiAgICAgIHRoaXMuY29uZmlybVBhc3N3b3JkID0gbnVsbDtcbiAgICAgIHRoaXMucHdNc2dTdWNjZXNzID0gZmFsc2U7XG4gICAgICB0aGlzLnB3TXNnRmFpbCA9IGZhbHNlO1xuICAgIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2lnbnVwJywgc2VsZWN0ZWRdKTtcbiAgXHR9XG5cbiAgICBjaGVja1N0eWxlKHNlbGVjdGVkOiBzdHJpbmcpIHtcbiAgICAgIGlmKHRoaXMuc2VsZWN0ZWRSb2xlID09PSBzZWxlY3RlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGVja1B3KGF1dGg6IEF1dGgsIGNvbmZpcm1Qdzogc3RyaW5nKSB7XG4gICAgICB0aGlzLnB3TXNnU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5wd01zZ0ZhaWwgPSBmYWxzZTtcbiAgICAgIC8vT25seSBjaGVjayBpZiB0aGVyZSdzIHB3IGFuZCBoYXMgc2FtZSBsZW5ndGhcbiAgICAgIGlmKGF1dGgucGFzc3dvcmQgJiYgY29uZmlybVB3KSB7XG4gICAgICAgIC8vIGlmKGF1dGgucGFzc3dvcmQubGVuZ3RoID09PSBjb25maXJtUHcubGVuZ3RoKSB7XG4gICAgICAgICAgaWYoYXV0aC5wYXNzd29yZCA9PT0gY29uZmlybVB3KSB7XG4gICAgICAgICAgICAvL0xldCB1c2VyIGtub3cgdGhhdCB0aGUgcHcgbWF0Y2hlc1xuICAgICAgICAgICAgdGhpcy5wd01zZ1N1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vTGV0IHVzZXIga25vdyB0aGF0IHRoZSBwdyBkb2Vzbid0IG1hdGNoXG4gICAgICAgICAgICB0aGlzLnB3TXNnRmFpbCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXQoYXV0aDogQXV0aCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAvL1BXIGNoZWNraW5nXG4gICAgICBpZihhdXRoLnBhc3N3b3JkID09PSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAvL0Rvbid0IHNlbmQgY29uZmlybSBwYXNzd29yZCB0byB0aGUgYmFja2VuZFxuICAgICAgICBkZWxldGUgYXV0aC5jb25maXJtUGFzc3dvcmQ7XG4gICAgICAgIGF1dGgucm9sZSA9IHRoaXMuc2VsZWN0ZWRSb2xlO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25VcChhdXRoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiBoYW5kbGVSZXNwb25zZShyZXMpLFxuICAgICAgICAgICAgZXJyID0+IGhhbmRsZUVycm9yKGVycilcbiAgICAgICAgICAgIClcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBKU09OLnN0cmluZ2lmeShyZXMudG9rZW4pKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudF91c2VyJywgSlNPTi5zdHJpbmdpZnkocmVzLnVzZXIpKTtcbiAgICAgICAgICBzZWxmLnJvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZCddKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyKSB7XG4gICAgICAgIGlmKGVyci5zdGF0dXNUZXh0ID09PSAnQ29uZmxpY3QnKSB7XG4gICAgICAgICAgLy9MZXQgdXNlciBrbm93IHRoaXMgZW1haWwgYWxyZWFkeSBleGlzdFxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGVtYWlsIGFscmVhZHkgZXhpc3QnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIC8vIHNlbGYubG9nTWVzc2FnZSA9IEpTT04ucGFyc2UoZXJyLl9ib2R5KS5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0vL0VuZCBvZiBvbiBzdWJtaXRcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFJvbGUgPSB1bmRlZmluZWQ7XG4gICAgICBpZih0aGlzLnJvdXRlKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZVxuICAgICAgICAucGFyYW1zXG4gICAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUm9sZSA9IHBhcmFtc1sncm9sZSddO1xuICAgICAgICAgIHN3aXRjaCh0aGlzLnNlbGVjdGVkUm9sZSkge1xuICAgICAgICAgICAgY2FzZSAnc3R1ZGVudCc6XG4gICAgICAgICAgICAgIHRoaXMucm9sZUNoID0gJ1N0dWRlbnQnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Fkdmlzb3InOlxuICAgICAgICAgICAgICB0aGlzLnJvbGVDaCA9ICdBZHZpc29yJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdXBlcnZpc29yJzpcbiAgICAgICAgICAgICAgdGhpcy5yb2xlQ2ggPSAnU3VwZXJ2aXNvcic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRtaW4nOlxuICAgICAgICAgICAgICB0aGlzLnJvbGVDaCA9ICdBZG1pbic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3VwZXJhZG1pbic6XG4gICAgICAgICAgICAgIHRoaXMucm9sZUNoID0gJ1N1cGVyYWRtaW4nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgaWYodGhpcy5zdWIpe1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH1cbn0gIFxuXHQiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
