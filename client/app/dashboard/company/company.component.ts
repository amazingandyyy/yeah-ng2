import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService, AdminService, UserDataService } from '../../shared/services/index';

@Component({
    moduleId: module.id,
    selector: 'yeah-company',
    templateUrl: 'company.component.html',
    styleUrls: ['company.style.css'],
    providers: [AuthService, AdminService, UserDataService]
})
export class CompanyComponent implements OnInit {
    private currentUser = {};
    private userDataList = {};
    private arrayOfUsersKeys = [];
    private selectedUserId: string;
    private selectedUser = {};

    constructor(
        private router: Router,
        private authService: AuthService,
        private adminService: AdminService,
        private userDataService: UserDataService
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


    getSingleUser(userId: string) {
        this.selectedUserId = userId;
        this.userDataService.getSingleUser(userId)
            .subscribe(
            user => {
                if(user._id == this.selectedUserId){
                    console.log('Single User: ', user);
                    this.selectedUser = user;
                }
            },
            error => {
                console.log(<any>error)
            });
    }


    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getUser();
    }
}
