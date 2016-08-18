System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/observable/of', 'rxjs/add/operator/do', 'rxjs/add/operator/delay', 'rxjs/add/operator/catch', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var UserDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {}],
        execute: function() {
            // Using auth service to keep track of users' login status across all component
            UserDataService = (function () {
                function UserDataService(http) {
                    this.http = http;
                }
                UserDataService.prototype.getSingleUser = function (userId) {
                    return this.http.get("/api/user/singleUser/" + userId)
                        .map(this.handelResponse)
                        .catch(this.handelError);
                };
                UserDataService.prototype.handelResponse = function (res) {
                    var data = res.json();
                    return data || {};
                };
                UserDataService.prototype.handelError = function (err) {
                    console.log('err @userService: ', err);
                    return Observable_1.Observable.throw(err);
                };
                UserDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserDataService);
                return UserDataService;
            }());
            exports_1("UserDataService", UserDataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy91c2VyLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUEsK0VBQStFO1lBRS9FO2dCQUVJLHlCQUNZLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFDbEIsQ0FBQztnQkFFTCx1Q0FBYSxHQUFiLFVBQWMsTUFBTTtvQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUF3QixNQUFRLENBQUM7eUJBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO3lCQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUNoQyxDQUFDO2dCQUVELHdDQUFjLEdBQWQsVUFBZSxHQUFhO29CQUN4QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUVBLHFDQUFXLEdBQVgsVUFBWSxHQUFRO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN2QyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBckJMO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQXVCYixzQkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsNkNBc0JDLENBQUEiLCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL3VzZXItZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEF1dGhIdHRwIH0gZnJvbSAnYW5ndWxhcjItand0JztcblxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4uL3R5cGVzL2F1dGgnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3R5cGVzL3VzZXInO1xuXG4vLyBVc2luZyBhdXRoIHNlcnZpY2UgdG8ga2VlcCB0cmFjayBvZiB1c2VycycgbG9naW4gc3RhdHVzIGFjcm9zcyBhbGwgY29tcG9uZW50XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckRhdGFTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBcbiAgICApIHsgfVxuXG4gICAgZ2V0U2luZ2xlVXNlcih1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYC9hcGkvdXNlci9zaW5nbGVVc2VyLyR7dXNlcklkfWApXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBoYW5kZWxSZXNwb25zZShyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGEgfHwge307XG4gICAgfVxuICAgIFxuICAgICBoYW5kZWxFcnJvcihlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyIEB1c2VyU2VydmljZTogJywgZXJyKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
