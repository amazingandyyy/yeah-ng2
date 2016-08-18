import { Routes }         from '@angular/router';

import { CheckinGuard } from '../shared/services/guard/checkin-guard.service';
import { LoginComponent } from './login.component';

export const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CheckinGuard]
  }
]