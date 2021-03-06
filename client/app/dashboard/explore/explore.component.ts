import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-explore',
    templateUrl: 'explore.component.html',
    styleUrls: ['explore.style.css'],
    // providers: [AuthService],
    directives: [ROUTER_DIRECTIVES]
})
export class ExploreComponent implements OnInit {
    currentUser = {};

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }
    
    getCurrentUser() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    }

    ngOnInit() {
        this.getCurrentUser();
    }
}
