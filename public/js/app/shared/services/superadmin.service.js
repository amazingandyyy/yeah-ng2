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
    var SuperadminService;
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
            SuperadminService = (function () {
                function SuperadminService(http, authHttp, router) {
                    this.http = http;
                    this.authHttp = authHttp;
                    this.router = router;
                }
                SuperadminService.prototype.getAllUsers = function () {
                    return this.authHttp.get("/api/user/all/")
                        .map(this.handelResponse)
                        .catch(this.handelError);
                };
                SuperadminService.prototype.handelResponse = function (res) {
                    var data = res.json();
                    return data || {};
                };
                SuperadminService.prototype.handelError = function (err) {
                    console.log('err @adminService: ', err);
                    return Observable_1.Observable.throw(err);
                };
                SuperadminService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp, router_1.Router])
                ], SuperadminService);
                return SuperadminService;
            }());
            exports_1("SuperadminService", SuperadminService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9zdXBlcmFkbWluLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBLCtFQUErRTtZQUUvRTtnQkFFSSwyQkFDWSxJQUFVLEVBQ1YsUUFBa0IsRUFDbEIsTUFBYztvQkFGZCxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUNWLGFBQVEsR0FBUixRQUFRLENBQVU7b0JBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7Z0JBQ3RCLENBQUM7Z0JBRUwsdUNBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7eUJBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO3lCQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUNoQyxDQUFDO2dCQUVELDBDQUFjLEdBQWQsVUFBZSxHQUFhO29CQUN4QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUVBLHVDQUFXLEdBQVgsVUFBWSxHQUFRO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN4QyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBdkJMO29CQUFDLGlCQUFVLEVBQUU7O3FDQUFBO2dCQXlCYix3QkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsaURBd0JDLENBQUEiLCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL3N1cGVyYWRtaW4uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi90eXBlcy9hdXRoJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi90eXBlcy91c2VyJztcblxuLy8gVXNpbmcgYXV0aCBzZXJ2aWNlIHRvIGtlZXAgdHJhY2sgb2YgdXNlcnMnIGxvZ2luIHN0YXR1cyBhY3Jvc3MgYWxsIGNvbXBvbmVudFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1cGVyYWRtaW5TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgIHByaXZhdGUgYXV0aEh0dHA6IEF1dGhIdHRwLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cblxuICAgIGdldEFsbFVzZXJzKCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9hbGwvYClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGhhbmRlbFJlc3BvbnNlKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGRhdGEgPSByZXMuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YSB8fCB7fTtcbiAgICB9XG4gICAgXG4gICAgIGhhbmRlbEVycm9yKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnIgQGFkbWluU2VydmljZTogJywgZXJyKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
