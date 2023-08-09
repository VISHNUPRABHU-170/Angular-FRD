import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {
  arrin = ["Enter MailId", "Enter Password"];
  arrup = ["Enter Username", "Enter MailId", "Enter Password", "Confirm Password"];
  arr: string[] = [];
  title = "Signup";
  condition = true;

  constructor() {
    this.arr = this.arrup;
  }

  In() {
    this.arr = this.arrin;
    this.title = "Signin";
    this.condition = false;
  }

  Up() {
    this.arr = this.arrup;
    this.title = "Signup";
    this.condition = true;
  }

}
