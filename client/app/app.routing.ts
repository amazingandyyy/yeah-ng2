import { provideRouter, RouterConfig } from '@angular/router';

import { LandingComponent } from './landing/landing.component'

import { LoginRoutes } from './login/login.routing';
import { SignupRoutes } from './signup/signup.routing';
import { DashboardRoutes } from './dashboard/dashboard.routing';

// guards
import { GuardProviders } from './shared/services/guard/index';

import { AuthService } from './shared/services/auth.service';

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
  GuardProviders,
  AuthService
];