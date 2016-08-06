// import { Injectable }             from '@angular/core';
// import { CanActivate, Router,
//          ActivatedRouteSnapshot,
//          RouterStateSnapshot }    from '@angular/router';
// import { AuthService }            from '../auth.service';

// @Injectable()
// export class LoginGuard implements CanActivate {
//   constructor(
//     private authService: AuthService, 
//     private router: Router
//   ) {}

//   canActivate() {
//     console.log('LoginGuard#canActivate called');
//     // this.router.navigate(['/getout'])
//     return true;
//   }
//   // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//   //   if (this.authService.isLoggedIn) { return true; }

//   //   // Store the attempted URL for redirecting
//   //   this.authService.redirectUrl = state.url;

//   //   // Navigate to the login page
//   //   this.router.navigate(['auth/login']);
//   //   return false;
//   // }
// }


import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { LoginService }           from '../login.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    // private loginService: LoginService,
    private router: Router
  ) {}

  canActivate() {
    console.log('LoginGuard#canActivate called');
    var current_user = JSON.parse(localStorage.getItem('current_user'))
    var token = JSON.parse(localStorage.getItem('id_token'))

    if(current_user){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}