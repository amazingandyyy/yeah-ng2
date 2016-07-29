import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.style.css']
})
export class LoginComponent implements OnInit {
	constructor() {}

	onSubmit(auth: Auth) {
		this.submitted = true;
		console.log(auth);
        // var self = this;
        // this.authService.logUserIn(auth)
        //     .subscribe(
        //     res => handleResponse(res),
        //     err => console.log('err res: ', err)
        //     )

        // function handleResponse(res) {
        //     localStorage.setItem('id_token', JSON.stringify(res.token));
        //     localStorage.setItem('current_user', JSON.stringify(res.user));
        //     // self.router.navigate(['dashboard/plans'])
        //     self.router.navigate(['dashboard/account'])
        // }
    }

	ngOnInit() {
		
	}
}
	