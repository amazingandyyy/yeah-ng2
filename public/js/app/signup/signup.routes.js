System.register(['./signup.component', '../shared/services/guard/checkin-guard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var signup_component_1, checkin_guard_service_1;
    var signupRoutes;
    return {
        setters:[
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (checkin_guard_service_1_1) {
                checkin_guard_service_1 = checkin_guard_service_1_1;
            }],
        execute: function() {
            exports_1("signupRoutes", signupRoutes = [
                {
                    path: 'signup',
                    component: signup_component_1.SignupComponent,
                    canActivate: [checkin_guard_service_1.CheckinGuard]
                },
                {
                    path: 'signup/:role',
                    component: signup_component_1.SignupComponent,
                    canActivate: [checkin_guard_service_1.CheckinGuard]
                }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFLYSxZQUFZOzs7Ozs7Ozs7O1lBQVosMEJBQUEsWUFBWSxHQUFXO2dCQUNsQztvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxTQUFTLEVBQUUsa0NBQWU7b0JBQzFCLFdBQVcsRUFBRSxDQUFDLG9DQUFZLENBQUM7aUJBQzVCO2dCQUNEO29CQUNFLElBQUksRUFBRSxjQUFjO29CQUNwQixTQUFTLEVBQUUsa0NBQWU7b0JBQzFCLFdBQVcsRUFBRSxDQUFDLG9DQUFZLENBQUM7aUJBQzVCO2FBQ0YsQ0FBQSxDQUFBIiwiZmlsZSI6InNpZ251cC9zaWdudXAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL3NpZ251cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tpbkd1YXJkIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2d1YXJkL2NoZWNraW4tZ3VhcmQuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBzaWdudXBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdzaWdudXAnLFxuICAgIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlOiBbQ2hlY2tpbkd1YXJkXVxuICB9LFxuICB7XG4gICAgcGF0aDogJ3NpZ251cC86cm9sZScsXG4gICAgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGU6IFtDaGVja2luR3VhcmRdXG4gIH1cbl0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
