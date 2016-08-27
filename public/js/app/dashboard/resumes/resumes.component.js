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
var ResumesComponent = (function () {
    function ResumesComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.currentUser = {};
    }
    ResumesComponent.prototype.getCurrentUser = function () {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    };
    ResumesComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    ResumesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'yeah-resumes',
            templateUrl: 'resumes.component.html',
            styleUrls: ['../dashboard.style.css', 'resumes.style.css'],
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], ResumesComponent);
    return ResumesComponent;
}());
exports.ResumesComponent = ResumesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9yZXN1bWVzL3Jlc3VtZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFJNUMsNkJBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFTakU7SUFHSSwwQkFDWSxNQUFjLEVBQ2QsV0FBd0I7UUFEeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnBDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBS2IsQ0FBQztJQUVMLHlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFyQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLEVBQUMsbUJBQW1CLENBQUM7WUFDekQsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUMzQixDQUFDOzt3QkFBQTtJQWdCRix1QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksd0JBQWdCLG1CQWU1QixDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9yZXN1bWVzL3Jlc3VtZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvdHlwZXMvdXNlcidcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd5ZWFoLXJlc3VtZXMnLFxuICAgIHRlbXBsYXRlVXJsOiAncmVzdW1lcy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4uL2Rhc2hib2FyZC5zdHlsZS5jc3MnLCdyZXN1bWVzLnN0eWxlLmNzcyddLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBSZXN1bWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjdXJyZW50VXNlciA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
