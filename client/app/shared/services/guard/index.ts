import { LoginGuard }   from './login-guard.service';
import { AdminGuard }   from './admin-guard.service';
import { CheckinGuard }   from './checkin-guard.service';

export const GuardProviders = [LoginGuard, AdminGuard, CheckinGuard];