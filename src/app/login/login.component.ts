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
        // console.log(obj);
        // localStorage.setItem("token", obj["token"]);
        var link = ['/dashboard'];
        this.router.navigate(link);
      },
      error => {
        console.log(error);
        localStorage.removeItem("token");
      }
    )
  }
}
