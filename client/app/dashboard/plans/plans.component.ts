import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { StartComponent } from './start.component';

@Component({
    moduleId: module.id,
    selector: 'sp-plans',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['plans.style.css']
})
export class PlansComponent {
    constructor() { }
}