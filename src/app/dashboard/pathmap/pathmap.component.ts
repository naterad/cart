import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
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
  @Input() data: any;

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {
  }

  ngOnInit() {}

  ngAfterViewChecked() {
  }

}
