import { Component, OnInit, OnDestroy } from '@angular/core';
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
    providers: [SocketService, ServiceService, NoticeService]
})
export class MessagesComponent implements OnInit, OnDestroy {
    currentUser = {};
    //This are displayed on the left as main thread
    messageMain = [];
    inviteMain = [];
    //Ends
    //This is displayed on the right as detailed list   
    messageDetail = [];
    //These two index are for switching between threads
    messageIndex = null;
    inviteIndex = null;
    //Default to selecting message tab
    tabSelected = 'message';

    selectedUserId: string;
    selectedUser = {};

    newMessage: string;

    notifications: Array<Notification>;


    constructor(
        private router: Router,
        private authService: AuthService,
        private socket: SocketService,
        private service: ServiceService,
        private noticeService: NoticeService
    ) { }

    getCurrentUser() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    }

    checkTabStyle(item: string) {
        this.tabSelected = item;
        //When tab changes, switch to the first message
        if(item === 'message') {
            if(this.messageIndex) {
                this.selectedUserId = this.messageMain[0].from._id;
                this.messageDetail = this.messageIndex[this.selectedUserId];
            } else {
                this.messageDetail = [];
            }
        }    
        if(item === 'invitation') {
            if(this.inviteIndex) {
                this.selectedUserId = this.inviteMain[0].from._id;
                this.messageDetail = this.inviteIndex[this.selectedUserId]; 
            } else {
                this.messageDetail = [];
            }
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



    getMessages(cb)  {
        let self = this;
        this.noticeService.getAll()
            .subscribe(
            notifications => {
                this.notifications = notifications;
                cb(notifications);
                
                self.arrangeNotification(notifications);                
            },
            error => {
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

            if(this.messageIndex) {
                this.messageMain = [];
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
            }
            if(this.inviteIndex) {
                this.inviteMain = [];
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

            if(this.messageIndex && this.tabSelected === 'message') {
                //Default to selecting the first message in the message category
                let firstNotice = this.messageMain[0];
                
                this.selectedUser = firstNotice.from;
                this.selectedUserId = firstNotice.from._id;
                this.messageDetail = this.messageIndex[firstNotice.from._id];
            } else {
                //When there's no message, default to display invites
                let firstNotice = this.inviteMain[0];
                this.tabSelected = 'invitation';
                this.selectedUser = firstNotice.from;
                this.selectedUserId = firstNotice.from._id;
                this.messageDetail = this.inviteIndex[firstNotice.from._id];
            }
        }
    }

    submitMessage(newMessage: any){
        let notification = {
            to: this.selectedUserId,
            description: newMessage,
            state: 'message'
        };
        
        this.noticeService.sendMessage(notification)
            .subscribe(
            notice => {
                this.newMessage = ''; // After submit, clean up the textarea.
            },
            error => {
                console.log(<any>error)
            });
    }

    respondToInvitation(notice: Notification, response: boolean) {
        if(response) {
            notice.response = true;
        } else {
            notice.response = false;
        }
        this.noticeService.confirmInvitation(notice)
            .subscribe(
            notice => {
                console.log('confirmed')
            },
            error => {
                console.log(<any>error)
            });
    }


    ngOnInit() {
        let self = this;

        this.getCurrentUser();
        this.getMessages((notifications) => {
            self.socket.syncArray('notification', self.currentUser._id, self.notifications, (event, item, array) => {
                self.notifications = array;
                
                self.arrangeNotification(self.notifications);
            });     
        });
    }

    ngOnDestroy() {
        this.socket.unsyncById('notification', this.currentUser._id);
    }
}
