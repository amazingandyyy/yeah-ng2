// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

// import { Auth } from '../types/auth';
// import { User } from '../types/user';

// @Injectable()
// export class LoginService {
//     isLoggedIn: boolean = false;
//     redirectUrl: string;

//     constructor(
//         public http: Http,
//         private router: Router
//     ) { }

//     logUserIn (data: Auth): Observable<Auth>{
//         return this.http.post('/api/user/login', data)
//             .map(this.handelResponse)
//             .catch(this.handelError)
//     }

//     private handelResponse(res: Response) {
//         let data = res.json()
//         this.isLoggedIn = true
//         // save user 
//         console.log('data from user after login', data);
//         return data || {};
//     }
//     private handelError(err: any) {
//         console.log('err when logUserIn @auth.service.ts')
//         this.isLoggedIn = false;
//         return Observable.throw(err);
//     }

//     logUserOut () {
//         localStorage.removeItem('id_token')
//         localStorage.removeItem('current_user')
//         this.isLoggedIn = false;
//         this.router.navigate(['/'])
//         return 'logout';
//     }
    
// }