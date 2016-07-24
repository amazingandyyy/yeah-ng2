import { provideRouter, RouterConfig } from '@angular/router';

import { LandingComponent } from './landing/landing.component'
import { AuthComponent } from './auth/auth.component';
import { dashboardRoutes } from './dashboard/dashboard.routes';

let routes: RouterConfig = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  ...dashboardRoutes,
  {
    path: '**',
    redirectTo: '/',
    terminal: true
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];

