System.register(['./signup.component', '../shared/services/guard/checkin-guard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var signup_component_1, checkin_guard_service_1;
    var SignupRoutes;
    return {
        setters:[
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (checkin_guard_service_1_1) {
                checkin_guard_service_1 = checkin_guard_service_1_1;
            }],
        execute: function() {
            exports_1("SignupRoutes", SignupRoutes = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFJYSxZQUFZOzs7Ozs7Ozs7O1lBQVosMEJBQUEsWUFBWSxHQUFpQjtnQkFDeEM7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsU0FBUyxFQUFFLGtDQUFlO29CQUMxQixXQUFXLEVBQUUsQ0FBQyxvQ0FBWSxDQUFDO2lCQUM1QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsY0FBYztvQkFDcEIsU0FBUyxFQUFFLGtDQUFlO29CQUMxQixXQUFXLEVBQUUsQ0FBQyxvQ0FBWSxDQUFDO2lCQUM1QjthQUNGLENBQUEsQ0FBQSIsImZpbGUiOiJzaWdudXAvc2lnbnVwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlckNvbmZpZywgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNraW5HdWFyZCB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9ndWFyZC9jaGVja2luLWd1YXJkLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgU2lnbnVwUm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXG4gIHtcbiAgICBwYXRoOiAnc2lnbnVwJyxcbiAgICBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZTogW0NoZWNraW5HdWFyZF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdzaWdudXAvOnJvbGUnLFxuICAgIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlOiBbQ2hlY2tpbkd1YXJkXVxuICB9XG5dIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
