import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sp-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.style.css']
})
export class AccountComponent {
    constructor() {}
    currentUser = JSON.parse(localStorage.getItem('currentUser')).user
}
