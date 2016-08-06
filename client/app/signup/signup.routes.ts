import { RouterConfig, CanActivate } from '@angular/router';
import { SignupComponent } from './signup.component';

import { LoginGuard } from '../shared/services/guard/login-guard.service';

export const SignupRoutes: RouterConfig = [
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'signup/:role',
    component: SignupComponent
  }
]