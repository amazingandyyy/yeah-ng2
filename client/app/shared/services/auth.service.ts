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
     public currentUser: User;

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

    resetCurrentUser(userId): Observable<User> {
        return this.authHttp.get(`/api/user/currentUser/${userId}`)
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    getCurrentUserDeeply(userId): Observable<User> {
        return this.authHttp.get(`/api/user/currentUserDeeply/${userId}`)
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    getUserByEmail(email: string): Observable<any> {
        return this.authHttp.get(`/api/user/getUserByEmail/${email}`)
            .map((res: Response) => res.json() || {})
            .catch((err: any) =>
               Observable.throw(err)
            )
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
   
    updateCurrentUser(data: any): Observable<any> {
        //Don't let this null password replace the backend password
        // but user can replace th3 backend password through email pw reset (-todo)
        if(data.password === null || data.password) {
            delete data.password
        }
        return this.authHttp.post('/api/user/update', data)
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    checkAuthority(requiredRole: string, userRole: string) {
        const rolesArray = ['student', 'advisor', 'supervisor', 'admin', 'superadmin'];
        if(userRole) {
            if(rolesArray.indexOf(userRole) >= rolesArray.indexOf(requiredRole)) {
                return true;
            }
        }
        return false;
    }

    handelResponse(res: Response) {
        let data = res.json();
        this.isLoggedIn = true;
        this.currentUser = data;

        localStorage.setItem('current_user', JSON.stringify(data))

        return data || {};
    }
    
     handelError(err: any) {
        console.log('err @authService: ', err);
        this.isLoggedIn = false;
        return Observable.throw(err);
    }

}