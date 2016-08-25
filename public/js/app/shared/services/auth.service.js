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
    AuthService.prototype.checkAuthorization = function (state, password) {
        return this.authHttp.put("/api/user/checkAuthorization/" + state, password)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsNkJBQXlCLGNBQWMsQ0FBQyxDQUFBO0FBQ3hDLHdCQUEyQixjQUFjLENBQUMsQ0FBQTtBQUUxQyxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBSy9CLCtFQUErRTtBQUUvRTtJQU1JLHFCQUNZLElBQVUsRUFDVixRQUFrQixFQUNsQixNQUFjO1FBRmQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5uQixnQkFBVyxHQUFHLElBQUksaUJBQU8sRUFBUSxDQUFDLENBQUMsMkJBQTJCO1FBQzlELG1CQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQU1wRCxDQUFDO0lBRUwsb0NBQWMsR0FBZCxVQUFlLE1BQU07UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDJCQUF5QixNQUFRLENBQUM7YUFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLE1BQU07UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFD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Q0FBQztRQUMvRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxHQUFhO1FBQ3hCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFFMUQsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxHQUFRO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFwR0w7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQXFHYixrQkFBQztBQUFELENBcEdBLEFBb0dDLElBQUE7QUFwR1ksbUJBQVcsY0FvR3ZCLENBQUEiLCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gICAgZnJvbSAncnhqcy9TdWJqZWN0JztcblxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4uL3R5cGVzL2F1dGgnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3R5cGVzL3VzZXInO1xuXG4vLyBVc2luZyBhdXRoIHNlcnZpY2UgdG8ga2VlcCB0cmFjayBvZiB1c2VycycgbG9naW4gc3RhdHVzIGFjcm9zcyBhbGwgY29tcG9uZW50XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIHB1YmxpYyBpc0xvZ2dlZEluOiBib29sZWFuO1xuICAgIHB1YmxpYyByZWRpcmVjdFVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBjdXJyZW50VXNlciA9IG5ldyBTdWJqZWN0PFVzZXI+KCk7IC8vIHRoZSBkYXRhIHdpbGwgYmUgdXBkYXRlZFxuICAgIHB1YmxpYyB1c2VyQWJzb3J2YWJsZSA9IHRoaXMuY3VycmVudFVzZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICBwcml2YXRlIGF1dGhIdHRwOiBBdXRoSHR0cCxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkgeyB9XG5cbiAgICBnZXRDdXJyZW50VXNlcih1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KGAvYXBpL3VzZXIvY3VycmVudFVzZXIvJHt1c2VySWR9YClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIHJlc2V0Q3VycmVudFVzZXIodXNlcklkKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldChgL2FwaS91c2VyL2N1cnJlbnRVc2VyLyR7dXNlcklkfWApXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50VXNlckRlZXBseSh1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KGAvYXBpL3VzZXIvY3VycmVudFVzZXJEZWVwbHkvJHt1c2VySWR9YClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGdldFVzZXJCeUVtYWlsKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9nZXRVc2VyQnlFbWFpbC8ke2VtYWlsfWApXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpIHx8IHt9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT5cbiAgICAgICAgICAgICAgICBPYnNlcnZhYmxlLnRocm93KGVycilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBzaWduVXAoZGF0YTogQXV0aCk6IE9ic2VydmFibGU8QXV0aD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvdXNlci9zaWdudXAnLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgbG9nVXNlckluKGRhdGE6IEF1dGgpOiBPYnNlcnZhYmxlPEF1dGg+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3VzZXIvbG9naW4nLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgY2hlY2tBdXRob3JpemF0aW9uKHN0YXRlOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEF1dGg+IHsgICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5wdXQoYC9hcGkvdXNlci9jaGVja0F1dGhvcml6YXRpb24vJHtzdGF0ZX1gLCBwYXNzd29yZClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGxvZ1VzZXJPdXQoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50X3VzZXInKVxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pXG4gICAgICAgIHJldHVybiAnbG9nb3V0JztcbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW50VXNlcihkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAvL0Rvbid0IGxldCB0aGlzIG51bGwgcGFzc3dvcmQgcmVwbGFjZSB0aGUgYmFja2VuZCBwYXNzd29yZFxuICAgICAgICAvLyBidXQgdXNlciBjYW4gcmVwbGFjZSB0aDMgYmFja2VuZCBwYXNzd29yZCB0aHJvdWdoIGVtYWlsIHB3IHJlc2V0ICgtdG9kbylcbiAgICAgICAgaWYgKGRhdGEucGFzc3dvcmQgPT09IG51bGwgfHwgZGF0YS5wYXNzd29yZCkge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGEucGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5wb3N0KCcvYXBpL3VzZXIvdXBkYXRlJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGNoZWNrQXV0aG9yaXR5KHJlcXVpcmVkUm9sZTogc3RyaW5nLCB1c2VyUm9sZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJvbGVzQXJyYXkgPSBbJ3N0dWRlbnQnLCAnYWR2aXNvcicsICdzdXBlcnZpc29yJywgJ2FkbWluJywgJ3N1cGVyYWRtaW4nXTtcbiAgICAgICAgaWYgKHVzZXJSb2xlKSB7XG4gICAgICAgICAgICBpZiAocm9sZXNBcnJheS5pbmRleE9mKHVzZXJSb2xlKSA+PSByb2xlc0FycmF5LmluZGV4T2YocmVxdWlyZWRSb2xlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBoYW5kZWxSZXNwb25zZShyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IGRhdGE7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXG4gICAgICAgIHJldHVybiBkYXRhIHx8IHt9O1xuICAgIH1cblxuICAgIGhhbmRlbEVycm9yKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnIgQGF1dGhTZXJ2aWNlOiAnLCBlcnIpO1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
