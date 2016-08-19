import { enableProdMode, provide } from "@angular/core";

import { bootstrap } from '@angular/platform-browser-dynamic';
import { appRouterProviders } from './app.routing';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppComponent } from "./app.component";
import { Location, LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';

// if (process.env.NODE_ENV === "production") {
//     enableProdMode();
// }
enableProdMode();

bootstrap(AppComponent, [
    appRouterProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    AUTH_PROVIDERS
]).catch((err: any) => console.error('error @bootstrap: ', err));

//RC4->RC5 tutorial: https://www.barbarianmeetscoding.com/blog/2016/08/13/updating-your-angular-2-app-from-rc4-to-rc5-a-practical-guide/
// https://github.com/akserg/learning_bootstrap_angular2/commit/bd42d31c57f96e1a5cd2342119185c6fa582aa00
// https://github.com/akserg/ng2-systemjs-demo/blob/master/systemjs.config.js
// try to add loader: https://github.com/akserg/ng2-slim-loading-bar