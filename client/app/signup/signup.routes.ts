import { RouterConfig, CanActivate } from '@angular/router';
import { SignupComponent } from './signup.component';

export const SignupRoutes: RouterConfig = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signup/:role',
    component: SignupComponent
  }
]