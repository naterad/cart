import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  email = localStorage.getItem("email");
  data = null;

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {
    this.dashboardService.getCoordinates(this.email)
			.subscribe(
			obj => {
        console.log(obj);
        this.data = JSON.stringify(obj);
			},
			error => {
				//console.log(error);
			});
    //this.getNewLeads();
  }

  ngOnInit() {}

  logout() {
		// this.tokenService.logOut();
		localStorage.removeItem("token");
		let link = ['/'];
		this.router.navigate(link);
	}
}
