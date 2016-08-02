import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { NgClass } from '@angular/common';
import { SignupService } from '../shared/services/signup.service';
import { Auth } from '../shared/types/auth';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.style.css'],
    providers: [SignupService],
    directives: [ROUTER_DIRECTIVES]

})

export class SignupComponent implements OnInit {
	  private selectedRole: string;
    private sub: any;
    private roleCh: string;

    constructor(
    	private router: Router,
      private route: ActivatedRoute,
      private signupService: SignupService
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

    onSubmit(auth: Auth) {
      auth.role = this.selectedRole;
      var self = this;
        this.signupService.signUp(auth)
            .subscribe(
            res => handleResponse(res),
            err => handleError(err)
            )

      function handleResponse(res) {
          console.log('res from backend', res);
          localStorage.setItem('id_token', JSON.stringify(res.token));
          localStorage.setItem('current_user', JSON.stringify(res.user));
      }

      function handleError(err) {
        if(err.statusText === 'Conflict') {
          //Let user know this email already exist
          console.log('this email already exist');
        }
      }
    }


    ngOnInit() {
      this.selectedRole = undefined;
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
	