import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

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