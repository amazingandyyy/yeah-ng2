import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-pipe',
    templateUrl: 'pipe.component.html',
    styleUrls: ['pipe.style.css'],
    providers: [AuthService]
})
export class PipeComponent implements OnInit {
    currentUser = {};

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    getCurrentUser() {
        // console.log( this.authService.currentUser);
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(
            user => this.currentUser = user,
            error => {
                this.authService.logUserOut();
                console.log(<any>error)
            });
    }

    ngOnInit() {
        // console.log('check currentUser data', JSON.parse(localStorage.getItem('current_user')));
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getCurrentUser();
    }
}
