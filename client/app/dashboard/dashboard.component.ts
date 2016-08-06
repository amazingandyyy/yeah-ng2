import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'yeah-dashboard',
    templateUrl: 'dashboard.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['dashboard.style.css']
})
export class DashboardComponent{
    private profileToggled: boolean = false;
    private inboxToggled: boolean = false;


    constructor(
        private router: Router
    ) { }
}