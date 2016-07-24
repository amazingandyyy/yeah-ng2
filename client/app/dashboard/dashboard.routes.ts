import { RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { PaymentComponent } from './payment/payment.component';
import { PlansComponent } from './plans/plans.component';
import { StartComponent } from './plans/start.component';
import { CreateComponent } from './plans/create.component';
import { AccountComponent } from './account/account.component';

export const dashboardRoutes: RouterConfig = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'plans', component: PlansComponent,
        children: [
          { path: '', component: StartComponent },
          { path: 'create', component: CreateComponent }
        ]
      },
      { path: 'account', component: AccountComponent }
    ]
  }
];