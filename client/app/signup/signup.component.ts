import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.style.css']
})

export class SignupComponent implements OnInit{
	selectedRole: string

    constructor(
    	private router: Router
    ) { }

    goToForm(selected: string) {
    	this.selectedRole = selected;
    	// this.router.navigate(['/signup', this.selectedRole]);
  	}

  	OnInit() {
  		// this.selectedRole = undefined;
  	}
}  
	