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
export class ServicePackageService {

    constructor(
        private http: Http,
        private authHttp: AuthHttp,
        private router: Router
    ) { }

    createService(data: any): Observable<any> {
        return this.http.post('/api/user/createService', data)
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    handelResponse(res: Response) {
        let data = res.json();
        return data || {};
    }
    
     handelError(err: any) {
        console.log('err @servicePackageService: ', err);
        return Observable.throw(err);
    }

}