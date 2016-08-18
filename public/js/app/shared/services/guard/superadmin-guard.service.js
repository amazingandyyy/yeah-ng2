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
var router_1 = require('@angular/router');
var SuperadminGuard = (function () {
    function SuperadminGuard(router) {
        this.router = router;
    }
    SuperadminGuard.prototype.canActivate = function () {
        // var currentUser = JSON.parse(localStorage.getItem('current_user'));
        // this.currentUri = '';
        // if(currentUser.role == 'superadmin'){
        //   console.log('AdminGuard passed');
        //   return true;
        // }
        // console.log('AdminGuard blockout');
        // return false;
        return true;
    };
    SuperadminGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SuperadminGuard);
    return SuperadminGuard;
}());
exports.SuperadminGuard = SuperadminGuard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ndWFyZC9zdXBlcmFkbWluLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCx1QkFFdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUl6RDtJQUVFLHlCQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3BCLENBQUM7SUFFTCxxQ0FBVyxHQUFYO1FBQ0Usc0VBQXNFO1FBQ3RFLHdCQUF3QjtRQUN4Qix3Q0FBd0M7UUFDeEMsc0NBQXNDO1FBQ3RDLGlCQUFpQjtRQUNqQixJQUFJO1FBQ0osc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQWpCSDtRQUFDLGlCQUFVLEVBQUU7O3VCQUFBO0lBa0JiLHNCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSx1QkFBZSxrQkFpQjNCLENBQUEiLCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL2d1YXJkL3N1cGVyYWRtaW4tZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsXG4gICAgICAgICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgICAgICAgUm91dGVyU3RhdGVTbmFwc2hvdCB9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9ICAgICAgICAgICAgZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1cGVyYWRtaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgcHJpdmF0ZSBjdXJyZW50VXJpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkgeyB9XG4gIFxuICBjYW5BY3RpdmF0ZSgpIHtcbiAgICAvLyB2YXIgY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgLy8gdGhpcy5jdXJyZW50VXJpID0gJyc7XG4gICAgLy8gaWYoY3VycmVudFVzZXIucm9sZSA9PSAnc3VwZXJhZG1pbicpe1xuICAgIC8vICAgY29uc29sZS5sb2coJ0FkbWluR3VhcmQgcGFzc2VkJyk7XG4gICAgLy8gICByZXR1cm4gdHJ1ZTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coJ0FkbWluR3VhcmQgYmxvY2tvdXQnKTtcbiAgICAvLyByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
