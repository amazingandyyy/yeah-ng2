import { provideRouter, RouterConfig } from '@angular/router';

import { LandingComponent } from './landing/landing.component'
import { AuthComponent } from './signup/auth.component';
import { StartComponent } from './signup/start.component';
import { dashboardRoutes } from './dashboard/dashboard.routes';

import { LoginRoutes } from './login/login.routes';
import { SignupRoutes } from './signup/signup.routes';

// guard
import { LoginGuard } from './shared/services/guard/login-guard.service';
import { AdvisorGuard } from './shared/services/guard/advisor-guard.service';
import { SupervisorGuard } from './shared/services/guard/supervisor-guard.service';
import { AdminGuard } from './shared/services/guard/admin-guard.service';

let routes: RouterConfig = [
  {
    path: '',
    component: LandingComponent,
  },
  ...LoginRoutes,
  ...SignupRoutes,
  ...dashboardRoutes,
  {
    path: '**',
    redirectTo: '/',
    terminal: true
  }
];

export const appRouterProviders = [
  provideRouter(routes),
  LoginGuard,
  AdvisorGuard,
  SupervisorGuard,
  AdminGuard
];