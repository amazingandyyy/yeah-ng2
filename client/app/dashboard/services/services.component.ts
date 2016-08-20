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
    styleUrls: [
        '../dashboard.style.css',
        'services.style.css'
    ],
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
                console.log('current user data: ', user);
                this.currentUser = user;
                if (this.currentUser.services[0]) {
                    console.log('get services');
                    this.getServices()
                } else {
                    console.log('no services yet');
                }
            },
            error => {
                // this.authService.logUserOut();
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

    generateTime(unix) {
        return moment(unix).format('LLL');
    }

    createService(newServiceData: any) {
        let self = this;
        newServiceData.createrData = this.currentUser;
        if (newServiceData.student && newServiceData.student !== this.currentUser.email) {
            // Find student by email
            this.authService.getUserByEmail(newServiceData.student)
                .subscribe(
                user => {
                    if (user.role == 'student') {
                        // Add student to this student's service
                        newServiceData.studentData = user;
                        this.service.createService(newServiceData)
                            .subscribe(
                            data => {
                                console.log('Service created: ', data);
                                this.getCurrentUser()
                                self.toggleModal('', '', '', '')
                            },
                            error => {
                                console.log(error);
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
                this.toggleModal('Service Details', 'details', 'update', '');
                this.selectedService = data;
            },
            error => {
                console.log(error);
            });
    }

    getServices() {
        this.serviceDataList = this.currentUser.services;
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
