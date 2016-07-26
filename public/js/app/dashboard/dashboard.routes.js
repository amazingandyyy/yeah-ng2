"use strict";var dashboard_component_1=require("./dashboard.component"),payment_component_1=require("./payment/payment.component"),plans_component_1=require("./plans/plans.component"),start_component_1=require("./plans/start.component"),create_component_1=require("./plans/create.component"),account_component_1=require("./account/account.component"),auth_guard_service_1=require("../shared/services/auth-guard.service");exports.dashboardRoutes=[{path:"dashboard",component:dashboard_component_1.DashboardComponent,canActivate:[auth_guard_service_1.LoginGuard],children:[{path:"",component:dashboard_component_1.DashboardComponent},{path:"payment",component:payment_component_1.PaymentComponent},{path:"plans",component:plans_component_1.PlansComponent,CanActivate:[auth_guard_service_1.LoginGuard],children:[{path:"",component:start_component_1.StartComponent},{path:"create",component:create_component_1.CreateComponent}]},{path:"account",component:account_component_1.AccountComponent}]}];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQucm91dGVzLmpzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5yb3V0ZXMudHMiXSwibmFtZXMiOlsiZGFzaGJvYXJkX2NvbXBvbmVudF8xIiwicmVxdWlyZSIsInBheW1lbnRfY29tcG9uZW50XzEiLCJwbGFuc19jb21wb25lbnRfMSIsInN0YXJ0X2NvbXBvbmVudF8xIiwiY3JlYXRlX2NvbXBvbmVudF8xIiwiYWNjb3VudF9jb21wb25lbnRfMSIsImF1dGhfZ3VhcmRfc2VydmljZV8xIiwiZXhwb3J0cyIsImRhc2hib2FyZFJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJEYXNoYm9hcmRDb21wb25lbnQiLCJjYW5BY3RpdmF0ZSIsIkxvZ2luR3VhcmQiLCJjaGlsZHJlbiIsIlBheW1lbnRDb21wb25lbnQiLCJQbGFuc0NvbXBvbmVudCIsIkNhbkFjdGl2YXRlIiwiU3RhcnRDb21wb25lbnQiLCJDcmVhdGVDb21wb25lbnQiLCJBY2NvdW50Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxZQ0VBLElBQUFBLHVCQUFBQyxRQUFtQyx5QkFFbkNDLG9CQUFBRCxRQUFpQywrQkFDakNFLGtCQUFBRixRQUErQiwyQkFDL0JHLGtCQUFBSCxRQUErQiwyQkFDL0JJLG1CQUFBSixRQUFnQyw0QkFDaENLLG9CQUFBTCxRQUFpQywrQkFDakNNLHFCQUFBTixRQUEyQix3Q0FFZE8sU0FBQUMsa0JBRVRDLEtBQU0sWUFDTkMsVUFBV1gsc0JBQUFZLG1CQUNYQyxhQUFjTixxQkFBQU8sWUFDZEMsV0FDSUwsS0FBTSxHQUFJQyxVQUFXWCxzQkFBQVkscUJBQ3JCRixLQUFNLFVBQVdDLFVBQVdULG9CQUFBYyxtQkFDNUJOLEtBQU0sUUFDTkMsVUFBV1Isa0JBQUFjLGVBQ1hDLGFBQWNYLHFCQUFBTyxZQUNkQyxXQUNJTCxLQUFNLEdBQUlDLFVBQVdQLGtCQUFBZSxpQkFDckJULEtBQU0sU0FBVUMsVUFBV04sbUJBQUFlLG9CQUcvQlYsS0FBTSxVQUFXQyxVQUFXTCxvQkFBQWUiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBkYXNoYm9hcmRfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2Rhc2hib2FyZC5jb21wb25lbnQnKTtcbnZhciBwYXltZW50X2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9wYXltZW50L3BheW1lbnQuY29tcG9uZW50Jyk7XG52YXIgcGxhbnNfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL3BsYW5zL3BsYW5zLmNvbXBvbmVudCcpO1xudmFyIHN0YXJ0X2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9wbGFucy9zdGFydC5jb21wb25lbnQnKTtcbnZhciBjcmVhdGVfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL3BsYW5zL2NyZWF0ZS5jb21wb25lbnQnKTtcbnZhciBhY2NvdW50X2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9hY2NvdW50L2FjY291bnQuY29tcG9uZW50Jyk7XG52YXIgYXV0aF9ndWFyZF9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlJyk7XG5leHBvcnRzLmRhc2hib2FyZFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICdkYXNoYm9hcmQnLFxuICAgICAgICBjb21wb25lbnQ6IGRhc2hib2FyZF9jb21wb25lbnRfMS5EYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbYXV0aF9ndWFyZF9zZXJ2aWNlXzEuTG9naW5HdWFyZF0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IGRhc2hib2FyZF9jb21wb25lbnRfMS5EYXNoYm9hcmRDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3BheW1lbnQnLCBjb21wb25lbnQ6IHBheW1lbnRfY29tcG9uZW50XzEuUGF5bWVudENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAncGxhbnMnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcGxhbnNfY29tcG9uZW50XzEuUGxhbnNDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgQ2FuQWN0aXZhdGU6IFthdXRoX2d1YXJkX3NlcnZpY2VfMS5Mb2dpbkd1YXJkXSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IHN0YXJ0X2NvbXBvbmVudF8xLlN0YXJ0Q29tcG9uZW50IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ2NyZWF0ZScsIGNvbXBvbmVudDogY3JlYXRlX2NvbXBvbmVudF8xLkNyZWF0ZUNvbXBvbmVudCB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2FjY291bnQnLCBjb21wb25lbnQ6IGFjY291bnRfY29tcG9uZW50XzEuQWNjb3VudENvbXBvbmVudCB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuIiwiaW1wb3J0IHsgUm91dGVyQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxhbnNDb21wb25lbnQgfSBmcm9tICcuL3BsYW5zL3BsYW5zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGFydENvbXBvbmVudCB9IGZyb20gJy4vcGxhbnMvc3RhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IENyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcGxhbnMvY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9hY2NvdW50L2FjY291bnQuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luR3VhcmQgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IGRhc2hib2FyZFJvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICB7XG4gICAgcGF0aDogJ2Rhc2hib2FyZCcsXG4gICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGU6IFtMb2dpbkd1YXJkXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3BheW1lbnQnLCBjb21wb25lbnQ6IFBheW1lbnRDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3BsYW5zJywgXG4gICAgICAgIGNvbXBvbmVudDogUGxhbnNDb21wb25lbnQsIFxuICAgICAgICBDYW5BY3RpdmF0ZTogW0xvZ2luR3VhcmRdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogU3RhcnRDb21wb25lbnQgfSxcbiAgICAgICAgICB7IHBhdGg6ICdjcmVhdGUnLCBjb21wb25lbnQ6IENyZWF0ZUNvbXBvbmVudCB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7IHBhdGg6ICdhY2NvdW50JywgY29tcG9uZW50OiBBY2NvdW50Q29tcG9uZW50IH1cbiAgICBdXG4gIH1cbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
