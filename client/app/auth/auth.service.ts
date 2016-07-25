import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Auth } from './auth';

@Injectable()
export class AuthService {

    constructor(public http: Http) { }

    logUserIn (data: Auth): Observable<Auth>{
        return this.http.post('/api/auth/logUserIn', data)
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    private handelResponse(res: Response) {
        let data = res.json()
        return data || {};
    }
    private handelError(err: any) {
        console.log('err when logUserIn @auth.service.ts')
        return Observable.throw(err);
    }
    

}