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
        // private notificationService: NotificationsService,
        private noticeService: NoticeService
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

    getNotification() {
        let self = this;
        this.noticeService.getThree()
            .subscribe(
            notices => {
                this.notifications = notices;
            },
            error => {
                console.log(<any>error)
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
                this.getNotificationCount()
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
        this.inboxToggled = !this.inboxToggled;
        this.router.navigate(['dashboard/messages']);
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('current_user'));
        this.getUser();
        let self = this;
        this.getNotification()
        this.getNotificationCount()
        self.socket.syncById('notification', self.currentUser._id, (notice) => {
            this.getNotification()
            this.getNotificationCount()
        })
    }

    ngOnDestroy() {
        this.socket.unsyncById('notification', this.currentUser._id);
    }
}