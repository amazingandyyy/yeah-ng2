// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

// import { Auth } from '../types/auth';
// import { AuthService } from './auth.service';

// //To Do: track users' login state across all component

// @Injectable()
// export class SignupService {
//     isLoggedIn: boolean = false;
//     redirectUrl: string;

//     constructor(
//         public http: Http
//     ) { }

//     signUp (data: Auth): Observable<Auth>{
//         return this.http.post('/api/user/signup', data)
//             .map(this.handelResponse)
//             .catch(this.handelError)
//     }

//     private handelResponse(res: Response) {
//         console.log('Response when signUp @auth.service.ts', res);
//         let data = res.json()
//         this.isLoggedIn = true
//         return data || {};
//     }
//     private handelError(error: any) {
//         console.log('err when logUserIn @auth.service.ts', error.message)
//         this.isLoggedIn = false;
//         return Observable.throw(error);
//     }

//     logUserOut () {
//         localStorage['id_token'] = null;
//         localStorage['current_user'] = null;
//         this.isLoggedIn = false;
//         // and bring user out of the dashbaord
//         return 'logout';
//     }
    
// }