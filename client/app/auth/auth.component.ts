import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sp-auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.style.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AuthComponent {
    constructor() { }
}  