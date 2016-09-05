import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import { Subject }    from 'rxjs/Subject';

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
    constructor(
        private http: Http,
        private authHttp: AuthHttp,
        private router: Router
    ){}

    isLoggedIn: boolean;
    redirectUrl: string;
    // currentUser: User;
    currentUser = new Subject<User>(); // the data will be updated
    userObservable$ = this.currentUser.asObservable();


    logIn(data: Auth): Observable<Auth> {
        let self = this;
        return this.http.post('/api/user/login', data)
            .map((res: Response) => {
                let data = res.json();
                self.isLoggedIn = true;
                
                return data;
            })
            .catch(this.handleError)
    }

    logOut() {
        localStorage.removeItem('id_token')
        localStorage.removeItem('current_user')
        this.isLoggedIn = false;
        this.router.navigate(['/'])
        return 'logout';
    }

    getCurrentUser(userId): Observable<User> {
        return this.authHttp.get(`/api/user/currentUser/${userId}`)
            .map(this.handleResponse)
            .catch(this.handleError)
    }

    // resetCurrentUser(userId): Observable<User> {
    //     return this.authHttp.get(`/api/user/currentUser/${userId}`)
    //         .map(this.handleResponse)
    //         .catch(this.handleError)
    // }

    // getCurrentUserDeeply(userId): Observable<User> {
    //     return this.authHttp.get(`/api/user/currentUserDeeply/${userId}`)
    //         .map(this.handleResponse)
    //         .catch(this.handleError)
    // }

    getUserByEmail(email: string): Observable<any> {
        return this.authHttp.get(`/api/user/getUserByEmail/${email}`)
            .map((res: Response) => res.json() || {})
            .catch((err: any) =>
                Observable.throw(err)
            )
    }

    signUp(data: Auth): Observable<Auth> {
        return this.http.post('/api/user/signup', data)
            .map(this.handleResponse)
            .catch(this.handleError)
    }

    checkData(state: string, password: string): Observable<Auth> {
        let data = {
            state: state,
            password: password
        }
        return this.authHttp.post(`/api/user/checkData`, data)
            .map(res=>{
                return res;
            })
            .catch(this.handleError)
    }

    updateCurrentUser(data: any): Observable<any> {
        //Don't let this null password replace the backend password
        // but user can replace th3 backend password through email pw reset (-todo)
        if (data.password === null || data.password) {
            delete data.password
        }
        return this.authHttp.post('/api/user/update', data)
            .map(this.handleResponse)
            .catch(this.handleError)
    }

    checkAuthority(requiredRole: string, userRole: string) {
        const rolesArray = ['student', 'advisor', 'supervisor', 'admin', 'superadmin'];
        if (userRole) {
            if (rolesArray.indexOf(userRole) >= rolesArray.indexOf(requiredRole)) {
                return true;
            }
        }
        return false;
    }

    handleResponse(res: Response) {
        // console.log('res', res);
        let data = res.json();
        this.isLoggedIn = true;

        // this.currentUser = data.user;

        localStorage.setItem('current_user', JSON.stringify(data))

        return data || {};
    }

    handleError(err: any) {
        console.log('err @authService: ', err);
        this.isLoggedIn = false;
        return Observable.throw(err);
    }
}