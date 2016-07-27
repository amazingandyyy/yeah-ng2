import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from '../auth.service';

@Injectable()
export class AdvisorGuard implements CanActivate {
  canActivate() {
    console.log('AdvisorGuard#canActivate called');
    return true;
  }
}