import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Notification } from '../types/notification';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class NoticeService {
	
	constructor(
		private authHttp: AuthHttp
	) {}

	getThree(): Observable<Array<Notification>> {
        return this.authHttp.get('/api/notification/getThreeNew')
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    getAll(): Observable<Array<Notification>> {
        return this.authHttp.get('/api/notification/getAll')
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    sendMessage(notification: Notification): void {
        return this.authHttp.post('/api/notification/send', notification)
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    //Get unread count
    getCount(): Observable<number> {
        return this.authHttp.get('/api/notification/getCounts')
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    confirmInvitation(notification: Notification): Observable<Notification> {
        return this.authHttp.post('/api/notification/confirmInvitation', notification)
            .map(this.handelResponse)
            .catch(this.handelError)
    }

    handelResponse(res: Response) {
        return res.json() || {};
    }
    
     handelError(err: any) {
        return Observable.throw(err);
    }

}