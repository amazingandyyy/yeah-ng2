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
var PipeComponent = (function () {
    function PipeComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.currentUser = {};
    }
    PipeComponent.prototype.getCurrentUser = function () {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    };
    PipeComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    PipeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'yeah-pipe',
            templateUrl: 'pipe.component.html',
            styleUrls: ['pipe.style.css'],
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], PipeComponent);
    return PipeComponent;
}());
exports.PipeComponent = PipeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9waXBlL3BpcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFJNUMsNkJBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFTakU7SUFHSSx1QkFDWSxNQUFjLEVBQ2QsV0FBd0I7UUFEeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnBDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBS2IsQ0FBQztJQUVMLHNDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFyQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUMzQixDQUFDOztxQkFBQTtJQWdCRixvQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlkscUJBQWEsZ0JBZXpCLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL3BpcGUvcGlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcy91c2VyJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3llYWgtcGlwZScsXG4gICAgdGVtcGxhdGVVcmw6ICdwaXBlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncGlwZS5zdHlsZS5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUGlwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY3VycmVudFVzZXIgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBnZXRDdXJyZW50VXNlcigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50VXNlcigpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
