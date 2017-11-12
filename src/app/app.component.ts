import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {

    var hostname = window.location.hostname;
    if(hostname.includes("localhost")){
      localStorage.setItem("API_URL", "http://localhost:8080");
      localStorage.setItem("email", "mjordan@gmail.com");
      localStorage.setItem("password", "mjordan");
    }else{
      localStorage.setItem("API_URL", "http://cart-monkey.herokuapp.com");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  }
}
