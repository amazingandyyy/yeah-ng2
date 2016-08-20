import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';
import { ServiceService } from '../../shared/services/service.service';
import { SocketService } from '../../shared/services/socket.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-services',
    templateUrl: 'messages.component.html',
    styleUrls: [
        '../dashboard.style.css',
        'messages.style.css'
        ],
    providers: [AuthService, SocketService, ServiceService]
})
export class MessagesComponent implements OnInit {
    currentUser = {};

    constructor(
        private router: Router,
        private authService: AuthService,
        private socket: SocketService,
        private service: ServiceService
    ) { }

    getCurrentUser() {
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(
            user => {
                this.currentUser = user;                
            },
            error => {
                // this.authService.logUserOut();
                console.log(<any>error)
            });
    }   

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getCurrentUser();
    }
}
