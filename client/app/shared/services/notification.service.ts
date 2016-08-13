import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Notification } from '../types/notification';

@Injectable()
export class NotificationService {
	
	constructor() {}

	sendNotice(content: Notification) {
		
	}
}