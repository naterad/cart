import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
declare var simpleheat: any;
declare var $: any;

@Component({
  selector: 'pathmap',
  templateUrl: './pathmap.component.html',
  styleUrls: ['./pathmap.component.css'],
  providers: [DashboardService]
})
export class PathmapComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
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

  ngOnInit() {}

  ngAfterViewChecked() {
  }

}
