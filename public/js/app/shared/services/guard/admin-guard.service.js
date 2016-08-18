System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var AdminGuard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AdminGuard = (function () {
                function AdminGuard(router) {
                    this.router = router;
                }
                AdminGuard.prototype.canActivate = function () {
                    var current_user = JSON.parse(localStorage.getItem('current_user'));
                    if (current_user.role == 'admin') {
                        console.log('AdminGuard passed');
                        return true;
                    }
                    return false;
                };
                AdminGuard = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AdminGuard);
                return AdminGuard;
            }());
            exports_1("AdminGuard", AdminGuard);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ndWFyZC9hZG1pbi1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQ0Usb0JBQ1UsTUFBYztvQkFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO2dCQUNwQixDQUFDO2dCQUVMLGdDQUFXLEdBQVg7b0JBQ0UsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BFLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUEsQ0FBQzt3QkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNkLENBQUM7b0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDZixDQUFDO2dCQWJIO29CQUFDLGlCQUFVLEVBQUU7OzhCQUFBO2dCQWNiLGlCQUFDO1lBQUQsQ0FiQSxBQWFDLElBQUE7WUFiRCxtQ0FhQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9zZXJ2aWNlcy9ndWFyZC9hZG1pbi1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlcixcbiAgICAgICAgIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgICAgICBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gICAgICAgICAgICBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHsgfVxuICBcbiAgY2FuQWN0aXZhdGUoKSB7XG4gICAgdmFyIGN1cnJlbnRfdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICBpZihjdXJyZW50X3VzZXIucm9sZSA9PSAnYWRtaW4nKXtcbiAgICAgIGNvbnNvbGUubG9nKCdBZG1pbkd1YXJkIHBhc3NlZCcpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
