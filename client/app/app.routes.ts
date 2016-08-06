import { provideRouter, RouterConfig, CanActivate } from '@angular/router';

import { LandingComponent } from './landing/landing.component'

import { LoginRoutes } from './login/login.routes';
import { SignupRoutes } from './signup/signup.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';

// guards
import { authProviders } from './shared/services/guard/index';

let routes: RouterConfig = [
  {
    path: '',
    component: LandingComponent,
  },
  ...LoginRoutes,
  ...SignupRoutes,
  ...DashboardRoutes,
  {
    path: '**',
    redirectTo: '/',
    terminal: true
  }
];

export const appRouterProviders = [
  provideRouter(routes),
  authProviders
];