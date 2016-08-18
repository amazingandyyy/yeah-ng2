import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { Auth } from '../shared/types/auth';
import { AuthService } from '../shared/services/auth.service';

@Component({
	moduleId: module.id,
	selector: 'yeah-login',
	templateUrl: 'login.component.html',
	styleUrls: ['../shared/scss/partial/auth.css'],
    providers: [AuthService],
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {
	constructor(
        private authService: AuthService,
        private router: Router
        ){}
        
	onSubmit(auth: Auth) {
        let self = this;
        this.authService.logUserIn(auth)
            .subscribe(
                res => handleResponse(res),
                err => console.log('err when logUserIn: ', err)
            )

        function handleResponse(res) {
            localStorage.setItem('id_token', JSON.stringify(res.token));
            localStorage.setItem('current_user', JSON.stringify(res.user));
            self.router.navigate(['dashboard/pipe'])
        }
    }

	ngOnInit() {}
}