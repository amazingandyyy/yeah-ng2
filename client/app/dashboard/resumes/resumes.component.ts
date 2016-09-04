import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-resumes',
    templateUrl: 'resumes.component.html',
    styleUrls: ['../dashboard.style.css','resumes.style.css'],
    // providers: [AuthService]
})
export class ResumesComponent implements OnInit {
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
