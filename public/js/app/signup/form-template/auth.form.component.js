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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9mb3JtLXRlbXBsYXRlL2F1dGguZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JELDJDQUEyQztBQUMzQyw0Q0FBNEM7QUFFNUMsb0VBQW9FO0FBQ3BFLGtEQUFrRDtBQUVsRCxlQUFlO0FBQ2YsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQywrQ0FBK0M7QUFDL0MsMENBQTBDO0FBQzFDLCtCQUErQjtBQUMvQixLQUFLO0FBRUwscURBQXFEO0FBRXJELG9EQUFvRDtBQUNwRCxzQ0FBc0M7QUFFdEMsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQiwyQ0FBMkM7QUFDM0MsMEJBQTBCO0FBQzFCLDBDQUEwQztBQUMxQyxtREFBbUQ7QUFDbkQsZ0JBQWdCO0FBRWhCLHlDQUF5QztBQUN6QywyRUFBMkU7QUFDM0UsOEVBQThFO0FBQzlFLDJEQUEyRDtBQUMzRCwwREFBMEQ7QUFDMUQsWUFBWTtBQUNaLFFBQVE7QUFFUixvQkFBb0I7QUFDcEIsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoic2lnbnVwL2Zvcm0tdGVtcGxhdGUvYXV0aC5mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBpbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcy9hdXRoJztcblxuLy8gQENvbXBvbmVudCh7XG4vLyAgICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbi8vICAgICBzZWxlY3RvcjogJ3llYWgtYXV0aEZvcm0nLFxuLy8gICAgIHRlbXBsYXRlVXJsOiAnYXV0aC5mb3JtLmNvbXBvbmVudC5odG1sJyxcbi8vICAgICBzdHlsZVVybHM6IFsnYXV0aC5mb3JtLnN0eWxlLmNzcyddLFxuLy8gICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXVxuLy8gfSlcblxuLy8gZXhwb3J0IGNsYXNzIEF1dGhGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuLy8gICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuLy8gICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cbiAgICAgICAgXG4vLyAgICAgb25TdWJtaXQoYXV0aDogQXV0aCkge1xuLy8gICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4vLyAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlckluKGF1dGgpXG4vLyAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuLy8gICAgICAgICAgICAgcmVzID0+IGhhbmRsZVJlc3BvbnNlKHJlcyksXG4vLyAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2VyciByZXM6ICcsIGVycilcbi8vICAgICAgICAgICAgIClcblxuLy8gICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXMpIHtcbi8vICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIEpTT04uc3RyaW5naWZ5KHJlcy50b2tlbikpO1xuLy8gICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KHJlcy51c2VyKSk7XG4vLyAgICAgICAgICAgICAvLyBzZWxmLnJvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZC9wbGFucyddKVxuLy8gICAgICAgICAgICAgc2VsZi5yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQvYWNjb3VudCddKVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgbmdPbkluaXQoKSB7IFxuLy8gICAgIH1cbi8vIH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
