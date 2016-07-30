import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.style.css']
})

export class SignupComponent implements OnInit {
	  private selectedRole: string;
    private sub: any;
    private roleCh: string;

    constructor(
    	private router: Router,
      private route: ActivatedRoute
    ) { }

    goToForm(selected: string) {  
    	this.router.navigate(['/signup', selected]);
  	}

    checkStyle(selected: string) {
      if(this.selectedRole === selected) {
        return true;
      }
      return false;
    }


    ngOnInit() {
      this.selectedRole = undefined;
      // console.log(this.route);
      if(this.route) {

        this.sub = this.route
        .params
        .subscribe(params => {
          this.selectedRole = params['role'];
          switch(this.selectedRole) {
            case 'student':
              this.roleCh = '学员';
              break;
            case 'advisor':
              this.roleCh = '顾问';
              break;
            case 'admin':
              this.roleCh = '管理员';
              break;
          }
        });
      }
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }
}  
	