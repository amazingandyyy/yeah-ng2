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
        var _this = this;
        // console.log( this.authService.currentUser);
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(function (user) { return _this.currentUser = user; }, function (error) {
            _this.authService.logUserOut();
            console.log(error);
        });
    };
    PipeComponent.prototype.ngOnInit = function () {
        // console.log('check currentUser data', JSON.parse(localStorage.getItem('current_user')));
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9waXBlL3BpcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFJNUMsNkJBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFTakU7SUFHSSx1QkFDWSxNQUFjLEVBQ2QsV0FBd0I7UUFEeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnBDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBS2IsQ0FBQztJQUVMLHNDQUFjLEdBQWQ7UUFBQSxpQkFTQztRQVJHLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDaEYsU0FBUyxDQUNWLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQXZCLENBQXVCLEVBQy9CLFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBTSxLQUFLLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksMkZBQTJGO1FBQzNGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUE5Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUMzQixDQUFDOztxQkFBQTtJQXlCRixvQkFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUF4QlkscUJBQWEsZ0JBd0J6QixDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9waXBlL3BpcGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvdHlwZXMvdXNlcidcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd5ZWFoLXBpcGUnLFxuICAgIHRlbXBsYXRlVXJsOiAncGlwZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3BpcGUuc3R5bGUuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFBpcGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGN1cnJlbnRVc2VyID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLmF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyKTtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSkuX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXIgPT4gdGhpcy5jdXJyZW50VXNlciA9IHVzZXIsXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hlY2sgY3VycmVudFVzZXIgZGF0YScsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
