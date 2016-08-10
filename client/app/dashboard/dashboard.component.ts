import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-dashboard',
    templateUrl: 'dashboard.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService],
    styleUrls: ['dashboard.style.css']
})
export class DashboardComponent implements OnInit{
    // serve for the two dropdown list in top-right of the navbar
    currentUser = {};
    profileToggled: boolean = false;
    inboxToggled: boolean = false;
    currentSession: string;
    currentUserRole: string;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    checkMenuStyle(item: string) {
        this.currentSession = item;
    }

    logout() {
        // the service will delete user data and token in localStorage
        // and bring user out of the dashboard
        this.authService.logUserOut()
    }

    getUser() {
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(
            user => {
                this.currentUserRole = user.role;
                this.currentUser = user
            },
            error => {
                this.authService.logUserOut();
                console.log(<any>error)
            });
    }

    ngOnInit() {
        console.log('check');
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getUser();
    }
}