import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router }      from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sp-app',
    templateUrl: 'app.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    constructor(private router: Router) {
    }
    go(desination: string) {
        this.router.navigate([desination]);
    }    
}