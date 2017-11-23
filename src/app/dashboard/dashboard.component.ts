import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
declare var simpleheat: any;
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  id: number;
  private sub: any;

  email = localStorage.getItem("email");

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.dashboardService.getCoordinates(this.email)
		// 	.subscribe(
		// 	obj => {
    //     console.log(obj);
    //     this.data = JSON.stringify(obj);
		// 	},
		// 	error => {
    //
		// 	});
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {

  }

  toggleMenu() {
    $('#settings').toggle();
  }
  logout() {
		// this.tokenService.logOut();
		localStorage.removeItem("token");
		let link = ['/'];
		this.router.navigate(link);
	}

}
