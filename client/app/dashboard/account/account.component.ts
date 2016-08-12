import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';
import { SocketService } from '../../shared/services/socket.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.style.css'],
    providers: [AuthService, SocketService]
})
export class AccountComponent implements OnInit {
    currentUser = {};
    editGI: boolean;

    constructor(
        private router: Router,
        private authService: AuthService,
        private socket: SocketService
    ) { }

    generateTime(unix) {
        return moment(unix).format('LLL');
    }

    generateDate(unix) {
        return moment(unix).format('LL');
    }

    getCurrentUser() {
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(
            user => {
                this.currentUser = user
            },
            error => {
                this.authService.logUserOut();
                console.log(<any>error);
            });
    }

    onSubmit(value: any, cardName: string) {
        // Send updated user object to backend
        let self = this;
        
        this.authService.updateUser(value)
            .subscribe(
                res => handleResponse(res),
                err => console.log('err @updateUser: ', err)
            )

        function handleResponse(res) {
            // After saving successfully Close the specific card(form)
            self[cardName] = !(self[cardName]);
        }
    }

    edit(cardName: string) {
        this[cardName] = !(this[cardName]);
    }

    ngOnInit() {
        let self = this;
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getCurrentUser();
        this.socket.syncById('user', this.currentUser._id, function(user) {
            self.currentUser = user;
        });
    }
}
