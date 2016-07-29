import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Auth } from '../types/auth';

@Injectable()
export class LoginService {
    isLoggedIn: boolean = false;
    redirectUrl: string;

    constructor(public http: Http) { }

    logUserIn (data: Auth): Observable<Auth>{
        return this.http.post('/api/login', data)
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    private handelResponse(res: Response) {
        let data = res.json()
        this.isLoggedIn = true
        return data || {};
    }
    private handelError(err: any) {
        console.log('err when logUserIn @auth.service.ts')
        this.isLoggedIn = false;
        return Observable.throw(err);
    }

    logUserOut () {
        localStorage['id_token'] = null;
        localStorage['current_user'] = null;
        this.isLoggedIn = false;
        return 'logout';
    }
    
}