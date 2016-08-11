import { RouterConfig } from '@angular/router';
import { CanActivate } from '@angular/router';

import { CompanyComponent } from './company.component';
import { MembersComponent } from './members.component';
import { SalesComponent }   from './sales.component';

import { LoginGuard, SuperadminGuard } from '../../shared/services/guard/index';

export const CompanyRoutes: RouterConfig = [
    {
        path: 'company', 
        component: CompanyComponent,
        canActivate: [SuperadminGuard],
        children: [
            { path: '', component: MembersComponent },
            { path: 'members', component: MembersComponent },
            { path: 'sales', component: SalesComponent }
        ]
    }
];