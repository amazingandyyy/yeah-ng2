// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

// import { AuthService } from '../../shared/services/auth.service';
// import { Auth } from '../../shared/types/auth';

// @Component({
//     moduleId: module.id,
//     selector: 'yeah-authForm',
//     templateUrl: 'auth.form.component.html',
//     styleUrls: ['auth.form.style.css'],
//     providers: [AuthService]
// })

// export class AuthFormComponent implements OnInit {

//     constructor(private authService: AuthService,
//         private router: Router) { }
        
//     onSubmit(auth: Auth) {
//         var self = this;
//         this.authService.logUserIn(auth)
//             .subscribe(
//             res => handleResponse(res),
//             err => console.log('err res: ', err)
//             )

//         function handleResponse(res) {
//             localStorage.setItem('id_token', JSON.stringify(res.token));
//             localStorage.setItem('current_user', JSON.stringify(res.user));
//             // self.router.navigate(['dashboard/plans'])
//             self.router.navigate(['dashboard/account'])
//         }
//     }

//     ngOnInit() { 
//     }
// }