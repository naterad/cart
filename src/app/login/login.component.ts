import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
error = "";
user = {
  "email_address": localStorage.getItem("email"),
  "password": localStorage.getItem("password")
}
// user = {
//   "email_address": "",
//   "password": ""
// }

constructor(
  private loginService: LoginService,
  private router: Router
){ }

ngOnInit() {}

login(){
  this.loginService.login(this.user.email_address, this.user.password)
    .subscribe(
      obj => {
        console.log(obj);
        if(obj[0]) {
          this.error = "";
          // login successful
          // localStorage.setItem("token", obj["token"]);
          localStorage.setItem("email", this.user.email_address);
          var link = ['/dashboard'];
          this.router.navigate(link);
        } else {
          // login failed
          this.error = "Incorrect email and/or password";
        }
      },
      error => {
        console.log(error);
        this.error = "Something went wrong";
        localStorage.removeItem("token");
      }
    )
  }
}
