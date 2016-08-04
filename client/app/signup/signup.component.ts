import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { NgClass } from '@angular/common';

import { SignupService } from '../shared/services/signup.service';
import { Auth } from '../shared/types/auth';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['../shared/scss/partial/auth.css'],
    providers: [SignupService],
    directives: [ROUTER_DIRECTIVES]
})

export class SignupComponent implements OnInit {
	  private selectedRole: string;
    private sub: any;
    private roleCh: string;
    private confirmPassword: string;
    private pwMsgSuccess: boolean;
    private pwMsgFail: boolean;
    private logMessage: string;

    constructor(
    	private router: Router,
      private route: ActivatedRoute,
      private signupService: SignupService
    ) { }

    goToForm(selected: string) {
      // route to #/signup/:params
      this.confirmPassword = null;
      this.pwMsgSuccess = false;
      this.pwMsgFail = false;
    	this.router.navigate(['/signup', selected]);
  	}

    checkStyle(selected: string) {
      if(this.selectedRole === selected) {
        return true;
      }
      return false;
    }

    checkPw(auth: Auth, confirmPw: string) {
      this.pwMsgSuccess = false;
      this.pwMsgFail = false;
      //Only check if there's pw and has same length
      if(auth.password && confirmPw) {
        // if(auth.password.length === confirmPw.length) {
          if(auth.password === confirmPw) {
            //Let user know that the pw matches
            this.pwMsgSuccess = true;

          } else {
            //Let user know that the pw doesn't match
            this.pwMsgFail = true;
          }
        // }
      }
    }

    onSubmit(auth: Auth) {
      let self = this;

      //PW checking
      if(auth.password === this.confirmPassword) {
        //Don't send confirm password to the backend
        delete auth.confirmPassword;
        auth.role = this.selectedRole;
        this.signupService.signUp(auth)
            .subscribe(
            res => handleResponse(res),
            err => handleError(err)
            )
      }

      function handleResponse(res) {
          console.log(res);
          localStorage.setItem('id_token', JSON.stringify(res.token));
          localStorage.setItem('current_user', JSON.stringify(res.user));
          self.router.navigate(['dashboard']);
      }

      function handleError(err) {
        if(err.statusText === 'Conflict') {
          //Let user know this email already exist
          console.log('this email already exist');
          console.log(err);
          // self.logMessage = JSON.parse(err._body).message;
        }
      }
    }//End of on submit


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
	