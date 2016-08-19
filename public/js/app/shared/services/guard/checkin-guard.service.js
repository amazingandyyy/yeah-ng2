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
var angular2_jwt_1 = require('angular2-jwt');
var CheckinGuard = (function () {
    function CheckinGuard(router) {
        this.router = router;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
    }
    CheckinGuard.prototype.canActivate = function (route, state) {
        var token = JSON.parse(localStorage.getItem('id_token'));
        if (token) {
            if (!this.jwtHelper.isTokenExpired(token)) {
                this.router.navigate(['/dashboard']);
                return false;
            }
        }
        return true;
    };
    CheckinGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CheckinGuard);
    return CheckinGuard;
}());
exports.CheckinGuard = CheckinGuard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ndWFyZC9jaGVja2luLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCx1QkFFdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RCw2QkFBdUMsY0FBYyxDQUFDLENBQUE7QUFHdEQ7SUFDRSxzQkFDVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUd4QixjQUFTLEdBQWMsSUFBSSx3QkFBUyxFQUFFLENBQUM7SUFGcEMsQ0FBQztJQUlKLGtDQUFXLEdBQVgsVUFBWSxLQUE2QixFQUFFLEtBQTBCO1FBQ25FLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBRXhELEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDUixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQWxCSDtRQUFDLGlCQUFVLEVBQUU7O29CQUFBO0lBbUJiLG1CQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSxvQkFBWSxlQWtCeEIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvZ3VhcmQvY2hlY2tpbi1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlcixcbiAgICAgICAgIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgICAgICBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gICAgICAgICAgICBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnd0SGVscGVyIH0gICAgICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja2luR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGp3dEhlbHBlcjogSnd0SGVscGVyID0gbmV3IEp3dEhlbHBlcigpO1xuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIHZhciB0b2tlbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpXG5cbiAgICBpZih0b2tlbil7XG4gICAgICBpZighdGhpcy5qd3RIZWxwZXIuaXNUb2tlbkV4cGlyZWQodG9rZW4pKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
