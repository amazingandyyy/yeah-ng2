import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.style.css'],
    providers: [AuthService]
})
export class AccountComponent implements OnInit {
    currentUser = {};
    editGI: boolean;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    generateTime(unix) {
        return moment(unix).format('LLL');
    }

    generateDate(unix) {
        return moment(unix).format('LL');
    }

    getUser() {
        console.log(this.authService.isLoggedIn);
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

    onSubmit(value: any) {
        //Send updated user object to backend
        console.log('clicked', value);
        
        this.authService.updateUser(value);
    }

    edit(cardName: string) {
        this[cardName] = !(this[cardName]);
    }

    ngOnInit() {
        // console.log('check currentUser data', JSON.parse(localStorage.getItem('current_user')));
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getUser();
    }
}
