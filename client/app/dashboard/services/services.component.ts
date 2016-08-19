import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';
import { ServiceService } from '../../shared/services/service.service';
import { SocketService } from '../../shared/services/socket.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-services',
    templateUrl: 'services.component.html',
    styleUrls: ['services.style.css'],
    providers: [AuthService, SocketService, ServiceService]
})
export class ServicesComponent implements OnInit {
    currentUser = {};

    emailError: boolean;
    sending: boolean;
    roleNotMatchService: boolean;

    modalActivated: boolean = false;
    activatedModal = {};
    activatedService = {};
    serviceDataList = {};
    arrayOfServiceKey = [];

    selectedService = {};

    constructor(
        private router: Router,
        private authService: AuthService,
        private socket: SocketService,
        private service: ServiceService
    ) { }

    getCurrentUser() {
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(
            user => {
                this.currentUser = user
                this.getServices()
            },
            error => {
                this.authService.logUserOut();
                console.log(<any>error)
            });
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

    // addService(email: string, service: string) {
    //     if (email) {
    //         let data = {
    //             currentUser: this.currentUser,
    //             userToAdd: {}
    //         };
    //         let self = this;
    //         this.sending = true;
    //         //Find user by email

    //         this.authService.getUserByEmail(email)
    //             .subscribe(
    //             user => {
    //                 //Check if this user has the role for the intended service
    //                 if (user.role === service) {
    //                     data.userToAdd = user;
    //                     //Add user to this user's service
    //                     this.service.createService(data)
    //                         .subscribe(
    //                         user => {
    //                             console.log('service created');
    //                             self.sending = false;
    //                         },
    //                         error => {
    //                             console.log(error);
    //                         });
    //                 } else {
    //                     self.roleNotMatchService = true;
    //                     self.sending = false;
    //                 }
    //             },
    //             error => {
    //                 self.emailError = true;
    //                 self.sending = false;
    //             });
    //     }
    // }

    createService(newServiceData: any){
        let self = this;
        newServiceData.createrData = this.currentUser;
        if (newServiceData.student && newServiceData.student !== this.currentUser.email) {
            // Find student by email
            this.authService.getUserByEmail(newServiceData.student)
                .subscribe(
                user => {
                    if (user.role == 'student') {
                        // Add user to this user's service
                        newServiceData.studentData = user;
                        this.service.createService(newServiceData)
                            .subscribe(
                            data => {
                                console.log('Service created: ', data);
                                self.toggleModal('','','','')
                            },
                            error => {
                                console.log(error);
                            });
                    }
                },
                error => {
                    console.log('Student is not found.');
                });
        }
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

    getOneServce(serviceId: string){
        console.log('Selected service id: ', serviceId);
        this.service.getOneService(serviceId)
            .subscribe(
            data => {
                console.log('Service created: ', data);
                this.toggleModal('Service Details', 'details', 'update','');
                this.selectedService = data;
            },
            error => {
                console.log(error);
            });
    }

    getServices() {
        this.serviceDataList = this.currentUser[`${this.currentUser.role}Data`].services;
        console.log(Array.isArray(this.serviceDataList));
        this.arrayOfServiceKey = Object.keys(this.serviceDataList);
        this.arrayOfServiceKey.reverse();
        console.log(this.arrayOfServiceKey);
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getCurrentUser();
    }
}
