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
        // currentUser: User;
        this.currentUser = new Subject_1.Subject(); // the data will be updated
        this.userObservable$ = this.currentUser.asObservable();
    }
    AuthService.prototype.logIn = function (data) {
        var self = this;
        return this.http.post('/api/user/login', data)
            .map(function (res) {
            var data = res.json();
            self.isLoggedIn = true;
            self.currentUser.next(data.user);
            console.log('currentUser @auth', self.currentUser);
            return data;
        })
            .catch(this.handleError);
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('current_user');
        this.isLoggedIn = false;
        this.router.navigate(['/']);
        return 'logout';
    };
    AuthService.prototype.getCurrentUser = function (userId) {
        return this.authHttp.get("/api/user/currentUser/" + userId)
            .map(this.handleResponse)
            .catch(this.handleError);
    };
    // resetCurrentUser(userId): Observable<User> {
    //     return this.authHttp.get(`/api/user/currentUser/${userId}`)
    //         .map(this.handleResponse)
    //         .catch(this.handleError)
    // }
    // getCurrentUserDeeply(userId): Observable<User> {
    //     return this.authHttp.get(`/api/user/currentUserDeeply/${userId}`)
    //         .map(this.handleResponse)
    //         .catch(this.handleError)
    // }
    AuthService.prototype.getUserByEmail = function (email) {
        return this.authHttp.get("/api/user/getUserByEmail/" + email)
            .map(function (res) { return res.json() || {}; })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    AuthService.prototype.signUp = function (data) {
        return this.http.post('/api/user/signup', data)
            .map(this.handleResponse)
            .catch(this.handleError);
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
            .catch(this.handleError);
    };
    AuthService.prototype.updateCurrentUser = function (data) {
        //Don't let this null password replace the backend password
        // but user can replace th3 backend password through email pw reset (-todo)
        if (data.password === null || data.password) {
            delete data.password;
        }
        return this.authHttp.post('/api/user/update', data)
            .map(this.handleResponse)
            .catch(this.handleError);
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
    AuthService.prototype.handleResponse = function (res) {
        // console.log('res', res);
        var data = res.json();
        this.isLoggedIn = true;
        // this.currentUser = data.user;
        // console.log('current user auth service login', this.currentUser);
        localStorage.setItem('current_user', JSON.stringify(data));
        return data || {};
    };
    AuthService.prototype.handleError = function (err) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsNkJBQXlCLGNBQWMsQ0FBQyxDQUFBO0FBQ3hDLHdCQUEyQixjQUFjLENBQUMsQ0FBQTtBQUUxQyxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBSy9CLCtFQUErRTtBQUUvRTtJQUNJLHFCQUNZLElBQVUsRUFDVixRQUFrQixFQUNsQixNQUFjO1FBRmQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUsxQixxQkFBcUI7UUFDckIsZ0JBQVcsR0FBRyxJQUFJLGlCQUFPLEVBQVEsQ0FBQyxDQUFDLDJCQUEyQjtRQUM5RCxvQkFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFOaEQsQ0FBQztJQVNILDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUM7YUFDekMsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNmLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJ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LCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gICAgZnJvbSAncnhqcy9TdWJqZWN0JztcblxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4uL3R5cGVzL2F1dGgnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3R5cGVzL3VzZXInO1xuXG4vLyBVc2luZyBhdXRoIHNlcnZpY2UgdG8ga2VlcCB0cmFjayBvZiB1c2VycycgbG9naW4gc3RhdHVzIGFjcm9zcyBhbGwgY29tcG9uZW50XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgIHByaXZhdGUgYXV0aEh0dHA6IEF1dGhIdHRwLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKXt9XG5cbiAgICBpc0xvZ2dlZEluOiBib29sZWFuO1xuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG4gICAgLy8gY3VycmVudFVzZXI6IFVzZXI7XG4gICAgY3VycmVudFVzZXIgPSBuZXcgU3ViamVjdDxVc2VyPigpOyAvLyB0aGUgZGF0YSB3aWxsIGJlIHVwZGF0ZWRcbiAgICB1c2VyT2JzZXJ2YWJsZSQgPSB0aGlzLmN1cnJlbnRVc2VyLmFzT2JzZXJ2YWJsZSgpO1xuXG5cbiAgICBsb2dJbihkYXRhOiBBdXRoKTogT2JzZXJ2YWJsZTxBdXRoPiB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3VzZXIvbG9naW4nLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICBzZWxmLmlzTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFVzZXIubmV4dChkYXRhLnVzZXIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50VXNlciBAYXV0aCcsIHNlbGYuY3VycmVudFVzZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxuICAgIH1cblxuICAgIGxvZ091dCgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRfdXNlcicpXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSlcbiAgICAgICAgcmV0dXJuICdsb2dvdXQnO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRVc2VyKHVzZXJJZCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9jdXJyZW50VXNlci8ke3VzZXJJZH1gKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRsZVJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgfVxuXG4gICAgLy8gcmVzZXRDdXJyZW50VXNlcih1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KGAvYXBpL3VzZXIvY3VycmVudFVzZXIvJHt1c2VySWR9YClcbiAgICAvLyAgICAgICAgIC5tYXAodGhpcy5oYW5kbGVSZXNwb25zZSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxuICAgIC8vIH1cblxuICAgIC8vIGdldEN1cnJlbnRVc2VyRGVlcGx5KHVzZXJJZCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9jdXJyZW50VXNlckRlZXBseS8ke3VzZXJJZH1gKVxuICAgIC8vICAgICAgICAgLm1hcCh0aGlzLmhhbmRsZVJlc3BvbnNlKVxuICAgIC8vICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgLy8gfVxuXG4gICAgZ2V0VXNlckJ5RW1haWwoZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldChgL2FwaS91c2VyL2dldFVzZXJCeUVtYWlsLyR7ZW1haWx9YClcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkgfHwge30pXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PlxuICAgICAgICAgICAgICAgIE9ic2VydmFibGUudGhyb3coZXJyKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIHNpZ25VcChkYXRhOiBBdXRoKTogT2JzZXJ2YWJsZTxBdXRoPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS91c2VyL3NpZ251cCcsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGxlUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcbiAgICB9XG5cbiAgICBjaGVja0RhdGEoc3RhdGU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8QXV0aD4ge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLnBvc3QoYC9hcGkvdXNlci9jaGVja0RhdGFgLCBkYXRhKVxuICAgICAgICAgICAgLm1hcChyZXM9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnRVc2VyKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIC8vRG9uJ3QgbGV0IHRoaXMgbnVsbCBwYXNzd29yZCByZXBsYWNlIHRoZSBiYWNrZW5kIHBhc3N3b3JkXG4gICAgICAgIC8vIGJ1dCB1c2VyIGNhbiByZXBsYWNlIHRoMyBiYWNrZW5kIHBhc3N3b3JkIHRocm91Z2ggZW1haWwgcHcgcmVzZXQgKC10b2RvKVxuICAgICAgICBpZiAoZGF0YS5wYXNzd29yZCA9PT0gbnVsbCB8fCBkYXRhLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YS5wYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLnBvc3QoJy9hcGkvdXNlci91cGRhdGUnLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRsZVJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgfVxuXG4gICAgY2hlY2tBdXRob3JpdHkocmVxdWlyZWRSb2xlOiBzdHJpbmcsIHVzZXJSb2xlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgcm9sZXNBcnJheSA9IFsnc3R1ZGVudCcsICdhZHZpc29yJywgJ3N1cGVydmlzb3InLCAnYWRtaW4nLCAnc3VwZXJhZG1pbiddO1xuICAgICAgICBpZiAodXNlclJvbGUpIHtcbiAgICAgICAgICAgIGlmIChyb2xlc0FycmF5LmluZGV4T2YodXNlclJvbGUpID49IHJvbGVzQXJyYXkuaW5kZXhPZihyZXF1aXJlZFJvbGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGhhbmRsZVJlc3BvbnNlKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcycsIHJlcyk7XG4gICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcblxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRVc2VyID0gZGF0YS51c2VyO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50IHVzZXIgYXV0aCBzZXJ2aWNlIGxvZ2luJywgdGhpcy5jdXJyZW50VXNlcik7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXG4gICAgICAgIHJldHVybiBkYXRhIHx8IHt9O1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9yKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnIgQGF1dGhTZXJ2aWNlOiAnLCBlcnIpO1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
