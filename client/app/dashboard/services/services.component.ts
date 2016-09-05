import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');
import { Subscription }   from 'rxjs/Subscription';

import { User } from '../../shared/types/user';
import { Service } from '../../shared/types/service';

import { AuthService } from '../../shared/services/auth.service';
import { ServiceService } from '../../shared/services/service.service';
import { SocketService } from '../../shared/services/socket.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-services',
    templateUrl: 'services.component.html',
    styleUrls: [
        '../dashboard.style.css',
        'services.style.css'
    ],
    providers: [SocketService, ServiceService]
})
export class ServicesComponent implements OnInit, OnDestroy {
    currentUser = User;

    emailError: boolean;
    sending: boolean;
    roleNotMatchService: boolean;

    modalActivated: boolean = false;
    activatedModal = {};
    activatedService = {};
    serviceDataList = {};
    arrayOfServiceKey = [];

    selectedService = {};
    subscription: Subscription;

    editPk: boolean = false;
    tempararyService = {};
    //Default value for a package
    newService = {
        package: 'app_regular1',
        price: 500,
        priceUnit: 'USD'
    };
    //Price limit changes based on currency
    priceLimit = 500;

    constructor(
        private router: Router,
        private authService: AuthService,
        private socket: SocketService,
        private service: ServiceService
    ) { }

    getCurrentUser() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        // get data from currentUser data
        this.getServices()
    }

    currencyChange(newCurrency: string) {
        switch(newCurrency){
            case 'USD':
                this.priceLimit = 500;
                if(this.newService.price < 500) {
                    this.newService.price = 500;
                }
            break;
            case 'RMB':
                this.priceLimit = 3000;
                if(this.newService.price < 3000) {
                    this.newService.price = 3000;
                }
            break;
            default:
            console.log('Unidentified Currency');
        }
    }

    checkRole(role: string, user: User) {
        // role is the required role to access the content
        // User's role must have higher or equal authority to this role
        if (user) {
            return this.authService.checkAuthority(role, user.role);
        } else {
            return false;
        }
    }

    resetErr(event: any) {
        this.roleNotMatchService = false;
        this.emailError = false;
    }

    generateDate(unix) {
        return moment(unix).format('ll');
    }

    generateTime(unix) {
        return moment(unix).format('LLL');
    }

    createService(newServiceData: any) {
        let self = this;
        console.log('create service');

        newServiceData.createrData = this.currentUser;
        if (newServiceData.student && newServiceData.student !== this.currentUser.email) {
            // Find student by email
            this.authService.getUserByEmail(newServiceData.student)
                .subscribe(
                user => {
                    if (user.role == 'student') {
                        // Add student to this student's service
                        newServiceData.studentData = user;
                        console.log('success service', newServiceData);
                        this.service.createService(newServiceData)
                            .subscribe(
                            createdService => {
                                console.log('createdService');
                                // need time out...
                                setTimeout(() => this.getCurrentUser(), 500);
                                self.toggleModal('', '', '', '')
                            },
                            error => {
                                console.log('createService failed: ', error);
                            });
                    } else {
                        console.log('Email is not student.');
                    }
                },
                error => {
                    console.log('Student is not found.');
                });
        } else {
            console.log('Please type in a student email.');
        }
        // let password = window.prompt(`Hi ${this.currentUser.name}(${this.currentUser.role}). Enter your password`);
        // if (password) {
        //     console.log('after prompt');
        //     this.authService.checkData('checkUserPassword', password)
        //         .subscribe(
        //         good => {
        //             // newServiceData.createrData = this.currentUser;
        //             // console.log('pw good. now check user email', newServiceData);
        //             // if (newServiceData.student && newServiceData.student !== this.currentUser.email) {
        //             //     // Find student by email
        //             //     this.authService.getUserByEmail(newServiceData.student)
        //             //         .subscribe(
        //             //         user => {
        //             //             if (user.role == 'student') {
        //             //                 // Add student to this student's service
        //             //                 newServiceData.studentData = user;
        //             //                 console.log('success service', newServiceData);
        //             //                 // this.service.createService(newServiceData)
        //             //                 //     .subscribe(
        //             //                 //     createdService => {
        //             //                 //         console.log('createdService');
        //             //                 //         // need time out...
        //             //                 //         setTimeout(() => this.getCurrentUser(), 500);
        //             //                 //         self.toggleModal('', '', '', '')
        //             //                 //     },
        //             //                 //     error => {
        //             //                 //         console.log('createService failed: ', error);
        //             //                 //     });
        //             //             } else {
        //             //                 console.log('Email is not student.');
        //             //             }
        //             //         },
        //             //         error => {
        //             //             console.log('Student is not found.');
        //             //         });
        //             // } else {
        //             //     console.log('Please type in a student email.');
        //             // }
        //         },
        //         error => {
        //             console.log('Wrong password!');
        //         });
        // } else {
        //     console.log('password needed');
        // }
    }

    toggleModal(title: string, state: string, behavior: string, attach: string) {
        // Reset data
        this.activatedModal = {};
        this.selectedService = {};

        // Set modal data
        this.activatedModal.title = title;
        this.activatedModal.state = state;
        this.activatedModal.behavior = behavior;

        // Toggle the modal
        this.modalActivated = !this.modalActivated;
    }

    getOneServce(serviceId: string) {
        console.log('Selected service id: ', serviceId);
        this.service.getOneService(serviceId)
            .subscribe(
            data => {
                console.log('Service details: ', data);
                if (!this.modalActivated) {
                    this.toggleModal('Service Details', 'details', 'update', '');
                }
                this.selectedService = data;
            },
            error => {
                console.log(error);
            });
    }

    getServices() {
        this.serviceDataList = this.currentUser.services;
        this.arrayOfServiceKey = Object.keys(this.serviceDataList);
        this.arrayOfServiceKey.reverse();
    }

    edit(formName: string) {
        this[formName] = !(this[formName]);
        this.getOneServce(this.selectedService._id);
        this.tempararyService = this.selectedService;
    }

    updateService(service) {
        let password = window.prompt(`Hi ${this.currentUser.name}(${this.currentUser.role}). Enter your password`);
        if (password) {
            this.authService.checkData('checkUserPassword', password)
                .subscribe(
                good => {
                    // make a request to update the service
                    // remember to push serviceId into related User's services array;
                    this.service.updateService(service)
                        .subscribe(
                        data => {
                            // console.log('Service updated: ', data);
                            setTimeout(() => {
                                this.getCurrentUser()
                            }, 300);
                            this.toggleModal('', '', '', '')
                            this.editPk = false;        
                        },
                        error => {
                            console.log(error);
                        });
                },
                error => {
                    console.log('Wrong password!');
                    this.editPk = false;
                });
        } else {
            console.log('password needed');
        }
    }

    ngOnInit() {
        this.getCurrentUser();
        this.getServices()
    }

    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }

}
