import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component'

import { loginRoutes } from './login/login.routing';
import { signupRoutes } from './signup/signup.routing';
import { dashboardRoutes } from './dashboard/dashboard.routing';

// guards
import { GuardProviders } from './shared/services/guard/index';

const mainRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    terminal: true
  }
];

const appRoutes: Routes = [
  ...mainRoutes,
  ...loginRoutes,
  ...signupRoutes,
  ...dashboardRoutes
];

export const appRouterProviders : any[] = [
  GuardProviders
];

export const routingModule = RouterModule.forRoot(appRoutes);