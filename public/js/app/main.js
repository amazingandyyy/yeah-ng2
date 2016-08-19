"use strict";
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_routing_1 = require('./app.routing');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var app_component_1 = require("./app.component");
var common_1 = require('@angular/common');
var angular2_jwt_1 = require('angular2-jwt');
// if (process.env.NODE_ENV === "production") {
//     enableProdMode();
// }
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routing_1.appRouterProviders,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    http_1.HTTP_PROVIDERS,
    angular2_jwt_1.AUTH_PROVIDERS
]).catch(function (err) { return console.error('error @bootstrap: ', err); });
//RC4->RC5 tutorial: https://www.barbarianmeetscoding.com/blog/2016/08/13/updating-your-angular-2-app-from-rc4-to-rc5-a-practical-guide/
// https://github.com/akserg/learning_bootstrap_angular2/commit/bd42d31c57f96e1a5cd2342119185c6fa582aa00
// https://github.com/akserg/ng2-systemjs-demo/blob/master/systemjs.config.js
// try to add loader: https://github.com/akserg/ng2-slim-loading-bar 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUV4RCx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCw0QkFBbUMsZUFBZSxDQUFDLENBQUE7QUFDbkQsc0JBQXFELGdCQUFnQixDQUFDLENBQUE7QUFDdEUscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFFakMsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUJBQXVGLGlCQUFpQixDQUFDLENBQUE7QUFDekcsNkJBQTBDLGNBQWMsQ0FBQyxDQUFBO0FBRXpELCtDQUErQztBQUMvQyx3QkFBd0I7QUFDeEIsSUFBSTtBQUNKLHFCQUFjLEVBQUUsQ0FBQztBQUVqQixvQ0FBUyxDQUFDLDRCQUFZLEVBQUU7SUFDcEIsZ0NBQWtCO0lBQ2xCLEVBQUUsT0FBTyxFQUFFLHlCQUFnQixFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBRTtJQUM3RCw4QkFBc0IsRUFBRTtJQUN4QixvQkFBWSxFQUFFO0lBQ2QscUJBQWM7SUFDZCw2QkFBYztDQUNqQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO0FBRWpFLHdJQUF3STtBQUN4SSx3R0FBd0c7QUFDeEcsNkVBQTZFO0FBQzdFLG9FQUFvRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUsIHByb3ZpZGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgYXBwUm91dGVyUHJvdmlkZXJzIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBkaXNhYmxlRGVwcmVjYXRlZEZvcm1zLCBwcm92aWRlRm9ybXMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvY2F0aW9uLCBMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQXV0aENvbmZpZywgQVVUSF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbi8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbi8vICAgICBlbmFibGVQcm9kTW9kZSgpO1xuLy8gfVxuZW5hYmxlUHJvZE1vZGUoKTtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuICAgIGFwcFJvdXRlclByb3ZpZGVycyxcbiAgICB7IHByb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9LFxuICAgIGRpc2FibGVEZXByZWNhdGVkRm9ybXMoKSxcbiAgICBwcm92aWRlRm9ybXMoKSxcbiAgICBIVFRQX1BST1ZJREVSUyxcbiAgICBBVVRIX1BST1ZJREVSU1xuXSkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdlcnJvciBAYm9vdHN0cmFwOiAnLCBlcnIpKTtcblxuLy9SQzQtPlJDNSB0dXRvcmlhbDogaHR0cHM6Ly93d3cuYmFyYmFyaWFubWVldHNjb2RpbmcuY29tL2Jsb2cvMjAxNi8wOC8xMy91cGRhdGluZy15b3VyLWFuZ3VsYXItMi1hcHAtZnJvbS1yYzQtdG8tcmM1LWEtcHJhY3RpY2FsLWd1aWRlL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9sZWFybmluZ19ib290c3RyYXBfYW5ndWxhcjIvY29tbWl0L2JkNDJkMzFjNTdmOTZlMWE1Y2QyMzQyMTE5MTg1YzZmYTU4MmFhMDBcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLXN5c3RlbWpzLWRlbW8vYmxvYi9tYXN0ZXIvc3lzdGVtanMuY29uZmlnLmpzXG4vLyB0cnkgdG8gYWRkIGxvYWRlcjogaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItc2xpbS1sb2FkaW5nLWJhciJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
