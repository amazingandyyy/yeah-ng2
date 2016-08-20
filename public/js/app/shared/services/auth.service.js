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
    }
    AuthService.prototype.getCurrentUser = function (userId) {
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
        var data = res.json();
        this.isLoggedIn = true;
        this.currentUser = data;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsNkJBQXlCLGNBQWMsQ0FBQyxDQUFBO0FBRXhDLFFBQU8sd0JBQXdCLENBQUMsQ0FBQTtBQUNoQyxRQUFPLHNCQUFzQixDQUFDLENBQUE7QUFDOUIsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFLL0IsK0VBQStFO0FBRS9FO0lBS0kscUJBQ1ksSUFBVSxFQUNWLFFBQWtCLEVBQ2xCLE1BQWM7UUFGZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3RCLENBQUM7SUFFTCxvQ0FBYyxHQUFkLFVBQWUsTUFBTTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMkJBQXlCLE1BQVEsQ0FBQzthQUN0RCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCwwQ0FBb0IsR0FBcEIsVUFBcUIsTUFBTTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUNBQStCLE1BQVEsQ0FBQzthQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsS0FB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Q0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBckZMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUF1RmIsa0JBQUM7QUFBRCxDQXRGQSxBQXNGQyxJQUFBO0FBdEZZLG1CQUFXLGNBc0Z2QixDQUFBIiwiZmlsZSI6InNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQXV0aEh0dHAgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi4vdHlwZXMvYXV0aCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdHlwZXMvdXNlcic7XG5cbi8vIFVzaW5nIGF1dGggc2VydmljZSB0byBrZWVwIHRyYWNrIG9mIHVzZXJzJyBsb2dpbiBzdGF0dXMgYWNyb3NzIGFsbCBjb21wb25lbnRcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgIHB1YmxpYyBpc0xvZ2dlZEluOiBib29sZWFuO1xuICAgICBwdWJsaWMgcmVkaXJlY3RVcmw6IHN0cmluZztcbiAgICAgcHVibGljIGN1cnJlbnRVc2VyOiBVc2VyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgcHJpdmF0ZSBhdXRoSHR0cDogQXV0aEh0dHAsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHsgfVxuXG4gICAgZ2V0Q3VycmVudFVzZXIodXNlcklkKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldChgL2FwaS91c2VyL2N1cnJlbnRVc2VyLyR7dXNlcklkfWApXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50VXNlckRlZXBseSh1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KGAvYXBpL3VzZXIvY3VycmVudFVzZXJEZWVwbHkvJHt1c2VySWR9YClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGdldFVzZXJCeUVtYWlsKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9nZXRVc2VyQnlFbWFpbC8ke2VtYWlsfWApXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpIHx8IHt9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT5cbiAgICAgICAgICAgICAgIE9ic2VydmFibGUudGhyb3coZXJyKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIHNpZ25VcChkYXRhOiBBdXRoKTogT2JzZXJ2YWJsZTxBdXRoPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS91c2VyL3NpZ251cCcsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBsb2dVc2VySW4oZGF0YTogQXV0aCk6IE9ic2VydmFibGU8QXV0aD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvdXNlci9sb2dpbicsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBsb2dVc2VyT3V0KCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudF91c2VyJylcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKVxuICAgICAgICByZXR1cm4gJ2xvZ291dCc7XG4gICAgfVxuICAgXG4gICAgdXBkYXRlQ3VycmVudFVzZXIoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgLy9Eb24ndCBsZXQgdGhpcyBudWxsIHBhc3N3b3JkIHJlcGxhY2UgdGhlIGJhY2tlbmQgcGFzc3dvcmRcbiAgICAgICAgLy8gYnV0IHVzZXIgY2FuIHJlcGxhY2UgdGgzIGJhY2tlbmQgcGFzc3dvcmQgdGhyb3VnaCBlbWFpbCBwdyByZXNldCAoLXRvZG8pXG4gICAgICAgIGlmKGRhdGEucGFzc3dvcmQgPT09IG51bGwgfHwgZGF0YS5wYXNzd29yZCkge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGEucGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5wb3N0KCcvYXBpL3VzZXIvdXBkYXRlJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGNoZWNrQXV0aG9yaXR5KHJlcXVpcmVkUm9sZTogc3RyaW5nLCB1c2VyUm9sZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJvbGVzQXJyYXkgPSBbJ3N0dWRlbnQnLCAnYWR2aXNvcicsICdzdXBlcnZpc29yJywgJ2FkbWluJywgJ3N1cGVyYWRtaW4nXTtcbiAgICAgICAgaWYodXNlclJvbGUpIHtcbiAgICAgICAgICAgIGlmKHJvbGVzQXJyYXkuaW5kZXhPZih1c2VyUm9sZSkgPj0gcm9sZXNBcnJheS5pbmRleE9mKHJlcXVpcmVkUm9sZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFuZGVsUmVzcG9uc2UocmVzOiBSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkYXRhO1xuXG4gICAgICAgIHJldHVybiBkYXRhIHx8IHt9O1xuICAgIH1cbiAgICBcbiAgICAgaGFuZGVsRXJyb3IoZXJyOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VyciBAYXV0aFNlcnZpY2U6ICcsIGVycik7XG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
