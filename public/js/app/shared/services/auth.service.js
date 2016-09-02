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
        // console.log('res: ', res);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsNkJBQXlCLGNBQWMsQ0FBQyxDQUFBO0FBQ3hDLHdCQUEyQixjQUFjLENBQUMsQ0FBQTtBQUUxQyxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBSy9CLCtFQUErRTtBQUUvRTtJQU1JLHFCQUNZLElBQVUsRUFDVixRQUFrQixFQUNsQixNQUFjO1FBRmQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5uQixnQkFBVyxHQUFHLElBQUksaUJBQU8sRUFBUSxDQUFDLENBQUMsMkJBQTJCO1FBQzlELG1CQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQU1wRCxDQUFDO0lBRUwsb0NBQWMsR0FBZCxVQUFlLE1BQU07UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDJCQUF5QixNQUFRLENBQUM7YUFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLE1BQU07UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFD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dmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gICAgZnJvbSAncnhqcy9TdWJqZWN0JztcblxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4uL3R5cGVzL2F1dGgnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3R5cGVzL3VzZXInO1xuXG4vLyBVc2luZyBhdXRoIHNlcnZpY2UgdG8ga2VlcCB0cmFjayBvZiB1c2VycycgbG9naW4gc3RhdHVzIGFjcm9zcyBhbGwgY29tcG9uZW50XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIHB1YmxpYyBpc0xvZ2dlZEluOiBib29sZWFuO1xuICAgIHB1YmxpYyByZWRpcmVjdFVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBjdXJyZW50VXNlciA9IG5ldyBTdWJqZWN0PFVzZXI+KCk7IC8vIHRoZSBkYXRhIHdpbGwgYmUgdXBkYXRlZFxuICAgIHB1YmxpYyB1c2VyQWJzb3J2YWJsZSA9IHRoaXMuY3VycmVudFVzZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICBwcml2YXRlIGF1dGhIdHRwOiBBdXRoSHR0cCxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkgeyB9XG5cbiAgICBnZXRDdXJyZW50VXNlcih1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KGAvYXBpL3VzZXIvY3VycmVudFVzZXIvJHt1c2VySWR9YClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIHJlc2V0Q3VycmVudFVzZXIodXNlcklkKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldChgL2FwaS91c2VyL2N1cnJlbnRVc2VyLyR7dXNlcklkfWApXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50VXNlckRlZXBseSh1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KGAvYXBpL3VzZXIvY3VycmVudFVzZXJEZWVwbHkvJHt1c2VySWR9YClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGdldFVzZXJCeUVtYWlsKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9nZXRVc2VyQnlFbWFpbC8ke2VtYWlsfWApXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpIHx8IHt9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT5cbiAgICAgICAgICAgICAgICBPYnNlcnZhYmxlLnRocm93KGVycilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBzaWduVXAoZGF0YTogQXV0aCk6IE9ic2VydmFibGU8QXV0aD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvdXNlci9zaWdudXAnLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgbG9nVXNlckluKGRhdGE6IEF1dGgpOiBPYnNlcnZhYmxlPEF1dGg+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3VzZXIvbG9naW4nLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgY2hlY2tEYXRhKHN0YXRlOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEF1dGg+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5wb3N0KGAvYXBpL3VzZXIvY2hlY2tEYXRhYCwgZGF0YSlcbiAgICAgICAgICAgIC5tYXAocmVzPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBsb2dVc2VyT3V0KCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudF91c2VyJylcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKVxuICAgICAgICByZXR1cm4gJ2xvZ291dCc7XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VycmVudFVzZXIoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgLy9Eb24ndCBsZXQgdGhpcyBudWxsIHBhc3N3b3JkIHJlcGxhY2UgdGhlIGJhY2tlbmQgcGFzc3dvcmRcbiAgICAgICAgLy8gYnV0IHVzZXIgY2FuIHJlcGxhY2UgdGgzIGJhY2tlbmQgcGFzc3dvcmQgdGhyb3VnaCBlbWFpbCBwdyByZXNldCAoLXRvZG8pXG4gICAgICAgIGlmIChkYXRhLnBhc3N3b3JkID09PSBudWxsIHx8IGRhdGEucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhLnBhc3N3b3JkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAucG9zdCgnL2FwaS91c2VyL3VwZGF0ZScsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBjaGVja0F1dGhvcml0eShyZXF1aXJlZFJvbGU6IHN0cmluZywgdXNlclJvbGU6IHN0cmluZykge1xuICAgICAgICBjb25zdCByb2xlc0FycmF5ID0gWydzdHVkZW50JywgJ2Fkdmlzb3InLCAnc3VwZXJ2aXNvcicsICdhZG1pbicsICdzdXBlcmFkbWluJ107XG4gICAgICAgIGlmICh1c2VyUm9sZSkge1xuICAgICAgICAgICAgaWYgKHJvbGVzQXJyYXkuaW5kZXhPZih1c2VyUm9sZSkgPj0gcm9sZXNBcnJheS5pbmRleE9mKHJlcXVpcmVkUm9sZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFuZGVsUmVzcG9uc2UocmVzOiBSZXNwb25zZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzOiAnLCByZXMpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRhdGEgPSByZXMuanNvbigpO1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gZGF0YTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudF91c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cbiAgICAgICAgcmV0dXJuIGRhdGEgfHwge307XG4gICAgfVxuXG4gICAgaGFuZGVsRXJyb3IoZXJyOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VyciBAYXV0aFNlcnZpY2U6ICcsIGVycik7XG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
