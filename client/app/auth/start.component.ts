import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'auth-start',
    styleUrls: ['auth.style.css'],
    templateUrl: 'start.component.html',
    directives: [ROUTER_DIRECTIVES]
    // template: ``
})
export class StartComponent{
    constructor() { }
}