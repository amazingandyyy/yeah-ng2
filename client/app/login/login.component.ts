import { Component, OnInit } from '@angular/core';
import { Auth } from '../shared/types/auth';

import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'yeah-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.style.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
	constructor(private loginService: LoginService,
        private router: Router) {}

	onSubmit(auth: Auth) {
		
        let self = this;

        this.loginService.logUserIn(auth)
            .subscribe(
            res => handleResponse(res),
            err => console.log('err res: ', err)
            )

        function handleResponse(res) {
            console.log('data back', res);
            //Should identify user's role here, in order to determine where to redirect them

            localStorage.setItem('id_token', JSON.stringify(res.token));
            localStorage.setItem('current_user', JSON.stringify(res.user));
            // self.router.navigate(['dashboard/plans'])
            // self.router.navigate(['dashboard/account'])
        }
    }

	ngOnInit() {}
}
	