System.register(['./dashboard.component', './account/account.component', './pipe/pipe.component', './explore/explore.component', './resumes/resumes.component', './setting/setting.component', './services/services.component', './company/company.routes', '../shared/services/guard/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dashboard_component_1, account_component_1, pipe_component_1, explore_component_1, resumes_component_1, setting_component_1, services_component_1, company_routes_1, index_1;
    var DashboardRoutes;
    return {
        setters:[
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (account_component_1_1) {
                account_component_1 = account_component_1_1;
            },
            function (pipe_component_1_1) {
                pipe_component_1 = pipe_component_1_1;
            },
            function (explore_component_1_1) {
                explore_component_1 = explore_component_1_1;
            },
            function (resumes_component_1_1) {
                resumes_component_1 = resumes_component_1_1;
            },
            function (setting_component_1_1) {
                setting_component_1 = setting_component_1_1;
            },
            function (services_component_1_1) {
                services_component_1 = services_component_1_1;
            },
            function (company_routes_1_1) {
                company_routes_1 = company_routes_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            exports_1("DashboardRoutes", DashboardRoutes = [
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent,
                    canActivate: [index_1.LoginGuard],
                    children: [
                        { path: '', component: dashboard_component_1.DashboardComponent },
                        { path: 'pipe', component: pipe_component_1.PipeComponent },
                        { path: 'explore', component: explore_component_1.ExploreComponent },
                        { path: 'resumes', component: resumes_component_1.ResumesComponent },
                        { path: 'account', component: account_component_1.AccountComponent },
                        { path: 'setting', component: setting_component_1.SettingComponent },
                        { path: 'services', component: services_component_1.ServicesComponent }
                    ].concat(company_routes_1.CompanyRoutes)
                }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFrQmEsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUFmLDZCQUFBLGVBQWUsR0FBaUI7Z0JBQzNDO29CQUNFLElBQUksRUFBRSxXQUFXO29CQUNqQixTQUFTLEVBQUUsd0NBQWtCO29CQUM3QixXQUFXLEVBQUUsQ0FBQyxrQkFBVSxDQUFDO29CQUN6QixRQUFRLEVBQUU7d0JBQ1IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTt3QkFDM0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO3dCQUMxQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO3dCQUNoRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO3dCQUNoRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO3dCQUNoRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO3dCQUNoRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFOzZCQUMvQyw4QkFBYSxDQUNqQjtpQkFDRjthQUNGLENBQUEsQ0FBQyIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlckNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9hY2NvdW50L2FjY291bnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSAgICBmcm9tICcuL3BpcGUvcGlwZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwbG9yZUNvbXBvbmVudCB9IGZyb20gJy4vZXhwbG9yZS9leHBsb3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN1bWVzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN1bWVzL3Jlc3VtZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFNldHRpbmdDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VydmljZXNDb21wb25lbnQgfSAgICBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYW55Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbWJlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBhbnkvbWVtYmVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FsZXNDb21wb25lbnQgfSAgIGZyb20gJy4vY29tcGFueS9zYWxlcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb21wYW55Um91dGVzIH0gZnJvbSAnLi9jb21wYW55L2NvbXBhbnkucm91dGVzJzsgXG5cbmltcG9ydCB7IExvZ2luR3VhcmQgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvZ3VhcmQvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkUm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXG4gIHtcbiAgICBwYXRoOiAnZGFzaGJvYXJkJyxcbiAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZTogW0xvZ2luR3VhcmRdLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAncGlwZScsIGNvbXBvbmVudDogUGlwZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnZXhwbG9yZScsIGNvbXBvbmVudDogRXhwbG9yZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAncmVzdW1lcycsIGNvbXBvbmVudDogUmVzdW1lc0NvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnYWNjb3VudCcsIGNvbXBvbmVudDogQWNjb3VudENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnc2V0dGluZycsIGNvbXBvbmVudDogU2V0dGluZ0NvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnc2VydmljZXMnLCBjb21wb25lbnQ6IFNlcnZpY2VzQ29tcG9uZW50IH0sXG4gICAgICAuLi5Db21wYW55Um91dGVzXG4gICAgXVxuICB9XG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
