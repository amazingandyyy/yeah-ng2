import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES }    from '@angular/router';

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-company',
    templateUrl: 'company.component.html',
    styleUrls: ['../dashboard.style.css', 'company.style.css'],
    providers: [AuthService],
    directives: [ROUTER_DIRECTIVES]
})
export class CompanyComponent implements OnInit {
    currentUser = {};

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }
    
    getCurrentUser() {
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(
            user => this.currentUser = user,
            error => {
                this.authService.logUserOut();
                console.log(<any>error)
            });
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getCurrentUser();
    }
}
