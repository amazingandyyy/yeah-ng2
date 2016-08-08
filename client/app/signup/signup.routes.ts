import { RouterConfig, CanActivate } from '@angular/router';
import { SignupComponent } from './signup.component';
import { CheckinGuard } from '../shared/services/guard/checkin-guard.service';

export const SignupRoutes: RouterConfig = [
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [CheckinGuard]
  },
  {
    path: 'signup/:role',
    component: SignupComponent,
    canActivate: [CheckinGuard]
  }
]