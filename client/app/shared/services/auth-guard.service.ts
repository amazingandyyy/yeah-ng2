import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from './auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate() {
    console.log('LoginGuard#canActivate called');
    return true;
  }
}