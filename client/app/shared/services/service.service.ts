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
export class ServiceService {

    constructor(
        private http: Http,
        private authHttp: AuthHttp,
        private router: Router
    ) { }

    createService(data: any): Observable<any> {
        return this.authHttp.post('/api/user/createService', data)
            .map(this.handelResponse)
            .catch(err=>this.handelError(Observable, err))
    }

    getOneService(serviceId: string): Observable<any> {
        return this.authHttp.get(`/api/user/getOneService/${serviceId}`)
            .map(this.handelResponse)
            .catch(err=>this.handelError(Observable, err))
    }

    handelResponse(res: Response) {
        let data = res.json();
        return data || {};
    }
    
     handelError(Observable:any, err: any) {
        console.log('err @ServiceService: ', err);
        return Observable.throw(err);
    }

}