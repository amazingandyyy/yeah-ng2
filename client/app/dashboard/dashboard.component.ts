import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
import { NoticeService } from '../shared/services/notification.service';
import { SocketService } from '../shared/services/socket.service';
import { User } from '../shared/types/user';
import { Notification } from '../shared/types/notification';
import { NotificationsService, SimpleNotificationsModule } from 'notifications';


@Component({
    moduleId: module.id,
    selector: 'yeah-dashboard',
    templateUrl: 'dashboard.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService, SocketService, NoticeService],
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
        private noticeService: NoticeService,
        // private notificationService: NotificationsService

    ){}

    public options = {
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: "visible",
        rtl: false,
        animate: "scale",
        position: ["right", "bottom"]
    }

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
        this.noticeService.confirmInvitation(notice)
            .subscribe(
            notice => {
                //
                console.log('confirmed')
            },
            error => {
                console.log(<any>error)
            });
    }

    checkNotications(notice: Notification, cb: any) {
        let exist = false;
        this.notifications.forEach(function(eachNoticeNow) {
            if(notice._id === eachNoticeNow._id) {
                exist = true;
                cb(exist);
                return;
            }
        });
        cb(exist);
    }

    goToMessagePage() {
        
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getUser();
        let self = this;
        this.getNotification(function() {
            //Listen to updates after loading the first three notifications
            self.socket.syncById('notification', self.currentUser._id, function(notice) {
                self.checkNotications(notice, function(exist) {
                    //If notification already exist only update read count
                    if(exist) {
                        if(notice.read) {
                            self.noticeCount--;
                        }
                        return;
                    } else {
                        // self.notificationService.success(notice.title, notice.description, {id: 123});
                        self.notifications.unshift(notice);
                        //Only display three messages
                        if(self.notifications.length > 3) {
                            self.notifications.pop();
                        }
                        if(!notice.read) {
                            self.noticeCount++;
                        }
                    }
                });
            });   
        });
        this.getNotificationCount();
        
    }

    ngOnDestroy() {
        this.socket.unsyncById('notification', this.currentUser._id);
    }
}