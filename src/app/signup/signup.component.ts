import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {
  title = "Signup";
  condition = true;
  userName: String ='';
  userEmail: String ='';
  userPassword: String ='';
  userConfirmPassword: string ='';
  formValuesup: any;
  formValuesin: any;
  showname:boolean = false;
  showmail:boolean = false;
  showmaill:boolean = false;
  showpass:boolean = false;
  showpasss:boolean = false;
  showcpass:boolean = false;

  constructor(private router: Router) { }

  In() {
    this.title = "Signin";
    this.condition = false;
  }

  Up() {
    this.title = "Signup";
    this.condition = true;
  }

  onSubmitUp(form: any) {
    console.log(form.value);
    this.formValuesup = form;
    this.userName = form.value.name;
    this.userEmail = form.value.email;
    this.userPassword = form.value.password;
    this.userConfirmPassword = form.value.cpassword;
    this.popShow(form);
    this.popHide(form);
    if(!(this.showname && this.showmail && this.showcpass && this.showpass)){
      this.router.navigate(['']);
    }

  }

  popShow(form: any) {
    console.log((form.controls['name'].value === ''))
    if((form.controls['name'].value === '')){
      this.showname=true;
    }
    if((form.controls['email'].value === '')){
      this.showmail=true;
    }
    if((form.controls['password'].value === '') || (form.controls['cpassword'].value === '') || (form.controls['password'].value != form.controls['cpassword'].value)){
      this.showpass=true;
      this.showcpass=true;
    }
  }

  popHide(form: any) {
    if(!(form.controls['name'].value === '')){
      this.showname=false;
    }
    if(!(form.controls['email'].value === '')){
      this.showmail=false;
    }
    if(!(form.controls['password'].value === '')){
      this.showpass=false;
    }
    if(!(form.controls['cpassword'].value === '')){
      this.showcpass=false;
    }
    if((form.controls['password'].value != '') && (form.controls['cpassword'].value != '') && (form.controls['password'].value === form.controls['cpassword'].value)){
      this.showcpass=false;
      this.showpass=false;
    }
  }

  onSubmitIn(form: any) {
    console.log(form.value);
    this.formValuesin = form;
    this.userEmail = form.value.email;
    this.userPassword = form.value.password;
    this.popShoww(form);
    this.popHidee(form);
    if(!(this.showmaill && this.showpasss)){
      this.router.navigate(['']);
    }
  }

  popShoww(form: any) {
    if((form.controls['password'].value === '')){
      this.showpasss=true;
    }
    if((form.controls['email'].value === '')){
      this.showmaill=true;
    }
  }

  popHidee(form: any) {
    if(!(form.controls['password'].value === '')){
      this.showpasss=false;
    }
    if(!(form.controls['email'].value === '')){
      this.showmaill=false;
    }
  }

}
