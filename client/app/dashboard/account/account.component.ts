import { Component, OnInit } from '@angular/core';
 
import { User } from '../../shared/models/user'

@Component({
    moduleId: module.id,
    selector: 'sp-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.style.css']
})
export class AccountComponent {
    currentUser = {};
        
    constructor() {
        console.log('check', JSON.parse(localStorage.getItem('currentUser')).user);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).user
    }
}
