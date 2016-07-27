import { Component, OnInit } from '@angular/core';

import moment = require('moment');

import { User } from '../../shared/types/user'

@Component({
    moduleId: module.id,
    selector: 'sp-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.style.css']
})
export class AccountComponent {
    currentUser = {};
        
    constructor() {
        console.log('check currentUser data', JSON.parse(localStorage.getItem('current_user')) );
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    }

    createAt(unix) {
        return moment(unix).format('LLL');
    }
}
