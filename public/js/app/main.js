System.register(['@angular/platform-browser-dynamic', './app.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.browserDynamicPlatform().bootstrapModule(app_module_1.AppModule)
                .catch(function (err) { return console.error('error @bootstrap: ', err); });
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztZQUdBLGlEQUFzQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUM7aUJBQzlDLEtBQUssQ0FBQyxVQUFDLEdBQVEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztZQUFBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJyb3dzZXJEeW5hbWljUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcblxuYnJvd3NlckR5bmFtaWNQbGF0Zm9ybSgpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpXG4gICAgLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcignZXJyb3IgQGJvb3RzdHJhcDogJywgZXJyKSk7OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
