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
    var AdminService;
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
            AdminService = (function () {
                function AdminService(http, authHttp, router) {
                    this.http = http;
                    this.authHttp = authHttp;
                    this.router = router;
                }
                AdminService.prototype.getAllUsers = function () {
                    return this.authHttp.get("/api/user/all/")
                        .map(this.handelResponse)
                        .catch(this.handelError);
                };
                AdminService.prototype.handelResponse = function (res) {
                    var data = res.json();
                    return data || {};
                };
                AdminService.prototype.handelError = function (err) {
                    console.log('err @adminService: ', err);
                    return Observable_1.Observable.throw(err);
                };
                AdminService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp, router_1.Router])
                ], AdminService);
                return AdminService;
            }());
            exports_1("AdminService", AdminService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hZG1pbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQSwrRUFBK0U7WUFFL0U7Z0JBRUksc0JBQ1ksSUFBVSxFQUNWLFFBQWtCLEVBQ2xCLE1BQWM7b0JBRmQsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFDVixhQUFRLEdBQVIsUUFBUSxDQUFVO29CQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO2dCQUN0QixDQUFDO2dCQUVMLGtDQUFXLEdBQVg7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO3lCQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCxxQ0FBYyxHQUFkLFVBQWUsR0FBYTtvQkFDeEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN0QixNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztnQkFFQSxrQ0FBVyxHQUFYLFVBQVksR0FBUTtvQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDeEMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQXZCTDtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkF5QmIsbUJBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELHVDQXdCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9zZXJ2aWNlcy9hZG1pbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEF1dGhIdHRwIH0gZnJvbSAnYW5ndWxhcjItand0JztcblxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4uL3R5cGVzL2F1dGgnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3R5cGVzL3VzZXInO1xuXG4vLyBVc2luZyBhdXRoIHNlcnZpY2UgdG8ga2VlcCB0cmFjayBvZiB1c2VycycgbG9naW4gc3RhdHVzIGFjcm9zcyBhbGwgY29tcG9uZW50XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgIHByaXZhdGUgYXV0aEh0dHA6IEF1dGhIdHRwLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cblxuICAgIGdldEFsbFVzZXJzKCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9hbGwvYClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGhhbmRlbFJlc3BvbnNlKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGRhdGEgPSByZXMuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YSB8fCB7fTtcbiAgICB9XG4gICAgXG4gICAgIGhhbmRlbEVycm9yKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnIgQGFkbWluU2VydmljZTogJywgZXJyKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
