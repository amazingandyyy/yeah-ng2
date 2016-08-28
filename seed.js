/**
 * Populate DB with sample data on server start
 */
/*
1 Superadmin
1 Admin
1 Supervisor
5 Advisors
5 Students

*/

'use strict';

const bcrypt = require('bcryptjs');
const async = require('async');//http://caolan.github.io/async/docs.html

const User = require('./server/component/user/models/user.model');
const Student = require('./server/component/user/models/student.model');
const Advisor = require('./server/component/user/models/advisor.model');
const Supervisor = require('./server/component/user/models/supervisor.model');
const Admin = require('./server/component/user/models/admin.model');
const Superadmin = require('./server/component/user/models/superadmin.model');
const Service = require('./server/component/service/service.model');
const Notification = require('./server/component/notification/notification.model');

//Need to use pw hasing here. 
function hashPw(pw, cb) {
    bcrypt.hash(pw, 12, (err, hash) => {
        if (err) return console.log('Err @hashPw: ', err);
        cb(hash);
    });
};

async.waterfall([
    function(callback) {
        //Clear out everything in DB first
        async.parallel([
            function(clearUserCb) {
                User.find({}).remove(function() {
                    clearUserCb(null);
                });//.remove ends
            },
            function(clearStudentCb) {
                Student.find({}).remove(function() {
                    clearStudentCb(null);
                });//.remove ends
            },
            function(clearAdvisorCb) {
                Advisor.find({}).remove(function() {
                    clearAdvisorCb(null);
                });//.remove ends
            },
            function(clearSupervisorCb) {
                Supervisor.find({}).remove(function() {
                    clearSupervisorCb(null);
                });//.remove ends
            },
            function(clearAdminCb) {
                Admin.find({}).remove(function() {
                    clearAdminCb(null);
                });//.remove ends
            },
            function(clearSuperadminCb) {
                Superadmin.find({}).remove(function() {
                    clearSuperadminCb(null);
                });//.remove ends
            },
            function(clearServiceCb) {
                Service.find({}).remove(function() {
                    clearServiceCb(null);
                });//.remove ends
            },
            function(clearNotificationCb) {
                Notification.find({}).remove(function() {
                    clearNotificationCb(null);
                });//.remove ends
            }
        ],
        // optional callback
        function(err) {
            callback(null);
        });
    },
    function(callback) {
        //Creating users here
        let superadmin = new Superadmin({});
          superadmin.save();
          let admin = new Admin({});
          admin.save();
          let supervisor = new Supervisor({});
          supervisor.save();
          
          //Super simple pw to speed up testing, pw is same for all user
          hashPw('1234', function(hashPw) {
            let count = 0;
            //This saving the advisors and students to generate service and notification
            let advisors =[];
            let students = [];
            //For multiple students and advisor
            async.whilst(
                function() { return count < 5; },
                function(whilstCb) {
                    count++;
                    let advisor = new Advisor({});
                    advisor.save();

                    let student = new Student({});
                    student.save();

                    User.create({
                        email: {
                            data: 'advisor' + count + '@advisor.com',
                            verified: true
                        },
                        password: hashPw,
                        name: 'Advisor Guy' + count,
                        photo: {
                            url: 'http://lorempixel.com/100/100/people/'
                        },
                        role: 'advisor',
                        advisorData: advisor._id
                    }, {
                         email: {
                            data: 'student' + count + '@student.com',
                            verified: true
                        },
                        password: hashPw,
                        name: 'Student Guy' + count,
                        photo: {
                            url: 'http://lorempixel.com/100/100/people/'
                        },
                        role: 'student',
                        studentData: student._id
                    }, function(err, student, advisor) {
                        students.push(student);
                        advisors.push(advisor);
                        whilstCb(null, students, advisors);

                    });//.create ends
                },
                //Final cb of whilst
                function (err, advisors, students) {
                    User.create({
                            email: {
                                data: 'superadmin@superadmin.com',
                                verified: true
                            },
                            password: hashPw,
                            name: 'Superadmin Guy',
                            photo: {
                                url: 'http://lorempixel.com/100/100/people/'
                            },
                            role: 'superadmin',
                            superadminData: superadmin._id
                        }, {
                            email: {
                                data: 'admin@admin.com',
                                verified: true
                            },
                            password: hashPw,
                            name: 'Admin Guy',
                            photo: {
                                url: 'http://lorempixel.com/100/100/people/'
                            },
                            role: 'admin',
                            adminData: admin._id
                        }, {
                            email: {
                                data: 'supervisor@supervisor.com',
                                verified: true
                            },
                            password: hashPw,
                            name: 'Supervisor Guy',
                            photo: {
                                url: 'http://lorempixel.com/100/100/people/'
                            },
                            role: 'supervisor',
                            supervisorData: supervisor._id
                        }, function(err, superadmin, admin, supervisor) {
                              console.log('finished populating users');

                              callback(null, superadmin, admin, supervisor, advisors, students);
                            });  
                }//Final cb of whilst ends
            );
               
          });//hashPw callback ends
    },
    function(superadmin, admin, supervisor, advisors, students, callback) {
        Notification.create({
            from: advisors[0]._id,
            to: students[0]._id,
            title: 'Assignment1',
            description: 'Work work',
            response: false,
            state: 'message'
        }, function(err) {
            callback(null, 'done');
        });



        /*---------------------------------------------------*/
        //Create service here
        // .create() does not trigger mongoose relationship here, so using .save() instead
        // let newService = new Service({
        //     package: 'app_regular1',
        //     price: {
        //         tag: '5000',
        //         unit: 'usd'
        //     },
        //     participants: {
        //         student: {
        //             userData: students[0]._id
        //         },
        //         advisor: {
        //             userData: advisors[0]._id
        //         },
        //         supervisor: {
        //             userData: supervisor._id
        //         },
        //         admin: {
        //             userData: admin._id
        //         }
        //     }
        // });
        // newService.save();

        // Service.create({
        //     package: 'app_regular1',
        //     price: {
        //         tag: '5000',
        //         unit: 'usd'
        //     },
        //     participants: {
        //         student: {
        //             userData: students[0]._id
        //         },
        //         advisor: {
        //             userData: advisors[0]._id
        //         },
        //         supervisor: {
        //             userData: supervisor._id
        //         },
        //         admin: {
        //             userData: admin._id
        //         }
        //     }
        // }, function(err) {
        //     callback(null, 'done');
        // });

        // let newService1 = new Service({
        //     package: 'app_regular2',
        //     price: {
        //         tag: '3000',
        //         unit: 'usd'
        //     },
        //     participants: {
        //         student: {
        //             userData: students[1]._id
        //         },
        //         advisor: {
        //             userData: advisors[1]._id
        //         }
        //     }
        // });
        // newService1.save();

        // let newService2 = new Service({
        //     package: 'app_regular3',
        //     price: {
        //         tag: '4000',
        //         unit: 'usd'
        //     },
        //     participants: {
        //         student: {
        //             userData: students[2]._id
        //         },
        //         advisor: {
        //             userData: advisors[2]._id
        //         }
        //     }
        // });
        // newService2.save();

        // let newService3 = new Service({
        //     package: 'app_guarantee1',
        //     price: {
        //         tag: '6000',
        //         unit: 'usd'
        //     },
        //     participants: {
        //         student: {
        //             userData: students[3]._id
        //         },
        //         advisor: {
        //             userData: advisors[3]._id
        //         }
        //     }
        // });
        // newService3.save();

        // let newService4 = new Service({
        //     package: 'app_guarantee2',
        //     price: {
        //         tag: '7000',
        //         unit: 'usd'
        //     },
        //     participants: {
        //         student: {
        //             userData: students[3]._id
        //         },
        //         advisor: {
        //             userData: advisors[3]._id
        //         }
        //     }
        // });
        // newService4.save();

       
    }
], function (err, result) {
    // result now equals 'done'
});








