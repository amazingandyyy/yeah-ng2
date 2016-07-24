import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Auth } from './auth';

@Injectable()
export class AuthService {

    constructor(public http: Http) { }

    logUserIn(data: Auth){
        return this.http.post('/api/auth/logUserIn', data)
            .toPromise()
            .then(this.handelResponse)
            .catch((err: any) => console.log('err when logUserIn @auth.service.ts'));
    }

    private handelResponse(res: any) {
        let token = res.json()
        return token || {};
    }

}