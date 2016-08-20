import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import moment = require('moment');

import { User } from '../../shared/types/user';
import { Notification } from '../../shared/types/notification'
import { AuthService } from '../../shared/services/auth.service';
import { ServiceService } from '../../shared/services/service.service';
import { SocketService } from '../../shared/services/socket.service';
import { NoticeService } from '../../shared/services/notification.service';

@Component({
    moduleId: module.id,
    selector: 'yeah-services',
    templateUrl: 'messages.component.html',
    styleUrls: [
        '../dashboard.style.css',
        'messages.style.css'
        ],
    providers: [AuthService, SocketService, ServiceService, NoticeService]
})
export class MessagesComponent implements OnInit {
    currentUser = {};
    messages = [];
    mainThreads = [];

    constructor(
        private router: Router,
        private authService: AuthService,
        private socket: SocketService,
        private service: ServiceService,
        private noticeService: NoticeService
    ) { }

    getCurrentUser() {
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(
            user => {
                this.currentUser = user;                
            },
            error => {
                // this.authService.logUserOut();
                console.log(<any>error)
            });
    }

    getMessages()  {
        let self = this;
        this.noticeService.getAll()
            .subscribe(
            notifications => {
                // this.messages = messages;
                self.getMainThread(notifications);                
            },
            error => {
                // this.authService.logUserOut();
                console.log(<any>error)
            });
    }

    getMainThread(notifications: Array<Notification>) {
        if(notifications[0]) {
            let self = this;
            //Recorder keep track of the ids so we don't get duplicated ids
            let recorder = {};
            notifications.forEach(function(n) {
                //Get the unique from._id, that's not the current user's id
                if(n.from._id !== self.currentUser._id) {
                    //If it's not recorded yet add
                    if(!recorder[n.from._id]) {
                        recorder[n.from._id] = [n];
                    } else {
                        recorder[n.from._id].push(n);
                    }
                    recorder[n.from._id].sort(function (a, b) {
                      if (a.createAt > b.createAt) {
                        return -1;
                      }
                      if (a.createAt < b.createAt) {
                        return 1;
                      }
                      // a must be equal to b
                      return 0;
                    });
                    
                }
            });//forEach loop ends
            //Getting the first message of each user to display at the main threads
            for (var notices in recorder) {

                self.mainThreads.push(recorder[notices][0]);
            }
            console.log(self.mainThreads);
            
        }
    }


    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getCurrentUser();
        this.getMessages();
    }
}
