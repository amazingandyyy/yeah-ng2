import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
import { NotificationService } from '../shared/services/notification.service';
import { SocketService } from '../shared/services/socket.service';
import { User } from '../shared/types/user';
import { Notification } from '../shared/types/notification';


@Component({
    moduleId: module.id,
    selector: 'yeah-dashboard',
    templateUrl: 'dashboard.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService, SocketService, NotificationService],
    styleUrls: ['dashboard.style.css']
})

export class DashboardComponent implements OnInit, OnDestroy{
    // serve for the two dropdown list in top-right of the navbar
    currentUser: User;
    profileToggled: boolean = false;
    inboxToggled: boolean = false;
    currentSession: string;
    currentUserRole: string;
    notifications: Array<Notification>;
    noticeCount: number;

    constructor(
        private authService: AuthService,
        private router: Router,
        private socket: SocketService,
        private noticeService: NotificationService
    ){}

    checkMenuStyle(item: string) {
        this.currentSession = item;
    }

    logout() {
        // the service will delete user data and token in localStorage
        // and bring user out of the dashboard
        this.authService.logUserOut()
    }

    getUser() {
        this.authService.getCurrentUser(JSON.parse(localStorage.getItem('current_user'))._id)
            .subscribe(
            user => {
                this.currentUserRole = user.role;
                this.currentUser = user
            },
            error => {
                this.authService.logUserOut();
                console.log(<any>error)
            });
    }

    getNotification(cb) {
        let self = this;
        this.noticeService.getThree()
            .subscribe(
            notices => {
                console.log('notifications', notices)
                this.notifications = notices;
                cb();
            },
            error => {
                console.log(<any>error)
                cb();
            });
    }

    getNotificationCount() {
        let self = this;
        this.noticeService.getCount()
            .subscribe(
            count => {
                if(isNaN(count)) {
                    self.noticeCount = null;
                } else {
                    self.noticeCount = count;
                }
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
        console.log('notice', notice);
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
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getUser();
        let self = this;
        this.getNotification(function() {
            //Listen to updates after loading the first three notifications
            self.socket.syncById('notification', self.currentUser._id, function(notice) {
                this.notifications.unshift(notice);
                this.notifications.pop();
                if(!notice.read) {
                    self.noticeCount++;
                }
            });   
        });
        this.getNotificationCount();
        
    }

    ngOnDestroy() {
        this.socket.unsyncById('notification', this.currentUser._id);
    }
}