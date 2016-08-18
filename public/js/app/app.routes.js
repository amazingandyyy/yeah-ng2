<<<<<<< HEAD
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
=======
"use strict";var router_1=require("@angular/router"),landing_component_1=require("./landing/landing.component"),login_routes_1=require("./login/login.routes"),signup_routes_1=require("./signup/signup.routes"),dashboard_routes_1=require("./dashboard/dashboard.routes"),index_1=require("./shared/services/guard/index"),mainRoutes=[{path:"",component:landing_component_1.LandingComponent}].concat(login_routes_1.LoginRoutes,signup_routes_1.SignupRoutes,dashboard_routes_1.DashboardRoutes,[{path:"**",redirectTo:"/",terminal:!0}]),appRoutes=mainRoutes.slice();exports.appRouterProviders=[index_1.GuardProviders],exports.routing=router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMuanMiLCJhcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbInJvdXRlcl8xIiwicmVxdWlyZSIsImxhbmRpbmdfY29tcG9uZW50XzEiLCJsb2dpbl9yb3V0ZXNfMSIsInNpZ251cF9yb3V0ZXNfMSIsImRhc2hib2FyZF9yb3V0ZXNfMSIsImluZGV4XzEiLCJtYWluUm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsIkxhbmRpbmdDb21wb25lbnQiLCJjb25jYXQiLCJMb2dpblJvdXRlcyIsIlNpZ251cFJvdXRlcyIsIkRhc2hib2FyZFJvdXRlcyIsInJlZGlyZWN0VG8iLCJ0ZXJtaW5hbCIsImFwcFJvdXRlcyIsInNsaWNlIiwiZXhwb3J0cyIsImFwcFJvdXRlclByb3ZpZGVycyIsIkd1YXJkUHJvdmlkZXJzIiwicm91dGluZyIsIlJvdXRlck1vZHVsZSIsImZvclJvb3QiXSwibWFwcGluZ3MiOiJBQUFBLFlDQUEsSUFBQUEsVUFBQUMsUUFBcUMsbUJBRXJDQyxvQkFBQUQsUUFBaUMsK0JBRWpDRSxlQUFBRixRQUE0Qix3QkFDNUJHLGdCQUFBSCxRQUE2QiwwQkFDN0JJLG1CQUFBSixRQUFnQyxnQ0FHaENLLFFBQUFMLFFBQStCLGlDQUV6Qk0sYUFFRkMsS0FBTSxHQUNOQyxVQUFXUCxvQkFBQVEsbUJERGJDLE9DR0dSLGVBQUFTLFlBQ0FSLGdCQUFBUyxhQUNBUixtQkFBQVMsa0JBRUROLEtBQU0sS0FDTk8sV0FBWSxJQUNaQyxVQUFVLEtBSVJDLFVBQ0RWLFdBQVVXLE9BR0ZDLFNBQUFDLG9CQUNYZCxRQUFBZSxnQkFHV0YsUUFBQUcsUUFBVXRCLFNBQUF1QixhQUFhQyxRQUFRUCIsImZpbGUiOiJhcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcbnZhciBsYW5kaW5nX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50Jyk7XG52YXIgbG9naW5fcm91dGVzXzEgPSByZXF1aXJlKCcuL2xvZ2luL2xvZ2luLnJvdXRlcycpO1xudmFyIHNpZ251cF9yb3V0ZXNfMSA9IHJlcXVpcmUoJy4vc2lnbnVwL3NpZ251cC5yb3V0ZXMnKTtcbnZhciBkYXNoYm9hcmRfcm91dGVzXzEgPSByZXF1aXJlKCcuL2Rhc2hib2FyZC9kYXNoYm9hcmQucm91dGVzJyk7XG4vLyBndWFyZHNcbnZhciBpbmRleF8xID0gcmVxdWlyZSgnLi9zaGFyZWQvc2VydmljZXMvZ3VhcmQvaW5kZXgnKTtcbnZhciBtYWluUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogbGFuZGluZ19jb21wb25lbnRfMS5MYW5kaW5nQ29tcG9uZW50LFxuICAgIH1cbl0uY29uY2F0KGxvZ2luX3JvdXRlc18xLkxvZ2luUm91dGVzLCBzaWdudXBfcm91dGVzXzEuU2lnbnVwUm91dGVzLCBkYXNoYm9hcmRfcm91dGVzXzEuRGFzaGJvYXJkUm91dGVzLCBbXG4gICAge1xuICAgICAgICBwYXRoOiAnKionLFxuICAgICAgICByZWRpcmVjdFRvOiAnLycsXG4gICAgICAgIHRlcm1pbmFsOiB0cnVlXG4gICAgfVxuXSk7XG52YXIgYXBwUm91dGVzID0gbWFpblJvdXRlcy5zbGljZSgpO1xuZXhwb3J0cy5hcHBSb3V0ZXJQcm92aWRlcnMgPSBbXG4gICAgaW5kZXhfMS5HdWFyZFByb3ZpZGVyc1xuXTtcbmV4cG9ydHMucm91dGluZyA9IHJvdXRlcl8xLlJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7XG4iLCJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExhbmRpbmdDb21wb25lbnQgfSBmcm9tICcuL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQnXG5cbmltcG9ydCB7IExvZ2luUm91dGVzIH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5yb3V0ZXMnO1xuaW1wb3J0IHsgU2lnbnVwUm91dGVzIH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLnJvdXRlcyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRSb3V0ZXMgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQucm91dGVzJztcblxuLy8gZ3VhcmRzXG5pbXBvcnQgeyBHdWFyZFByb3ZpZGVycyB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzL2d1YXJkL2luZGV4JztcblxuY29uc3QgbWFpblJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBMYW5kaW5nQ29tcG9uZW50LFxuICB9LFxuICAuLi5Mb2dpblJvdXRlcyxcbiAgLi4uU2lnbnVwUm91dGVzLFxuICAuLi5EYXNoYm9hcmRSb3V0ZXMsXG4gIHtcbiAgICBwYXRoOiAnKionLFxuICAgIHJlZGlyZWN0VG86ICcvJyxcbiAgICB0ZXJtaW5hbDogdHJ1ZVxuICB9XG5dO1xuXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgLi4ubWFpblJvdXRlc1xuXTtcblxuZXhwb3J0IGNvbnN0IGFwcFJvdXRlclByb3ZpZGVycyA6YW55W10gPSBbXG4gIEd1YXJkUHJvdmlkZXJzXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
>>>>>>> andy
