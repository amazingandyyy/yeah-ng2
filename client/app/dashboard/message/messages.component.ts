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
    //This are displayed on the left as main thread
    messageMain = [];
    inviteMain = [];
    //Ends
    //This is displayed on the right as detailed list   
    messageDetail = [];
    //These two index are for switching between threads
    messageIndex = {};
    inviteIndex = {};
    //Default to selecting message tab
    tabSelected = 'message';

    selectedUserId: string;
    selectedUser = {};

    newMessage = {};


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

    checkTabStyle(item: string) {
        this.tabSelected = item;

        if(item === 'message') {
            this.messageDetail = this.messageIndex[this.selectedUserId];
        }
        if(item === 'invitation') {
            this.messageDetail = this.inviteIndex[this.selectedUserId];
        }
    }

    selectMessage(user: any, state: string) {
        this.selectedUser = user;
        this.selectedUserId = user._id;

        if(state === 'message') {
            this.messageDetail = this.messageIndex[user._id];
        }
        if(state === 'invitation') {
            this.messageDetail = this.inviteIndex[user._id];
        }

    }



    getMessages()  {
        let self = this;
        this.noticeService.getAll()
            .subscribe(
            notifications => {
                // this.messages = messages;
                self.arrangeNotification(notifications);                
            },
            error => {
                // this.authService.logUserOut();
                console.log(<any>error)
            });
    }

    arrangeNotification(notifications: Array<Notification>) {

        let sortByCreateAt = function(a, b) {
            if (a.createAt > b.createAt) {
                return -1;
              }
              if (a.createAt < b.createAt) {
                return 1;
              }
              // a must be equal to b
              return 0;
        }

        let categorize = function(arrayOfState: any, arrayOfNotification: Array<Notification>, currentUserId: string) {
            let finalObj = {};
            // console.log(arrayOfState, arrayOfNotification, currentUserId);
            arrayOfNotification.forEach(function(n) {
                arrayOfState.forEach(function(state) {
                    if(n.state === state) {
                        //If state is not defined yet, define here
                        if(!finalObj[state]) {
                            finalObj[state] = {};
                        }
                        if(n.from._id !== currentUserId) {
                            //If it's not recorded yet add
                            if(!finalObj[state][n.from._id]) {
                                finalObj[state][n.from._id] = [n];
                            } else {
                                finalObj[state][n.from._id].push(n);
                            }
                        } else {
                            //Get notification sent by user
                            if(!finalObj[state][n.to._id]) {
                                finalObj[state][n.to._id] = [n];
                            } else {
                                finalObj[state][n.to._id].push(n);
                            }
                        }
                    }

                });//State loop end
            });//Notification loop end
            return finalObj;
        }//Categorize function ends

        if(notifications[0]) {
            let self = this;

            let states = ['message', 'invitation'];
            // 1. Sort the notification by createAt
            // 2. Use user id that's not the current user as key
            
            notifications.sort(sortByCreateAt);

            let categorizedNotification = categorize(states, notifications, self.currentUser._id);


            //Saving it for user to index detail message
            for(var state in categorizedNotification) {
                if(state === 'message') {
                    this.messageIndex = categorizedNotification[state];
                }
                if(state === 'invitation') {
                    this.inviteIndex = categorizedNotification[state];
                }
            }

            for(var id in this.messageIndex) {
                let firstMessage;
                //Get the first message that's not by sent by yourself
                let arrOfNoticeByUser = this.messageIndex[id];
                for (var i = 0; i < arrOfNoticeByUser.length; i++) {
                    //Stop loop if there's already a firstMessage
                    if(firstMessage) {
                        break;
                    } else {
                        if(arrOfNoticeByUser[i].from._id === self.currentUser._id) {
                            continue;
                        } else {
                            firstMessage = arrOfNoticeByUser[i];
                        }
                    }
                }
                this.messageMain.push(firstMessage);
            }
            //Default to selecting the first message in the message category
            let firstNotice = this.messageMain[0];
            
            this.selectedUser = firstNotice.from;
            this.selectedUserId = firstNotice.from._id;
            this.messageDetail = this.messageIndex[firstNotice.from._id];

            for(var id in this.inviteIndex) {
                let firstInvite = this.inviteIndex[id][0];
                let arrOfNoticeByUser = this.inviteIndex[id];
                for (var i = 0; i < arrOfNoticeByUser.length; i++) {
                    //Stop loop if there's already a firstInvite
                    if(firstInvite) {
                        break;
                    } else {
                        if(arrOfNoticeByUser[i].from._id === self.currentUser._id) {
                            continue;
                        } else {
                            firstInvite = arrOfNoticeByUser[i];
                        }
                    }
                }
                this.inviteMain.push(firstInvite);
            }
        }
    }

    submitMessage(newMessage: any){
        console.log('newMessage: ', newMessage);
        // After submit, clean up the textarea.
        this.newMessage = {};
        
    }


    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getCurrentUser();
        this.getMessages();
    }
}
