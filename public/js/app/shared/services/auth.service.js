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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var angular2_jwt_1 = require('angular2-jwt');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
// Using auth service to keep track of users' login status across all component
var AuthService = (function () {
    function AuthService(http, authHttp, router) {
        this.http = http;
        this.authHttp = authHttp;
        this.router = router;
        this.currentUser = new Subject_1.Subject(); // the data will be updated
        this.userAbsorvable = this.currentUser.asObservable();
    }
    AuthService.prototype.getCurrentUser = function (userId) {
        return this.authHttp.get("/api/user/currentUser/" + userId)
            .map(this.handelResponse)
            .catch(this.handelError);
    };
    AuthService.prototype.resetCurrentUser = function (userId) {
        return this.authHttp.get("/api/user/currentUser/" + userId)
            .map(this.handelResponse)
            .catch(this.handelError);
    };
    AuthService.prototype.getCurrentUserDeeply = function (userId) {
        return this.authHttp.get("/api/user/currentUserDeeply/" + userId)
            .map(this.handelResponse)
            .catch(this.handelError);
    };
    AuthService.prototype.getUserByEmail = function (email) {
        return this.authHttp.get("/api/user/getUserByEmail/" + email)
            .map(function (res) { return res.json() || {}; })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    AuthService.prototype.signUp = function (data) {
        return this.http.post('/api/user/signup', data)
            .map(this.handelResponse)
            .catch(this.handelError);
    };
    AuthService.prototype.logUserIn = function (data) {
        return this.http.post('/api/user/login', data)
            .map(this.handelResponse)
            .catch(this.handelError);
    };
    AuthService.prototype.checkData = function (state, password) {
        var data = {
            state: state,
            password: password
        };
        return this.authHttp.post("/api/user/checkData", data)
            .map(function (res) {
            return res;
        })
            .catch(this.handelError);
    };
    AuthService.prototype.logUserOut = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('current_user');
        this.isLoggedIn = false;
        this.router.navigate(['/']);
        return 'logout';
    };
    AuthService.prototype.updateCurrentUser = function (data) {
        //Don't let this null password replace the backend password
        // but user can replace th3 backend password through email pw reset (-todo)
        if (data.password === null || data.password) {
            delete data.password;
        }
        return this.authHttp.post('/api/user/update', data)
            .map(this.handelResponse)
            .catch(this.handelError);
    };
    AuthService.prototype.checkAuthority = function (requiredRole, userRole) {
        var rolesArray = ['student', 'advisor', 'supervisor', 'admin', 'superadmin'];
        if (userRole) {
            if (rolesArray.indexOf(userRole) >= rolesArray.indexOf(requiredRole)) {
                return true;
            }
        }
        return false;
    };
    AuthService.prototype.handelResponse = function (res) {
        console.log('res: ', res);
        var data = res.json();
        this.isLoggedIn = true;
        this.currentUser = data;
        localStorage.setItem('current_user', JSON.stringify(data));
        return data || {};
    };
    AuthService.prototype.handelError = function (err) {
        console.log('err @authService: ', err);
        this.isLoggedIn = false;
        return Observable_1.Observable.throw(err);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsNkJBQXlCLGNBQWMsQ0FBQyxDQUFBO0FBQ3hDLHdCQUEyQixjQUFjLENBQUMsQ0FBQTtBQUUxQyxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBSy9CLCtFQUErRTtBQUUvRTtJQU1JLHFCQUNZLElBQVUsRUFDVixRQUFrQixFQUNsQixNQUFjO1FBRmQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5uQixnQkFBVyxHQUFHLElBQUksaUJBQU8sRUFBUSxDQUFDLENBQUMsMkJBQTJCO1FBQzlELG1CQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQU1wRCxDQUFDO0lBRUwsb0NBQWMsR0FBZCxVQUFlLE1BQU07UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDJCQUF5QixNQUFRLENBQUM7YUFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLE1BQU07UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFD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Q0FBQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEF1dGhIdHRwIH0gZnJvbSAnYW5ndWxhcjItand0JztcbmltcG9ydCB7IFN1YmplY3QgfSAgICBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi4vdHlwZXMvYXV0aCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdHlwZXMvdXNlcic7XG5cbi8vIFVzaW5nIGF1dGggc2VydmljZSB0byBrZWVwIHRyYWNrIG9mIHVzZXJzJyBsb2dpbiBzdGF0dXMgYWNyb3NzIGFsbCBjb21wb25lbnRcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgcHVibGljIGlzTG9nZ2VkSW46IGJvb2xlYW47XG4gICAgcHVibGljIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGN1cnJlbnRVc2VyID0gbmV3IFN1YmplY3Q8VXNlcj4oKTsgLy8gdGhlIGRhdGEgd2lsbCBiZSB1cGRhdGVkXG4gICAgcHVibGljIHVzZXJBYnNvcnZhYmxlID0gdGhpcy5jdXJyZW50VXNlci5hc09ic2VydmFibGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgIHByaXZhdGUgYXV0aEh0dHA6IEF1dGhIdHRwLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cblxuICAgIGdldEN1cnJlbnRVc2VyKHVzZXJJZCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9jdXJyZW50VXNlci8ke3VzZXJJZH1gKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgcmVzZXRDdXJyZW50VXNlcih1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KGAvYXBpL3VzZXIvY3VycmVudFVzZXIvJHt1c2VySWR9YClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGdldEN1cnJlbnRVc2VyRGVlcGx5KHVzZXJJZCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9jdXJyZW50VXNlckRlZXBseS8ke3VzZXJJZH1gKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgZ2V0VXNlckJ5RW1haWwoZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldChgL2FwaS91c2VyL2dldFVzZXJCeUVtYWlsLyR7ZW1haWx9YClcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkgfHwge30pXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PlxuICAgICAgICAgICAgICAgIE9ic2VydmFibGUudGhyb3coZXJyKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIHNpZ25VcChkYXRhOiBBdXRoKTogT2JzZXJ2YWJsZTxBdXRoPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS91c2VyL3NpZ251cCcsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBsb2dVc2VySW4oZGF0YTogQXV0aCk6IE9ic2VydmFibGU8QXV0aD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvdXNlci9sb2dpbicsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBjaGVja0RhdGEoc3RhdGU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8QXV0aD4ge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLnBvc3QoYC9hcGkvdXNlci9jaGVja0RhdGFgLCBkYXRhKVxuICAgICAgICAgICAgLm1hcChyZXM9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGxvZ1VzZXJPdXQoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50X3VzZXInKVxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pXG4gICAgICAgIHJldHVybiAnbG9nb3V0JztcbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW50VXNlcihkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAvL0Rvbid0IGxldCB0aGlzIG51bGwgcGFzc3dvcmQgcmVwbGFjZSB0aGUgYmFja2VuZCBwYXNzd29yZFxuICAgICAgICAvLyBidXQgdXNlciBjYW4gcmVwbGFjZSB0aDMgYmFja2VuZCBwYXNzd29yZCB0aHJvdWdoIGVtYWlsIHB3IHJlc2V0ICgtdG9kbylcbiAgICAgICAgaWYgKGRhdGEucGFzc3dvcmQgPT09IG51bGwgfHwgZGF0YS5wYXNzd29yZCkge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGEucGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5wb3N0KCcvYXBpL3VzZXIvdXBkYXRlJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGNoZWNrQXV0aG9yaXR5KHJlcXVpcmVkUm9sZTogc3RyaW5nLCB1c2VyUm9sZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJvbGVzQXJyYXkgPSBbJ3N0dWRlbnQnLCAnYWR2aXNvcicsICdzdXBlcnZpc29yJywgJ2FkbWluJywgJ3N1cGVyYWRtaW4nXTtcbiAgICAgICAgaWYgKHVzZXJSb2xlKSB7XG4gICAgICAgICAgICBpZiAocm9sZXNBcnJheS5pbmRleE9mKHVzZXJSb2xlKSA+PSByb2xlc0FycmF5LmluZGV4T2YocmVxdWlyZWRSb2xlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBoYW5kZWxSZXNwb25zZShyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXM6ICcsIHJlcyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkYXRhO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50X3VzZXInLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcblxuICAgICAgICByZXR1cm4gZGF0YSB8fCB7fTtcbiAgICB9XG5cbiAgICBoYW5kZWxFcnJvcihlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyIEBhdXRoU2VydmljZTogJywgZXJyKTtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
