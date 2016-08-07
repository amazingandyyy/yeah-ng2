import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.style.css'],
    providers: [ AuthService ]
})
export class AccountComponent implements OnInit{
    currentUser = {};
        
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    createAt(unix) {
        return moment(unix).format('LLL');
    }

    getUser() {
        this.authService.getCurrentUser()
            .subscribe(
                user => this.currentUser = user,
                error => console.log(<any>error));
    }

    ngOnInit(){
        if(!JSON.parse(localStorage.getItem('current_user'))){
            this.router.navigate(['/login']);
        } else {
            console.log('check currentUser data', JSON.parse(localStorage.getItem('current_user')) );
            this.currentUser = JSON.parse(localStorage.getItem('current_user'));
            // this.getUser();
            
        }
    }
}
