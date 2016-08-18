System.register(['@angular/core', '@angular/http', '@angular/router', 'rxjs/Observable', 'angular2-jwt', 'rxjs/add/observable/of', 'rxjs/add/operator/do', 'rxjs/add/operator/delay', 'rxjs/add/operator/catch', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, Observable_1, angular2_jwt_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {}],
        execute: function() {
            // Using auth service to keep track of users' login status across all component
            AuthService = (function () {
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
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBLCtFQUErRTtZQUUvRTtnQkFLSSxxQkFDWSxJQUFVLEVBQ1YsUUFBa0IsRUFDbEIsTUFBYztvQkFGZCxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUNWLGFBQVEsR0FBUixRQUFRLENBQVU7b0JBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7Z0JBQ3RCLENBQUM7Z0JBRUwsb0NBQWMsR0FBZCxVQUFlLE1BQU07b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywyQkFBeUIsTUFBUSxDQUFDO3lCQUN0RCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCxvQ0FBYyxHQUFkLFVBQWUsS0FBYTtvQkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDhCQUE0QixLQUFPLENBQUM7eUJBQ3hELEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQWhCLENBQWdCLENBQUM7eUJBQ3hDLEtBQUssQ0FBQyxVQUFDLEdBQVE7d0JBQ2IsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQXJCLENBQXFCLENBQ3ZCLENBQUE7Z0JBQ1QsQ0FBQztnQkFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBVTtvQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO3lCQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCwrQkFBUyxHQUFULFVBQVUsSUFBVTtvQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQzt5QkFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7eUJBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ2hDLENBQUM7Z0JBRUQsZ0NBQVUsR0FBVjtvQkFDSSxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO29CQUNuQyxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO29CQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO29CQUMzQixNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNwQixDQUFDO2dCQUVELHVDQUFpQixHQUFqQixVQUFrQixJQUFTO29CQUN2QiwyREFBMkQ7b0JBQzNELDJFQUEyRTtvQkFDM0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ3pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtvQkFDeEIsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO3lCQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCxvQ0FBYyxHQUFkLFVBQWUsWUFBb0IsRUFBRSxRQUFnQjtvQkFDakQsSUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBRS9FLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ1YsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDaEIsQ0FBQztvQkFDTCxDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUQsb0NBQWMsR0FBZCxVQUFlLEdBQWE7b0JBQ3hCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUV4QixNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztnQkFFQSxpQ0FBVyxHQUFYLFVBQVksR0FBUTtvQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFoRkw7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBa0ZiLGtCQUFDO1lBQUQsQ0FqRkEsQUFpRkMsSUFBQTtZQWpGRCxxQ0FpRkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEF1dGhIdHRwIH0gZnJvbSAnYW5ndWxhcjItand0JztcblxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4uL3R5cGVzL2F1dGgnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3R5cGVzL3VzZXInO1xuXG4vLyBVc2luZyBhdXRoIHNlcnZpY2UgdG8ga2VlcCB0cmFjayBvZiB1c2VycycgbG9naW4gc3RhdHVzIGFjcm9zcyBhbGwgY29tcG9uZW50XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgICBwdWJsaWMgaXNMb2dnZWRJbjogYm9vbGVhbjtcbiAgICAgcHVibGljIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG4gICAgIHB1YmxpYyBjdXJyZW50VXNlcjogVXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgIHByaXZhdGUgYXV0aEh0dHA6IEF1dGhIdHRwLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cblxuICAgIGdldEN1cnJlbnRVc2VyKHVzZXJJZCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9jdXJyZW50VXNlci8ke3VzZXJJZH1gKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgZ2V0VXNlckJ5RW1haWwoZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldChgL2FwaS91c2VyL2dldFVzZXJCeUVtYWlsLyR7ZW1haWx9YClcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkgfHwge30pXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PlxuICAgICAgICAgICAgICAgT2JzZXJ2YWJsZS50aHJvdyhlcnIpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgc2lnblVwKGRhdGE6IEF1dGgpOiBPYnNlcnZhYmxlPEF1dGg+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3VzZXIvc2lnbnVwJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGxvZ1VzZXJJbihkYXRhOiBBdXRoKTogT2JzZXJ2YWJsZTxBdXRoPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS91c2VyL2xvZ2luJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGxvZ1VzZXJPdXQoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50X3VzZXInKVxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pXG4gICAgICAgIHJldHVybiAnbG9nb3V0JztcbiAgICB9XG4gICBcbiAgICB1cGRhdGVDdXJyZW50VXNlcihkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAvL0Rvbid0IGxldCB0aGlzIG51bGwgcGFzc3dvcmQgcmVwbGFjZSB0aGUgYmFja2VuZCBwYXNzd29yZFxuICAgICAgICAvLyBidXQgdXNlciBjYW4gcmVwbGFjZSB0aDMgYmFja2VuZCBwYXNzd29yZCB0aHJvdWdoIGVtYWlsIHB3IHJlc2V0ICgtdG9kbylcbiAgICAgICAgaWYoZGF0YS5wYXNzd29yZCA9PT0gbnVsbCB8fCBkYXRhLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YS5wYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLnBvc3QoJy9hcGkvdXNlci91cGRhdGUnLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgY2hlY2tBdXRob3JpdHkocmVxdWlyZWRSb2xlOiBzdHJpbmcsIHVzZXJSb2xlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgcm9sZXNBcnJheSA9IFsnc3R1ZGVudCcsICdhZHZpc29yJywgJ3N1cGVydmlzb3InLCAnYWRtaW4nLCAnc3VwZXJhZG1pbiddO1xuICAgICAgICBcbiAgICAgICAgaWYodXNlclJvbGUpIHtcbiAgICAgICAgICAgIGlmKHJvbGVzQXJyYXkuaW5kZXhPZih1c2VyUm9sZSkgPj0gcm9sZXNBcnJheS5pbmRleE9mKHJlcXVpcmVkUm9sZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFuZGVsUmVzcG9uc2UocmVzOiBSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRhdGEgfHwge307XG4gICAgfVxuICAgIFxuICAgICBoYW5kZWxFcnJvcihlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyIEBhdXRoU2VydmljZTogJywgZXJyKTtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
