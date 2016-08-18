System.register(['./company.component', './members.component', './sales.component', '../../shared/services/guard/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var company_component_1, members_component_1, sales_component_1, index_1;
    var CompanyRoutes;
    return {
        setters:[
            function (company_component_1_1) {
                company_component_1 = company_component_1_1;
            },
            function (members_component_1_1) {
                members_component_1 = members_component_1_1;
            },
            function (sales_component_1_1) {
                sales_component_1 = sales_component_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            exports_1("CompanyRoutes", CompanyRoutes = [
                {
                    path: 'company',
                    component: company_component_1.CompanyComponent,
                    canActivate: [index_1.SuperadminGuard],
                    children: [
                        { path: '', component: members_component_1.MembersComponent },
                        { path: 'members', component: members_component_1.MembersComponent },
                        { path: 'sales', component: sales_component_1.SalesComponent }
                    ]
                }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jb21wYW55L2NvbXBhbnkucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFTYSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7O1lBQWIsMkJBQUEsYUFBYSxHQUFpQjtnQkFDdkM7b0JBQ0ksSUFBSSxFQUFFLFNBQVM7b0JBQ2YsU0FBUyxFQUFFLG9DQUFnQjtvQkFDM0IsV0FBVyxFQUFFLENBQUMsdUJBQWUsQ0FBQztvQkFDOUIsUUFBUSxFQUFFO3dCQUNOLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7d0JBQ3pDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7d0JBQ2hELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtxQkFDL0M7aUJBQ0o7YUFDSixDQUFBLENBQUMiLCJmaWxlIjoiZGFzaGJvYXJkL2NvbXBhbnkvY29tcGFueS5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJDb25maWcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDb21wYW55Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wYW55LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW1iZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9tZW1iZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYWxlc0NvbXBvbmVudCB9ICAgZnJvbSAnLi9zYWxlcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMb2dpbkd1YXJkLCBTdXBlcmFkbWluR3VhcmQgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvZ3VhcmQvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgQ29tcGFueVJvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJ2NvbXBhbnknLCBcbiAgICAgICAgY29tcG9uZW50OiBDb21wYW55Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW1N1cGVyYWRtaW5HdWFyZF0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IE1lbWJlcnNDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ21lbWJlcnMnLCBjb21wb25lbnQ6IE1lbWJlcnNDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3NhbGVzJywgY29tcG9uZW50OiBTYWxlc0NvbXBvbmVudCB9XG4gICAgICAgIF1cbiAgICB9XG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
