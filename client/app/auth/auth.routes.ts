import { RouterConfig } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthComponent } from './auth.component';
import { StartComponent } from './start.component';
import { AuthStudentComponent } from './student/student.component';
import { AuthAdvisorComponent } from './advisor/advisor.component';
import { AuthSupervisorComponent } from './supervisor/supervisor.component';
import { AuthAdminComponent } from './admin/admin.component';

export const authRoutes: RouterConfig = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', component: StartComponent },
      // { path: 'student', component: AuthStudentComponent },
      // { path: 'advisor', component: AuthAdvisorComponent },
      // { path: 'supervisor', component: AuthSupervisorComponent },
      { path: 'admin', component: AuthAdminComponent }
    ]
  }
];