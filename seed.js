/**
 * Populate DB with sample data on server start
 */
'use strict';

var User = require('./server/component/user/models/user.model');

//Need to use pw hasing here. 

// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     role: 'manager',
//     name: '林小胖',
//     email: 'fat@fat.com',
//     password: 'fat',
//     position: 'C-中鋒',
//     jerseynumber: 65,
//     height: 170,
//     weight: 80,
//     birthday: new Date('01/01/1990')
//   }, function() {
//       console.log('finished populating users');
//       User.findOne({ name: 'Admin'}, function(err, user) {
//         Point.create({Points: 100000, User: user._id}, function(err, point) {
//           console.log('points added to', user.name);
//         });
//       });
//     }
//   );
// });






