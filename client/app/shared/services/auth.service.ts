import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Auth } from '../types/auth';
import { User } from '../types/user';

// Using auth service to keep track of users' login status across all component
@Injectable()
export class AuthService {
     public isLoggedIn: boolean;
     public redirectUrl: string;
     public currentUser: {};

    constructor(
        private http: Http,
        private authHttp: AuthHttp,
        private router: Router
    ) { }

    getCurrentUser(userId): Observable<User> {
        return this.authHttp.get(`/api/user/currentUser/${userId}`)
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    signUp(data: Auth): Observable<Auth> {
        return this.http.post('/api/user/signup', data)
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    logUserIn(data: Auth): Observable<Auth> {
        return this.http.post('/api/user/login', data)
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    logUserOut() {
        localStorage.removeItem('id_token')
        localStorage.removeItem('current_user')
        this.isLoggedIn = false;
        this.router.navigate(['/'])
        return 'logout';
    }

    handelResponse(res: Response) {
        let data = res.json();
        // console.log('check1', this.isLoggedIn);
        this.isLoggedIn = true;
        // console.log('check2', this.isLoggedIn);
        this.currentUser = data;
        return data || {};
    }
    
     handelError(err: any) {
        console.log('err @authService: ', err);
        this.isLoggedIn = false;
        return Observable.throw(err);
    }

}