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
var AdvisorGuard = (function () {
    function AdvisorGuard() {
    }
    AdvisorGuard.prototype.canActivate = function () {
        console.log('AdvisorGuard#canActivate called');
        return true;
    };
    AdvisorGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AdvisorGuard);
    return AdvisorGuard;
}());
exports.AdvisorGuard = AdvisorGuard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ndWFyZC9hZHZpc29yLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQU92RDtJQUFBO0lBS0EsQ0FBQztJQUpDLGtDQUFXLEdBQVg7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFMSDtRQUFDLGlCQUFVLEVBQUU7O29CQUFBO0lBTWIsbUJBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLG9CQUFZLGVBS3hCLENBQUEiLCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL2d1YXJkL2Fkdmlzb3ItZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsXG4gICAgICAgICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgICAgICAgUm91dGVyU3RhdGVTbmFwc2hvdCB9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9ICAgICAgICAgICAgZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkdmlzb3JHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY2FuQWN0aXZhdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ0Fkdmlzb3JHdWFyZCNjYW5BY3RpdmF0ZSBjYWxsZWQnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
