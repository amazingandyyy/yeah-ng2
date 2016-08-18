System.register(['../shared/services/guard/checkin-guard.service', './login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var checkin_guard_service_1, login_component_1;
    var LoginRoutes;
    return {
        setters:[
            function (checkin_guard_service_1_1) {
                checkin_guard_service_1 = checkin_guard_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            exports_1("LoginRoutes", LoginRoutes = [
                {
                    path: 'login',
                    component: login_component_1.LoginComponent,
                    canActivate: [checkin_guard_service_1.CheckinGuard]
                }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBTWEsV0FBVzs7Ozs7Ozs7OztZQUFYLHlCQUFBLFdBQVcsR0FBaUI7Z0JBQ3ZDO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLFNBQVMsRUFBRSxnQ0FBYztvQkFDekIsV0FBVyxFQUFFLENBQUMsb0NBQVksQ0FBQztpQkFDNUI7YUFDRixDQUFBLENBQUEiLCJmaWxlIjoibG9naW4vbG9naW4ucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2hlY2tpbkd1YXJkIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2d1YXJkL2NoZWNraW4tZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IExvZ2luUm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXG4gIHtcbiAgICBwYXRoOiAnbG9naW4nLFxuICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGU6IFtDaGVja2luR3VhcmRdXG4gIH1cbl0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
