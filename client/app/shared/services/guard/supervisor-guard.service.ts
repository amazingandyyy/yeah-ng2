import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from '../auth.service';

@Injectable()
export class SupervisorGuard implements CanActivate {
  canActivate() {
    console.log('SupervisorGuard#canActivate called');
    return true;
  }
}