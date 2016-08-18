System.register(["@angular/core", '@angular/platform-browser-dynamic', './app.routes', '@angular/forms', '@angular/http', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', "./app.component", '@angular/common', 'angular2-jwt'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, app_routes_1, forms_1, http_1, app_component_1, common_1, angular2_jwt_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            // if (process.env.NODE_ENV === "production") {
            //     enableProdMode();
            // }
            core_1.enableProdMode();
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                app_routes_1.appRouterProviders,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                forms_1.disableDeprecatedForms(),
                forms_1.provideForms(),
                http_1.HTTP_PROVIDERS,
                angular2_jwt_1.AUTH_PROVIDERS
            ]).catch(function (err) { return console.error('error @bootstrap: ', err); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUEsK0NBQStDO1lBQy9DLHdCQUF3QjtZQUN4QixJQUFJO1lBQ0oscUJBQWMsRUFBRSxDQUFDO1lBRWpCLG9DQUFTLENBQUMsNEJBQVksRUFBRTtnQkFDcEIsK0JBQWtCO2dCQUNsQixFQUFFLE9BQU8sRUFBRSx5QkFBZ0IsRUFBRSxRQUFRLEVBQUUsNkJBQW9CLEVBQUU7Z0JBQzdELDhCQUFzQixFQUFFO2dCQUN4QixvQkFBWSxFQUFFO2dCQUNkLHFCQUFjO2dCQUNkLDZCQUFjO2FBQ2pCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVuYWJsZVByb2RNb2RlLCBwcm92aWRlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IGFwcFJvdXRlclByb3ZpZGVycyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBkaXNhYmxlRGVwcmVjYXRlZEZvcm1zLCBwcm92aWRlRm9ybXMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvY2F0aW9uLCBMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQXV0aENvbmZpZywgQVVUSF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbi8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbi8vICAgICBlbmFibGVQcm9kTW9kZSgpO1xuLy8gfVxuZW5hYmxlUHJvZE1vZGUoKTtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuICAgIGFwcFJvdXRlclByb3ZpZGVycyxcbiAgICB7IHByb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9LFxuICAgIGRpc2FibGVEZXByZWNhdGVkRm9ybXMoKSxcbiAgICBwcm92aWRlRm9ybXMoKSxcbiAgICBIVFRQX1BST1ZJREVSUyxcbiAgICBBVVRIX1BST1ZJREVSU1xuXSkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdlcnJvciBAYm9vdHN0cmFwOiAnLCBlcnIpKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
