import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { routingModule, appRouterProviders } from './app.routing';

// Import pulgins
import { SimpleNotificationsModule } from "notifications";
import { AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routingModule,
        SimpleNotificationsModule
    ],
    declarations: [
        AppComponent
    ],
    providors: [
        appRouterProviders,
        HTTP_PROVIDERS,
        AUTH_PROVIDERS
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}