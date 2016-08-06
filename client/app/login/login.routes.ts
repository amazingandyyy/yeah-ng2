import { RouterConfig } from '@angular/router';
import { CanActivate } from '@angular/router';

import { LoginComponent } from './login.component';

export const LoginRoutes: RouterConfig = [
  {
    path: 'login',
    component: LoginComponent
  }
]