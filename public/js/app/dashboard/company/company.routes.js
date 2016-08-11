"use strict";var company_component_1=require("./company.component"),members_component_1=require("./members.component"),sales_component_1=require("./sales.component"),index_1=require("../../shared/services/guard/index");exports.CompanyRoutes=[{path:"company",component:company_component_1.CompanyComponent,canActivate:[index_1.SuperadminGuard],children:[{path:"",component:members_component_1.MembersComponent},{path:"members",component:members_component_1.MembersComponent},{path:"sales",component:sales_component_1.SalesComponent}]}];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jb21wYW55L2NvbXBhbnkucm91dGVzLmpzIiwiZGFzaGJvYXJkL2NvbXBhbnkvY29tcGFueS5yb3V0ZXMudHMiXSwibmFtZXMiOlsiY29tcGFueV9jb21wb25lbnRfMSIsInJlcXVpcmUiLCJtZW1iZXJzX2NvbXBvbmVudF8xIiwic2FsZXNfY29tcG9uZW50XzEiLCJpbmRleF8xIiwiZXhwb3J0cyIsIkNvbXBhbnlSb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiQ29tcGFueUNvbXBvbmVudCIsImNhbkFjdGl2YXRlIiwiU3VwZXJhZG1pbkd1YXJkIiwiY2hpbGRyZW4iLCJNZW1iZXJzQ29tcG9uZW50IiwiU2FsZXNDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBLFlDR0EsSUFBQUEscUJBQUFDLFFBQWlDLHVCQUNqQ0Msb0JBQUFELFFBQWlDLHVCQUNqQ0Usa0JBQUFGLFFBQWlDLHFCQUVqQ0csUUFBQUgsUUFBNEMsb0NBRS9CSSxTQUFBQyxnQkFFTEMsS0FBTSxVQUNOQyxVQUFXUixvQkFBQVMsaUJBQ1hDLGFBQWNOLFFBQUFPLGlCQUNkQyxXQUNNTCxLQUFNLEdBQUlDLFVBQVdOLG9CQUFBVyxtQkFDckJOLEtBQU0sVUFBV0MsVUFBV04sb0JBQUFXLG1CQUM1Qk4sS0FBTSxRQUFTQyxVQUFXTCxrQkFBQVciLCJmaWxlIjoiZGFzaGJvYXJkL2NvbXBhbnkvY29tcGFueS5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBjb21wYW55X2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9jb21wYW55LmNvbXBvbmVudCcpO1xudmFyIG1lbWJlcnNfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL21lbWJlcnMuY29tcG9uZW50Jyk7XG52YXIgc2FsZXNfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL3NhbGVzLmNvbXBvbmVudCcpO1xudmFyIGluZGV4XzEgPSByZXF1aXJlKCcuLi8uLi9zaGFyZWQvc2VydmljZXMvZ3VhcmQvaW5kZXgnKTtcbmV4cG9ydHMuQ29tcGFueVJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICdjb21wYW55JyxcbiAgICAgICAgY29tcG9uZW50OiBjb21wYW55X2NvbXBvbmVudF8xLkNvbXBhbnlDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbaW5kZXhfMS5TdXBlcmFkbWluR3VhcmRdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBtZW1iZXJzX2NvbXBvbmVudF8xLk1lbWJlcnNDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ21lbWJlcnMnLCBjb21wb25lbnQ6IG1lbWJlcnNfY29tcG9uZW50XzEuTWVtYmVyc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnc2FsZXMnLCBjb21wb25lbnQ6IHNhbGVzX2NvbXBvbmVudF8xLlNhbGVzQ29tcG9uZW50IH1cbiAgICAgICAgXVxuICAgIH1cbl07XG4iLCJpbXBvcnQgeyBSb3V0ZXJDb25maWcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDb21wYW55Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wYW55LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW1iZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9tZW1iZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYWxlc0NvbXBvbmVudCB9ICAgZnJvbSAnLi9zYWxlcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMb2dpbkd1YXJkLCBTdXBlcmFkbWluR3VhcmQgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvZ3VhcmQvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgQ29tcGFueVJvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJ2NvbXBhbnknLCBcbiAgICAgICAgY29tcG9uZW50OiBDb21wYW55Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW1N1cGVyYWRtaW5HdWFyZF0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IE1lbWJlcnNDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ21lbWJlcnMnLCBjb21wb25lbnQ6IE1lbWJlcnNDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3NhbGVzJywgY29tcG9uZW50OiBTYWxlc0NvbXBvbmVudCB9XG4gICAgICAgIF1cbiAgICB9XG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==