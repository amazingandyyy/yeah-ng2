import { RouterConfig } from '@angular/router';
import { CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { AccountComponent } from './account/account.component';
import { PipeComponent }    from './pipe/pipe.component';
import { ExploreComponent } from './explore/explore.component';
import { ResumesComponent } from './resumes/resumes.component';
import { SettingComponent } from './setting/setting.component';
import { CompanyComponent } from './company/company.component';
import { MembersComponent } from './company/members.component';
import { SalesComponent }   from './company/sales.component';

import { LoginGuard, AdminGuard } from '../shared/services/guard/index';

export const DashboardRoutes: RouterConfig = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'pipe', component: PipeComponent },
      { path: 'explore', component: ExploreComponent },
      { path: 'resumes', component: ResumesComponent },
      { path: 'account', component: AccountComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'company', component: CompanyComponent,
        children: [
          { path: '', component: MembersComponent },
          { path: 'members', component: MembersComponent },
          { path: 'sales', component: SalesComponent }
        ]
      }
    ]
  }
];