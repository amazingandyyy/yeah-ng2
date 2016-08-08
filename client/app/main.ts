import { enableProdMode, provide } from "@angular/core";

import { bootstrap } from '@angular/platform-browser-dynamic';
import { appRouterProviders } from './app.routes';
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

bootstrap(AppComponent, [
    appRouterProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    AUTH_PROVIDERS
]).catch((err: any) => console.error('error @bootstrap: ', err));