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
export class DashboardComponent{
    // serve for the two dropdown list in top-right of the navbar
    private profileToggled: boolean = false;
    private inboxToggled: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    logout(){
        // the service will delete user data and token in localStorage
        // and bring user out of the dashboard
        this.authService.logUserOut()
    }
}