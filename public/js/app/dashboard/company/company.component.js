System.register(['@angular/core', '@angular/router', '../../shared/services/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1;
    var CompanyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            CompanyComponent = (function () {
                function CompanyComponent(router, authService) {
                    this.router = router;
                    this.authService = authService;
                    this.currentUser = {};
                }
                CompanyComponent.prototype.getCurrentUser = function () {
                    var _this = this;
                    this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
                        .subscribe(function (user) { return _this.currentUser = user; }, function (error) {
                        _this.authService.logUserOut();
                        console.log(error);
                    });
                };
                CompanyComponent.prototype.ngOnInit = function () {
                    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
                    this.getCurrentUser();
                };
                CompanyComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'yeah-company',
                        templateUrl: 'company.component.html',
                        styleUrls: ['company.style.css'],
                        providers: [auth_service_1.AuthService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
                ], CompanyComponent);
                return CompanyComponent;
            }());
            exports_1("CompanyComponent", CompanyComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBR0ksMEJBQ1ksTUFBYyxFQUNkLFdBQXdCO29CQUR4QixXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUpwQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztnQkFLYixDQUFDO2dCQUVMLHlDQUFjLEdBQWQ7b0JBQUEsaUJBUUM7b0JBUEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3lCQUNoRixTQUFTLENBQ1YsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBdkIsQ0FBdUIsRUFDL0IsVUFBQSxLQUFLO3dCQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQU0sS0FBSyxDQUFDLENBQUE7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBRUQsbUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBN0JMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO3dCQUNuQixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLHdCQUF3Qjt3QkFDckMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7d0JBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOztvQ0FBQTtnQkF1QkYsdUJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELCtDQXNCQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3R5cGVzL3VzZXInXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1jb21wYW55JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbXBhbnkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydjb21wYW55LnN0eWxlLmNzcyddLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhbnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGN1cnJlbnRVc2VyID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgICApIHsgfVxuICAgIFxuICAgIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKS5faWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcixcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
