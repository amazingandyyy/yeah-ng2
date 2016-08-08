import { RouterConfig } from '@angular/router';
import { CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { AccountComponent } from './account/account.component';
import { PipeComponent } from './pipe/pipe.component';
import { ExploreComponent } from './explore/explore.component';
import { ResumesComponent } from './resumes/resumes.component';
import { LoginGuard } from '../shared/services/guard/login-guard.service';

export const DashboardRoutes: RouterConfig = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'pipe', component: PipeComponent},
      { path: 'explore', component: ExploreComponent},
      { path: 'resumes', component: ResumesComponent},
      { path: 'account', component: AccountComponent }
    ]
  }
];