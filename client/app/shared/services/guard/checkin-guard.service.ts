import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from '../auth.service';
import { JwtHelper }              from 'angular2-jwt';

@Injectable()
export class CheckinGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}

  jwtHelper: JwtHelper = new JwtHelper();

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var token = JSON.parse(localStorage.getItem('id_token'))

    if(token){
      if(!this.jwtHelper.isTokenExpired(token)){
        this.router.navigate(['/dashboard']);
        return false;
      }
    }
    return true;
  }
}