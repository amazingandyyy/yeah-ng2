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
    var SuperadminGuard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SuperadminGuard = (function () {
                function SuperadminGuard(router) {
                    this.router = router;
                }
                SuperadminGuard.prototype.canActivate = function () {
                    var currentUser = JSON.parse(localStorage.getItem('current_user'));
                    this.currentUri = '';
                    if (currentUser.role == 'superadmin') {
                        console.log('AdminGuard passed');
                        return true;
                    }
                    console.log('AdminGuard blockout');
                    return false;
                };
                SuperadminGuard = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], SuperadminGuard);
                return SuperadminGuard;
            }());
            exports_1("SuperadminGuard", SuperadminGuard);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ndWFyZC9zdXBlcmFkbWluLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFRSx5QkFDVSxNQUFjO29CQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7Z0JBQ3BCLENBQUM7Z0JBRUwscUNBQVcsR0FBWDtvQkFDRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDLENBQUEsQ0FBQzt3QkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNkLENBQUM7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUVuQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNmLENBQUM7Z0JBakJIO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQWtCYixzQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsNkNBaUJDLENBQUEiLCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL2d1YXJkL3N1cGVyYWRtaW4tZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsXG4gICAgICAgICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgICAgICAgUm91dGVyU3RhdGVTbmFwc2hvdCB9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9ICAgICAgICAgICAgZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1cGVyYWRtaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgcHJpdmF0ZSBjdXJyZW50VXJpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkgeyB9XG4gIFxuICBjYW5BY3RpdmF0ZSgpIHtcbiAgICB2YXIgY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgdGhpcy5jdXJyZW50VXJpID0gJyc7XG4gICAgaWYoY3VycmVudFVzZXIucm9sZSA9PSAnc3VwZXJhZG1pbicpe1xuICAgICAgY29uc29sZS5sb2coJ0FkbWluR3VhcmQgcGFzc2VkJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ0FkbWluR3VhcmQgYmxvY2tvdXQnKTtcbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
