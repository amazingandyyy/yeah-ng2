import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { Plan } from './plan';

@Injectable()
export class PlanService {

    constructor(public http: Http) { }
    
    saveSinglePlan(data: Plan){
        return this.http.post('/api/plans/saveSinglePlan', data)
            .toPromise()
            .then(this.handelResponse)
            .catch((err: any) => console.log('err when logUserIn @auth.service.ts'));
    }

    private handelResponse(res: any) {
        let result = res;
        return result || {};
    }
}