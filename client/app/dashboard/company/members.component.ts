import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService, SuperadminService, UserDataService } from '../../shared/services/index';

@Component({
    moduleId: module.id,
    selector: 'yeah-members',
    templateUrl: 'members.component.html',
    styleUrls: ['company.style.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService, SuperadminService, UserDataService]
})
export class MembersComponent implements OnInit {
    private currentUser = {};
    private userDataList = {};
    private arrayOfUsersKeys = [];
    private selectedUserId: string;
    private selectedUser = {};

    private studentsList = [];
    private advisorsList = [];
    private adminsList = [];

    constructor(
        private router: Router,
        private authService: AuthService,
        private superadminService: SuperadminService,
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
        this.superadminService.getAllUsers()
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

    showSummary() {
        this.studentsList = [];
        this.advisorsList = [];
        this.adminsList = [];
        this.arrayOfUsersKeys.forEach(userKey => {
            switch (this.userDataList[userKey].role) {
                case 'student':
                    this.studentsList.push(this.userDataList[userKey])
                    break;
                case 'advisor':
                    this.advisorsList.push(this.userDataList[userKey])
                    break;
                case 'admin':
                    this.adminsList.push(this.userDataList[userKey])
                    break;
            }
        })
        return `Total: ${this.arrayOfUsersKeys.length} users (${this.studentsList.length} students, ${this.advisorsList.length} advisors, ${this.adminsList.length} admins)`
    }

    renderLLT(unix) {
        return moment(unix).format('LLL');
    }

    getSingleUser(userId: string) {
        this.selectedUserId = userId;
        this.userDataService.getSingleUser(userId)
            .subscribe(
            user => {
                if (user._id == this.selectedUserId) {
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
        this.getUsers();
    }
}
