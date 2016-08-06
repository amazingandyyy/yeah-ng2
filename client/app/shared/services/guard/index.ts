import { LoginGuard }   from './login-guard.service';
import { AdminGuard }   from './admin-guard.service';

export const GuardProviders = [LoginGuard, AdminGuard];