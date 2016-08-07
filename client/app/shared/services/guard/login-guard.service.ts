import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthService }           from '../auth.service';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    // private authService: AuthService,
    private router: Router
  ) {}

  jwtHelper: JwtHelper = new JwtHelper();

  canActivate() {
    var current_user = JSON.parse(localStorage.getItem('current_user'))
    var token = JSON.parse(localStorage.getItem('id_token'))
      if(!this.jwtHelper.isTokenExpired(token) && current_user){
        console.log('LoginGuard passed')
        return true;
      }
    this.router.navigate(['/login']);
    return false;
  }
}