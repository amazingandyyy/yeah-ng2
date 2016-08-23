import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user'
import { AuthService } from '../../shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-setting',
    templateUrl: 'setting.component.html',
    styleUrls: ['setting.style.css'],
    providers: [AuthService]
})
export class SettingComponent implements OnChanges, OnInit {
    @Input() currentUser: any;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    getCurrentUser() {
        console.log('currentUser: ', this.currentUser);
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        console.log('triggered');
        console.log('changes: ', changes);
        for (let propName in changes) {
            console.log('propName: ', propName)
        }
    }

    ngOnInit() {
        console.log('ngOnInit');
        this.getCurrentUser();
    }
}
