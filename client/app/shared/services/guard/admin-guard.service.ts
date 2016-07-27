import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from '../auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate() {
    console.log('AdminGuard#canActivate called');
    return true;
  }
}