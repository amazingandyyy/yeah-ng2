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
    var PipeComponent;
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
            PipeComponent = (function () {
                function PipeComponent(router, authService) {
                    this.router = router;
                    this.authService = authService;
                    this.currentUser = {};
                }
                PipeComponent.prototype.getCurrentUser = function () {
                    var _this = this;
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
            exports_1("PipeComponent", PipeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9waXBlL3BpcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBR0ksdUJBQ1ksTUFBYyxFQUNkLFdBQXdCO29CQUR4QixXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUpwQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztnQkFLYixDQUFDO2dCQUVMLHNDQUFjLEdBQWQ7b0JBQUEsaUJBUUM7b0JBUEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3lCQUNoRixTQUFTLENBQ1YsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBdkIsQ0FBdUIsRUFDL0IsVUFBQSxLQUFLO3dCQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQU0sS0FBSyxDQUFDLENBQUE7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBRUQsZ0NBQVEsR0FBUjtvQkFDSSwyRkFBMkY7b0JBQzNGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkE3Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7d0JBQ25CLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUscUJBQXFCO3dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDN0IsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFDM0IsQ0FBQzs7aUNBQUE7Z0JBd0JGLG9CQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCx5Q0F1QkMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvcGlwZS9waXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3R5cGVzL3VzZXInXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1waXBlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3BpcGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwaXBlLnN0eWxlLmNzcyddLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQaXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjdXJyZW50VXNlciA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKS5faWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcixcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGVjayBjdXJyZW50VXNlciBkYXRhJywgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50VXNlcigpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
