import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sp-start',
    templateUrl: 'start.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class StartComponent {
    constructor() { }
}