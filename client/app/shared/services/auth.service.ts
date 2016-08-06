import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Auth } from '../types/auth';
import { User } from '../types/user';

//Using auth service to keep track of users' login status across all component

@Injectable()
export class AuthService {

    constructor(public http: Http) { }

    getCurrentUser(): Observable<User>{
        return this.http.get('/api/user/currentUser')
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    private handelResponse(res: Response) {
        let data = res.json()
        console.log('current user', data);
        return data || {};
    }
    private handelError(err: any) {
        console.log('err when trying to get current user');
        return Observable.throw(err);
    }
  
}