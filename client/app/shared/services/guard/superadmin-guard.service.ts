import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from '../auth.service';

@Injectable()
export class SuperadminGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }
  
  canActivate() {
    var current_user = JSON.parse(localStorage.getItem('current_user'));
    if(current_user.role == 'superadmin'){
      console.log('AdminGuard passed');
      return true;
    }
    console.log('AdminGuard blockout');
    return false;
  }
}