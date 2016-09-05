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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsNkJBQXlCLGNBQWMsQ0FBQyxDQUFBO0FBQ3hDLHdCQUEyQixjQUFjLENBQUMsQ0FBQTtBQUUxQyxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBSy9CLCtFQUErRTtBQUUvRTtJQUNJLHFCQUNZLElBQVUsRUFDVixRQUFrQixFQUNsQixNQUFjO1FBRmQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUsxQixxQkFBcUI7UUFDckIsZ0JBQVcsR0FBRyxJQUFJLGlCQUFPLEVBQVEsQ0FBQyxDQUFDLDJCQUEyQjtRQUM5RCxvQkFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFOaEQsQ0FBQztJQVNILDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUM7YUFDekMsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNmLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUV2QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzNCLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxNQUFNO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywyQkFBeUIsTUFBUSxDQUFDO2FBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELCtDQUErQztJQUMvQyxrRUFBa0U7SUFDbEUsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxJQUFJO0lBRUosbURBQW1EO0lBQ25ELHdFQUF3RTtJQUN4RSxvQ0FBb0M7SUFDcEMsbUNBQW1DO0lBQ25DLElBQUk7SUFFSixvQ0FBYyxHQUFkLFVBQWUsS0FBYTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsOEJBQTRCLEtBQU8sQ0FBQzthQUN4RCxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFoQixDQUFnQixDQUFDO2FBQ3hDLEtBQUssQ0FBQyxVQUFDLEdBQVE7WUFDWixPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUFyQixDQUFxQixDQUN4QixDQUFBO0lBQ1QsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQzthQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBYSxFQUFFLFFBQWdCO1FBQ3JDLElBQUksSUFBSSxHQUFHO1lBQ1AsS0FBSyxFQUFFLEtBQUs7WUFDWixRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFBO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQzthQUNqRCxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ0osTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELHVDQUFpQixHQUFqQixVQUFrQixJQUFTO1FBQ3ZCLDJEQUEyRDtRQUMzRCwyRUFBMkU7UUFDM0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQ3hCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO2FBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxZQUFvQixFQUFFLFFBQWdCO1FBQ2pELElBQU0sVUFBVSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQy9FLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLEdBQWE7UUFDeEIsMkJBQTJCO1FBQzNCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixnQ0FBZ0M7UUFFaEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBRTFELE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksR0FBUTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBcEhMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFxSGIsa0JBQUM7QUFBRCxDQXBIQSxBQW9IQyxJQUFBO0FBcEhZLG1CQUFXLGNBb0h2QixDQUFBIiwiZmlsZSI6InNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQXV0aEh0dHAgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuaW1wb3J0IHsgU3ViamVjdCB9ICAgIGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi90eXBlcy9hdXRoJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi90eXBlcy91c2VyJztcblxuLy8gVXNpbmcgYXV0aCBzZXJ2aWNlIHRvIGtlZXAgdHJhY2sgb2YgdXNlcnMnIGxvZ2luIHN0YXR1cyBhY3Jvc3MgYWxsIGNvbXBvbmVudFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICBwcml2YXRlIGF1dGhIdHRwOiBBdXRoSHR0cCxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICl7fVxuXG4gICAgaXNMb2dnZWRJbjogYm9vbGVhbjtcbiAgICByZWRpcmVjdFVybDogc3RyaW5nO1xuICAgIC8vIGN1cnJlbnRVc2VyOiBVc2VyO1xuICAgIGN1cnJlbnRVc2VyID0gbmV3IFN1YmplY3Q8VXNlcj4oKTsgLy8gdGhlIGRhdGEgd2lsbCBiZSB1cGRhdGVkXG4gICAgdXNlck9ic2VydmFibGUkID0gdGhpcy5jdXJyZW50VXNlci5hc09ic2VydmFibGUoKTtcblxuXG4gICAgbG9nSW4oZGF0YTogQXV0aCk6IE9ic2VydmFibGU8QXV0aD4ge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS91c2VyL2xvZ2luJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5pc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcbiAgICB9XG5cbiAgICBsb2dPdXQoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50X3VzZXInKVxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pXG4gICAgICAgIHJldHVybiAnbG9nb3V0JztcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50VXNlcih1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KGAvYXBpL3VzZXIvY3VycmVudFVzZXIvJHt1c2VySWR9YClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kbGVSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxuICAgIH1cblxuICAgIC8vIHJlc2V0Q3VycmVudFVzZXIodXNlcklkKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldChgL2FwaS91c2VyL2N1cnJlbnRVc2VyLyR7dXNlcklkfWApXG4gICAgLy8gICAgICAgICAubWFwKHRoaXMuaGFuZGxlUmVzcG9uc2UpXG4gICAgLy8gICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcbiAgICAvLyB9XG5cbiAgICAvLyBnZXRDdXJyZW50VXNlckRlZXBseSh1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KGAvYXBpL3VzZXIvY3VycmVudFVzZXJEZWVwbHkvJHt1c2VySWR9YClcbiAgICAvLyAgICAgICAgIC5tYXAodGhpcy5oYW5kbGVSZXNwb25zZSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxuICAgIC8vIH1cblxuICAgIGdldFVzZXJCeUVtYWlsKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9nZXRVc2VyQnlFbWFpbC8ke2VtYWlsfWApXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpIHx8IHt9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT5cbiAgICAgICAgICAgICAgICBPYnNlcnZhYmxlLnRocm93KGVycilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBzaWduVXAoZGF0YTogQXV0aCk6IE9ic2VydmFibGU8QXV0aD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvdXNlci9zaWdudXAnLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRsZVJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgfVxuXG4gICAgY2hlY2tEYXRhKHN0YXRlOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEF1dGg+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5wb3N0KGAvYXBpL3VzZXIvY2hlY2tEYXRhYCwgZGF0YSlcbiAgICAgICAgICAgIC5tYXAocmVzPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW50VXNlcihkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAvL0Rvbid0IGxldCB0aGlzIG51bGwgcGFzc3dvcmQgcmVwbGFjZSB0aGUgYmFja2VuZCBwYXNzd29yZFxuICAgICAgICAvLyBidXQgdXNlciBjYW4gcmVwbGFjZSB0aDMgYmFja2VuZCBwYXNzd29yZCB0aHJvdWdoIGVtYWlsIHB3IHJlc2V0ICgtdG9kbylcbiAgICAgICAgaWYgKGRhdGEucGFzc3dvcmQgPT09IG51bGwgfHwgZGF0YS5wYXNzd29yZCkge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGEucGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5wb3N0KCcvYXBpL3VzZXIvdXBkYXRlJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kbGVSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxuICAgIH1cblxuICAgIGNoZWNrQXV0aG9yaXR5KHJlcXVpcmVkUm9sZTogc3RyaW5nLCB1c2VyUm9sZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJvbGVzQXJyYXkgPSBbJ3N0dWRlbnQnLCAnYWR2aXNvcicsICdzdXBlcnZpc29yJywgJ2FkbWluJywgJ3N1cGVyYWRtaW4nXTtcbiAgICAgICAgaWYgKHVzZXJSb2xlKSB7XG4gICAgICAgICAgICBpZiAocm9sZXNBcnJheS5pbmRleE9mKHVzZXJSb2xlKSA+PSByb2xlc0FycmF5LmluZGV4T2YocmVxdWlyZWRSb2xlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNwb25zZShyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXMnLCByZXMpO1xuICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XG5cbiAgICAgICAgLy8gdGhpcy5jdXJyZW50VXNlciA9IGRhdGEudXNlcjtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudF91c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cbiAgICAgICAgcmV0dXJuIGRhdGEgfHwge307XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3IoZXJyOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VyciBAYXV0aFNlcnZpY2U6ICcsIGVycik7XG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
