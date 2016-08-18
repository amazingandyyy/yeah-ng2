System.register(['./auth.service', './admin.service', './superadmin.service', './user-data.service', './socket.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (auth_service_1_1) {
                exportStar_1(auth_service_1_1);
            },
            function (admin_service_1_1) {
                exportStar_1(admin_service_1_1);
            },
            function (superadmin_service_1_1) {
                exportStar_1(superadmin_service_1_1);
            },
            function (user_data_service_1_1) {
                exportStar_1(user_data_service_1_1);
            },
            function (socket_service_1_1) {
                exportStar_1(socket_service_1_1);
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
