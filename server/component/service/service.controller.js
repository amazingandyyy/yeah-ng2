'use strict';

const Service = require('./service.model');
const Notification = require('../notification/notification.model');
const _ = require('lodash');

exports.index = function(req, res) {
	res.render('index');
};
//Here's the method to get Services
exports.getServices = function(req, res) {
    //Using $or to make this method reusable for any role
    //This should get any service that the user has part in
	Service.find({$or:[
        {'participants.student.userData': req.user._id},
        {'participants.advisor.userData': req.user._id}, 
        {'participants.supervisor.userData': req.user._id},
        {'participants.admin.userData': req.user._id}
    ]}, function(err, notices) {
		if(err) { return handleError(res, err); }
		return res.status(201).json(notices);
	});
};

exports.createService = function (req, res) {
    console.log(req.body);

    let body = req.body;
    let from = body.createrData;
    let to = body.studentData;

    let service = {
        package: body.package,
        price: {
            tag: body.price,
            unit: body.priceUnit
        }
    };

    //Add participants to the service object
    service.participants = {
        student: {
            userData: to._id
        },
        advisor: {},
        supervisor: {},
        admin: {}
    };

    service.participants[from.role].userData = from._id;


    Service.create(service, (err, savedService) => {
        if (err) return handleError(res, err + '@ServiceCtrl Service.create');
        let notice = {
            from: from._id,
            to: to._id,
            title: 'New service created by ' + from.name,
            description: 'Your ' + from.role + ' just created a yeah service for you.',
            response: false,
            state: 'invitation',
            attachment: {
                service: savedService._id
            }
        };
        Notification.create(notice, (err, savedNotice) => {
            if (err) return handleError(res, err + '@ServiceCtrl Notification.create');
            return res.status(200).json(savedService);
        });
    });
        // // Create and send out notification here
        // //Attach service package id to notification for easier query
        // notice.serviceId = savedService._id;
        
        // Notification.sendNotice(notice, (err, savedNotice) => {
        //     if (err) {
        //         console.log('error @sendNotice: ', err)
        //         return handleError(res, err);
        //     }
        //     return res.status(200).json(savedService);
        // });


    // let newServiceData = req.body;
    // let isAuthorized = checkAuthority('admin', req.role) && (req.role!=='superadmin');
    // let priceLimit;
    // switch(newServiceData.priceUnit){
    //     case 'RMB':
    //         priceLimit = 3000.00
    //         break
    //     case 'USD':
    //         priceLimit = 500.00
    //         break
    //     default:
    //         priceLimit = 500.00
    // }
    // let priceIsFine = newServiceData.price > priceLimit;
    // if (!isAuthorized) {
    //     // block out if the user is not authorized
    //     return res.status(401).send({ error: 'You are not authorized.' })
    // }
    // if (!priceIsFine) {
    //     // block out if the price is not good
    //     return res.status(409).send({ error: 'Price is not good.' })
    // }
    // if (isAuthorized && priceIsFine) {
    //     let from = newServiceData.createrData;
    //     let to = newServiceData.studentData;
    //     let service = {
    //         participants: {
    //             student: {},
    //             advisor: {},
    //             supervisor: {},
    //             admin: {}
    //         },
    //         price: {
    //             tag: newServiceData.price,
    //             unit: newServiceData.priceUnit
    //         },
    //         package: newServiceData.package,
    //     };
        
        
    //     let notice = {
    //         title: 'New service created by ' + from.name,
    //         desc: 'Your ' + from.role + ' just created a yeah service for you.',
    //         res: false,
    //         state: 'invitation'
    //     }
    //     // Add both user according to his/her role
    //     if (from && to) {
    //         // let superadmin can create package
    //         service.participants[from.role].userData = from._id;
    //         notice.from = from._id;
    //         service.participants[to.role].userData = to._id;
    //         notice.to = to._id;
    //         // Attach service package id to notification for easier query
    //     } else {
    //         return handleError(res, err);
    //     }
    //     // TO DO: Should check if this kind of service package already exist
    //     Service.create(service, (err, savedService) => {
    //         if (err) return handleError(res, err);
    //         User.findById(from._id, (err, dbUser)=>{
    //            if (err) return handleError(res, err);
    //             dbUser.services.push(savedService._id)
    //             dbUser.save((err, savedUser)=>{
    //                 if (err) return handleError(res, err);
    //                 // Create and send out notification here
    //                 notice.serviceId = savedService._id
    //                 Notification.sendNotice(notice, (err, savedNotice) => {
    //                     if (err) {
    //                         console.log('error @sendNotice: ', err)
    //                         return handleError(res, err);
    //                     }
    //                     return res.status(200).json(savedService);
    //                 });
    //             })
    //         })
    //         // // Create and send out notification here
    //         // //Attach service package id to notification for easier query
    //         // notice.serviceId = savedService._id;
            
    //         // Notification.sendNotice(notice, (err, savedNotice) => {
    //         //     if (err) {
    //         //         console.log('error @sendNotice: ', err)
    //         //         return handleError(res, err);
    //         //     }
    //         //     return res.status(200).json(savedService);
    //         // });
    //     });
    // } else {
    //     return res.status(401).send({ error: 'You are not authorized.' })
    // }
};

exports.getOneService = function (req, res) {
    // if (checkAuthority('student', req.role)) {
        let serviceId = req.params.serviceId;
        Service.getOneService(serviceId, (err, data) => {
            if (err) return handleError(res, err)
            return res.status(200).send(data)
        })
    // }
}

exports.updateService = function (req, res) {
    // if (checkAuthority('admin', req.role)) {
        let service = req.body;
        Service.updateService(service, (err, data) => {
            if (err) return handleError(res, err)
            return res.status(200).send(data)
        })
    // }
}


function handleError(res, err) {
  console.log(err);
  return res.status(500).send(err);
}