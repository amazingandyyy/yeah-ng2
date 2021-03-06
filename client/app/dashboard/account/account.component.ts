import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';
import { ServiceService } from '../../shared/services/service.service';
import { SocketService } from '../../shared/services/socket.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-account',
    templateUrl: 'account.component.html',
    styleUrls: ['../dashboard.style.css','account.style.css'],
    providers: [ SocketService, ServiceService]
})

export class AccountComponent implements OnInit, OnDestroy {
    currentUser: User;
    editAI: boolean;
    editGI: boolean;
    emailError: boolean;
    sending: boolean;
    roleNotMatchService: boolean;
    service = 'student';

    constructor(
        private router: Router,
        private authService: AuthService,
        private socket: SocketService,
        private servicePackage: ServiceService
    ) { }

    generateTime(unix) {
        return moment(unix).format('LLL');
    }

    generateDate(unix) {
        return moment(unix).format('LL');
    }

    getCurrentUser() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    }

    updateCurrentUser(value: any, cardName: string) {
        // Send updated user object to backend
        let self = this;
        
        this.authService.updateCurrentUser(value)
            .subscribe(
                res => handleResponse(res),
                err => console.log('err @updateUser: ', err)
            )

        function handleResponse(res) {
            // After saving successfully Close the specific card(form)
            self[cardName] = !(self[cardName]);
            self.getCurrentUser()
        }
    }

    edit(cardName: string) {
        this[cardName] = !(this[cardName]);
        this.getCurrentUser();
    }

    checkRole(role: string, user: User) {
        // role is the required role to access the content
        // User's role must have higher or equal authority to this role
        if(user) {
            return this.authService.checkAuthority(role, user.role);
        } else {
            return false;
        }
    }

    resetErr(event: any) {
        this.roleNotMatchService = false;
        this.emailError = false;
    }

    addService(email: string, service:string) {
        if(email) {
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
                if(user.role === service) {
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

    ngOnInit() {
        this.getCurrentUser();
        this.socket.syncById('user', this.currentUser._id, (user) => {
            this.getCurrentUser();
        });
    }

    ngOnDestroy() {
        this.socket.unsyncById('user', this.currentUser._id);
    }
}
