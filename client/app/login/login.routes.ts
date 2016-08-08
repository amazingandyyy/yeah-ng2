import { RouterConfig } from '@angular/router';
import { CanActivate } from '@angular/router';

import { CheckinGuard } from '../shared/services/guard/checkin-guard.service';
import { LoginComponent } from './login.component';

export const LoginRoutes: RouterConfig = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CheckinGuard]
  }
]