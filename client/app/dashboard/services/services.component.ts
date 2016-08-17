import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';
import { ServicePackageService } from '../../shared/services/service.package.service';
import { SocketService } from '../../shared/services/socket.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-services',
    templateUrl: 'services.component.html',
    styleUrls: ['services.style.css'],
    providers: [AuthService, SocketService, ServicePackageService]
})
export class ServicesComponent implements OnInit {
    currentUser = {};
    emailError: boolean;
    sending: boolean;
    roleNotMatchService: boolean;
    service = 'student';
    modalActivated: boolean = false;
    activatedModal = {};
    activatedService = {}

    constructor(
        private router: Router,
        private authService: AuthService,
        private socket: SocketService,
        private servicePackage: ServicePackageService
    ) { }

    getCurrentUser() {
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(
            user => this.currentUser = user,
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

    addService(email: string, service: string) {
        if (email) {
            let data = {
                currentUser: this.currentUser,
                userToAdd: {}
            };
            let self = this;
            this.sending = true;
            //Find user by email

            this.authService.getUserByEmail(email)
                .subscribe(
                user => {
                    //Check if this user has the role for the intended service
                    if (user.role === service) {
                        data.userToAdd = user;
                        //Add user to this user's service
                        this.servicePackage.createService(data)
                            .subscribe(
                            user => {
                                console.log('service created');
                                self.sending = false;
                            },
                            error => {
                                console.log(error);
                            });
                    } else {
                        self.roleNotMatchService = true;
                        self.sending = false;
                    }
                },
                error => {
                    self.emailError = true;
                    self.sending = false;
                });
        }
    }

    createService(newServiceData: any){
        console.log('newServiceData: ', newServiceData);
    }

    toggleModal(title: string, state: string, behavior, attach: string) {
        this.activatedModal.title = title;
        this.activatedModal.state = state;
        this.activatedModal.behavior = behavior;
        this.modalActivated = !this.modalActivated
    }

    getServices() {
        console.log('getServices');
        
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getCurrentUser();
        this.getServices()
    }
}
