import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from '../auth.service';

@Injectable()
export class SuperadminGuard implements CanActivate {
  private currentUri;
  constructor(
    private router: Router
  ) { }
  
  canActivate() {
    var currentUser = JSON.parse(localStorage.getItem('current_user'));
    this.currentUri = '';
    if(currentUser.role == 'superadmin'){
      console.log('AdminGuard passed');
      return true;
    }
    console.log('AdminGuard blockout');
    
    return false;
  }
}