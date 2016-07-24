import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Auth } from './auth';

@Component({
    moduleId: module.id,
    selector: 'sp-authForm',
    templateUrl: 'auth.form.component.html',
    styleUrls: ['auth.form.style.css'],
    providers: [AuthService]
})

export class AuthFormComponent implements OnInit {
    constructor(private authService: AuthService, 
                private router: Router) { }

    onSubmit(auth: Auth) {
        console.log('submitted');
        console.log('auth: ', auth);

        this.authService.logUserIn(auth)
            .then((res) => { 
                console.log('res from auth: ', res)
                localStorage.setItem('currentUser', JSON.stringify(res));
                if(res.token){
                    this.router.navigate(['dashboard']);
                }
            }, (err) => {
                console.log('err res: ', err) 
            })
    }

    ngOnInit() { }
}