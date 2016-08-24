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
var auth_service_1 = require('../../shared/services/auth.service');
var SettingComponent = (function () {
    function SettingComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    SettingComponent.prototype.getCurrentUser = function () {
        console.log('currentUser: ', this.currentUser);
    };
    SettingComponent.prototype.ngOnChanges = function (changes) {
        console.log('triggered');
        console.log('changes: ', changes);
        for (var propName in changes) {
            console.log('propName: ', propName);
        }
    };
    SettingComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SettingComponent.prototype, "currentUser", void 0);
    SettingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'yeah-setting',
            templateUrl: 'setting.component.html',
            styleUrls: ['setting.style.css'],
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], SettingComponent);
    return SettingComponent;
}());
exports.SettingComponent = SettingComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0UsZUFBZSxDQUFDLENBQUE7QUFDbEYsdUJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFJNUMsNkJBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFTakU7SUFHSSwwQkFDWSxNQUFjLEVBQ2QsV0FBd0I7UUFEeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2hDLENBQUM7SUFFTCx5Q0FBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksT0FBNEM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBckJEO1FBQUMsWUFBSyxFQUFFOzt5REFBQTtJQVJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDM0IsQ0FBQzs7d0JBQUE7SUF3QkYsdUJBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLHdCQUFnQixtQkF1QjVCLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3R5cGVzL3VzZXInXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1zZXR0aW5nJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NldHRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzZXR0aW5nLnN0eWxlLmNzcyddLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAgIEBJbnB1dCgpIGN1cnJlbnRVc2VyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50VXNlcjogJywgdGhpcy5jdXJyZW50VXNlcik7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcEtleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RyaWdnZXJlZCcpO1xuICAgICAgICBjb25zb2xlLmxvZygnY2hhbmdlczogJywgY2hhbmdlcyk7XG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9wTmFtZTogJywgcHJvcE5hbWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50VXNlcigpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
