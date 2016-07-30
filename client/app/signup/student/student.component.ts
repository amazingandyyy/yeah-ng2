import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';
import { Auth } from '../../shared/types/auth';

@Component({
    moduleId: module.id,
    selector: 'signup-student',
    templateUrl: 'student.component.html',
    styleUrls: ['../auth.style.css'],
    providers: [AuthService]
})
export class SignupStudentComponent{
    constructor(private authService: AuthService,
        private router: Router) { }

    onSubmit(auth: Auth) {
        console.log('check');
        console.log('auth: ', auth);
        auth.role = 'student'
        
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

    ngOnInit() { }

}