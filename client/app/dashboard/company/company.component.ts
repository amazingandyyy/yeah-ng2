import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService, AdminService } from '../../shared/services/index';

@Component({
    moduleId: module.id,
    selector: 'yeah-company',
    templateUrl: 'company.component.html',
    styleUrls: ['company.style.css'],
    providers: [AuthService, AdminService]
})
export class CompanyComponent implements OnInit {
    private currentUser = {};
    private userDataList = {};
    private arrayOfUsersKeys = [];

    constructor(
        private router: Router,
        private authService: AuthService,
        private adminService: AdminService
    ) { }

    getUser() {
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
    
    getUsers() {
        this.adminService.getAllUsers()
            .subscribe(
            users => {
                console.log('All Users: ', users);
                this.userDataList = users;
                this.arrayOfUsersKeys = Object.keys(users);
            },
            error => {
                this.authService.logUserOut();
                console.log(<any>error)
            });
    }

    renderLLT(unix){
        return moment(unix).format('LLL');
    }


    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getUser();
    }
}
