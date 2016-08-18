// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../../shared/services/auth.service';
// import { Auth } from '../../shared/types/auth';
// @Component({
//     moduleId: module.id,
//     selector: 'sp-authForm',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9mb3JtLXRlbXBsYXRlL2F1dGguZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JELDJDQUEyQztBQUMzQyw0Q0FBNEM7QUFFNUMsb0VBQW9FO0FBQ3BFLGtEQUFrRDtBQUVsRCxlQUFlO0FBQ2YsMkJBQTJCO0FBQzNCLCtCQUErQjtBQUMvQiwrQ0FBK0M7QUFDL0MsMENBQTBDO0FBQzFDLCtCQUErQjtBQUMvQixLQUFLO0FBRUwscURBQXFEO0FBRXJELG9EQUFvRDtBQUNwRCxzQ0FBc0M7QUFFdEMsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQiwyQ0FBMkM7QUFDM0MsMEJBQTBCO0FBQzFCLDBDQUEwQztBQUMxQyxtREFBbUQ7QUFDbkQsZ0JBQWdCO0FBRWhCLHlDQUF5QztBQUN6QywyRUFBMkU7QUFDM0UsOEVBQThFO0FBQzlFLDJEQUEyRDtBQUMzRCwwREFBMEQ7QUFDMUQsWUFBWTtBQUNaLFFBQVE7QUFFUixvQkFBb0I7QUFDcEIsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoic2lnbnVwL2Zvcm0tdGVtcGxhdGUvYXV0aC5mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBpbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlcy9hdXRoJztcblxuLy8gQENvbXBvbmVudCh7XG4vLyAgICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbi8vICAgICBzZWxlY3RvcjogJ3NwLWF1dGhGb3JtJyxcbi8vICAgICB0ZW1wbGF0ZVVybDogJ2F1dGguZm9ybS5jb21wb25lbnQuaHRtbCcsXG4vLyAgICAgc3R5bGVVcmxzOiBbJ2F1dGguZm9ybS5zdHlsZS5jc3MnXSxcbi8vICAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV1cbi8vIH0pXG5cbi8vIGV4cG9ydCBjbGFzcyBBdXRoRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbi8vICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbi8vICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG4gICAgICAgIFxuLy8gICAgIG9uU3VibWl0KGF1dGg6IEF1dGgpIHtcbi8vICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuLy8gICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJJbihhdXRoKVxuLy8gICAgICAgICAgICAgLnN1YnNjcmliZShcbi8vICAgICAgICAgICAgIHJlcyA9PiBoYW5kbGVSZXNwb25zZShyZXMpLFxuLy8gICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnIgcmVzOiAnLCBlcnIpXG4vLyAgICAgICAgICAgICApXG5cbi8vICAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzKSB7XG4vLyAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBKU09OLnN0cmluZ2lmeShyZXMudG9rZW4pKTtcbi8vICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50X3VzZXInLCBKU09OLnN0cmluZ2lmeShyZXMudXNlcikpO1xuLy8gICAgICAgICAgICAgLy8gc2VsZi5yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQvcGxhbnMnXSlcbi8vICAgICAgICAgICAgIHNlbGYucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkL2FjY291bnQnXSlcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIG5nT25Jbml0KCkgeyBcbi8vICAgICB9XG4vLyB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
