import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'

@Component({
    moduleId: module.id,
    selector: 'yeah-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.style.css']
})
export class AccountComponent implements OnInit{
    currentUser = {};
        
    constructor(
        private router: Router
    ) { }

    createAt(unix) {
        return moment(unix).format('LLL');
    }
    ngOnInit(){
        if(!JSON.parse(localStorage.getItem('current_user'))){
            this.router.navigate(['/login']);
        }else{
            console.log('check currentUser data', JSON.parse(localStorage.getItem('current_user')) );
            this.currentUser = JSON.parse(localStorage.getItem('current_user'));
            
        }
    }
}
