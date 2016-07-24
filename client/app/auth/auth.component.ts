import { Component, OnInit } from '@angular/core';
import { AuthFormComponent } from './auth.form.component';

@Component({
    moduleId: module.id,
    selector: 'sp-auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.style.css'],
    directives: [AuthFormComponent]
})

export class AuthComponent {
}  