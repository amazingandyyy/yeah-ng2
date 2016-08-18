System.register(['./login-guard.service', './admin-guard.service', './superadmin-guard.service', './checkin-guard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var login_guard_service_1, admin_guard_service_1, superadmin_guard_service_1, checkin_guard_service_1;
    var GuardProviders;
    var exportedNames_1 = {
        'GuardProviders': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (login_guard_service_2_1) {
                exportStar_1(login_guard_service_2_1);
                login_guard_service_1 = login_guard_service_2_1;
            },
            function (admin_guard_service_2_1) {
                exportStar_1(admin_guard_service_2_1);
                admin_guard_service_1 = admin_guard_service_2_1;
            },
            function (superadmin_guard_service_2_1) {
                exportStar_1(superadmin_guard_service_2_1);
                superadmin_guard_service_1 = superadmin_guard_service_2_1;
            },
            function (checkin_guard_service_1_1) {
                checkin_guard_service_1 = checkin_guard_service_1_1;
            }],
        execute: function() {
            exports_1("GuardProviders", GuardProviders = [login_guard_service_1.LoginGuard, admin_guard_service_1.AdminGuard, checkin_guard_service_1.CheckinGuard, superadmin_guard_service_1.SuperadminGuard]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ndWFyZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBU2EsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBZCw0QkFBQSxjQUFjLEdBQUcsQ0FBQyxnQ0FBVSxFQUFFLGdDQUFVLEVBQUUsb0NBQVksRUFBRSwwQ0FBZSxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvZ3VhcmQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2xvZ2luLWd1YXJkLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hZG1pbi1ndWFyZC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3VwZXJhZG1pbi1ndWFyZC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTG9naW5HdWFyZCB9ICAgICAgICBmcm9tICcuL2xvZ2luLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRtaW5HdWFyZCB9ICAgICAgICBmcm9tICcuL2FkbWluLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3VwZXJhZG1pbkd1YXJkIH0gICBmcm9tICcuL3N1cGVyYWRtaW4tZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja2luR3VhcmQgfSAgICAgIGZyb20gJy4vY2hlY2tpbi1ndWFyZC5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEd1YXJkUHJvdmlkZXJzID0gW0xvZ2luR3VhcmQsIEFkbWluR3VhcmQsIENoZWNraW5HdWFyZCwgU3VwZXJhZG1pbkd1YXJkXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
