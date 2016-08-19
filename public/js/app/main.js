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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUV4RCx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCw0QkFBbUMsZUFBZSxDQUFDLENBQUE7QUFDbkQsc0JBQXFELGdCQUFnQixDQUFDLENBQUE7QUFDdEUscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFFakMsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUJBQXVGLGlCQUFpQixDQUFDLENBQUE7QUFDekcsNkJBQTBDLGNBQWMsQ0FBQyxDQUFBO0FBRXpELCtDQUErQztBQUMvQyx3QkFBd0I7QUFDeEIsSUFBSTtBQUNKLHFCQUFjLEVBQUUsQ0FBQztBQUVqQixvQ0FBUyxDQUFDLDRCQUFZLEVBQUU7SUFDcEIsZ0NBQWtCO0lBQ2xCLEVBQUUsT0FBTyxFQUFFLHlCQUFnQixFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBRTtJQUM3RCw4QkFBc0IsRUFBRTtJQUN4QixvQkFBWSxFQUFFO0lBQ2QscUJBQWM7SUFDZCw2QkFBYztDQUNqQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbmFibGVQcm9kTW9kZSwgcHJvdmlkZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBhcHBSb3V0ZXJQcm92aWRlcnMgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IGRpc2FibGVEZXByZWNhdGVkRm9ybXMsIHByb3ZpZGVGb3JtcyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9jYXRpb24sIExvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoQ29uZmlnLCBBVVRIX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjItand0JztcblxuLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuLy8gICAgIGVuYWJsZVByb2RNb2RlKCk7XG4vLyB9XG5lbmFibGVQcm9kTW9kZSgpO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4gICAgYXBwUm91dGVyUHJvdmlkZXJzLFxuICAgIHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0sXG4gICAgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcygpLFxuICAgIHByb3ZpZGVGb3JtcygpLFxuICAgIEhUVFBfUFJPVklERVJTLFxuICAgIEFVVEhfUFJPVklERVJTXG5dKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yIEBib290c3RyYXA6ICcsIGVycikpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
