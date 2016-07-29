import { RouterConfig } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthComponent } from './auth.component';
import { StartComponent } from './start.component';
import { SignupStudentComponent } from './student/student.component';
import { SignupAdvisorComponent } from './advisor/advisor.component';
import { SignupSupervisorComponent } from './supervisor/supervisor.component';
import { SignupAdminComponent } from './admin/admin.component';
import { LoginGuard } from '../shared/services/guard/login-guard.service';

export const SignupRoutes: RouterConfig = [
  {
    path: 'signup',
    component: AuthComponent,
    children: [
      { path: '', component: StartComponent },
      { path: 'student', component: SignupStudentComponent },
      { path: 'advisor', component: SignupAdvisorComponent },
      { path: 'admin', component: SignupAdminComponent }
    ]
  }
]