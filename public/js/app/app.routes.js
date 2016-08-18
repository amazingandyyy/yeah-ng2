System.register(['@angular/router', './landing/landing.component', './login/login.routes', './signup/signup.routes', './dashboard/dashboard.routes', './shared/services/guard/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, landing_component_1, login_routes_1, signup_routes_1, dashboard_routes_1, index_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (landing_component_1_1) {
                landing_component_1 = landing_component_1_1;
            },
            function (login_routes_1_1) {
                login_routes_1 = login_routes_1_1;
            },
            function (signup_routes_1_1) {
                signup_routes_1 = signup_routes_1_1;
            },
            function (dashboard_routes_1_1) {
                dashboard_routes_1 = dashboard_routes_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: '',
                    component: landing_component_1.LandingComponent,
                }
            ].concat(login_routes_1.LoginRoutes, signup_routes_1.SignupRoutes, dashboard_routes_1.DashboardRoutes, [
                {
                    path: '**',
                    redirectTo: '/',
                    terminal: true
                }
            ]);
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes),
                index_1.GuardProviders
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQVdJLE1BQU0sRUFlRyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFmM0IsTUFBTSxHQUFpQjtnQkFDekI7b0JBQ0UsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsU0FBUyxFQUFFLG9DQUFnQjtpQkFDNUI7cUJBQ0UsMEJBQVcsRUFDWCw0QkFBWSxFQUNaLGtDQUFlO2dCQUNsQjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixVQUFVLEVBQUUsR0FBRztvQkFDZixRQUFRLEVBQUUsSUFBSTtpQkFDZjtjQUNGLENBQUM7WUFFVyxnQ0FBQSxrQkFBa0IsR0FBRztnQkFDaEMsc0JBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCLHNCQUFjO2FBQ2YsQ0FBQSxDQUFDIiwiZmlsZSI6ImFwcC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMYW5kaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50J1xuXG5pbXBvcnQgeyBMb2dpblJvdXRlcyB9IGZyb20gJy4vbG9naW4vbG9naW4ucm91dGVzJztcbmltcG9ydCB7IFNpZ251cFJvdXRlcyB9IGZyb20gJy4vc2lnbnVwL3NpZ251cC5yb3V0ZXMnO1xuaW1wb3J0IHsgRGFzaGJvYXJkUm91dGVzIH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLnJvdXRlcyc7XG5cbi8vIGd1YXJkc1xuaW1wb3J0IHsgR3VhcmRQcm92aWRlcnMgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy9ndWFyZC9pbmRleCc7XG5cbmxldCByb3V0ZXM6IFJvdXRlckNvbmZpZyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTGFuZGluZ0NvbXBvbmVudCxcbiAgfSxcbiAgLi4uTG9naW5Sb3V0ZXMsXG4gIC4uLlNpZ251cFJvdXRlcyxcbiAgLi4uRGFzaGJvYXJkUm91dGVzLFxuICB7XG4gICAgcGF0aDogJyoqJyxcbiAgICByZWRpcmVjdFRvOiAnLycsXG4gICAgdGVybWluYWw6IHRydWVcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IGFwcFJvdXRlclByb3ZpZGVycyA9IFtcbiAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpLFxuICBHdWFyZFByb3ZpZGVyc1xuXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
