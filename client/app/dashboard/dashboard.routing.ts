import { RouterConfig } from '@angular/router';
import { CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { AccountComponent } from './account/account.component';
import { PipeComponent }    from './pipe/pipe.component';
import { ExploreComponent } from './explore/explore.component';
import { MessagesComponent }   from './message/messages.component';
import { ResumesComponent } from './resumes/resumes.component';
import { SettingComponent } from './setting/setting.component';
import { ServicesComponent }    from './services/services.component';
import { CompanyComponent } from './company/company.component';
import { MembersComponent } from './company/members.component';
import { SalesComponent }   from './company/sales.component';

import { CompanyRoutes } from './company/company.routing'; 

import { LoginGuard } from '../shared/services/guard/index';

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
      { path: 'services', component: ServicesComponent },
      { path: 'messages', component: MessagesComponent },
      ...CompanyRoutes
    ]
  }
];