import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sp-landing',
    templateUrl: 'landing.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['landing.style.css']
})
export class LandingComponent { }