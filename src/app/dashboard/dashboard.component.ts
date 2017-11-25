import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
declare var simpleheat: any;
declare var points: any;
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
  current = 0; // 0=heatmap, 1=pathmap
  stores = null;
  data = points;
  email = localStorage.getItem("email");

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.dashboardService.getStores(this.email)
			.subscribe(
			obj => {
        // console.log(obj);
        this.stores = obj;
        if(this.stores.length > 0) {
          this.dashboardService.getStoreCoordinates24Hours(this.stores[0].id)
          	.subscribe(
          	obj => {
              console.log(obj);
              // this.data = JSON.stringify(obj);
          	},
          	error => {

          	});
        }
			},
			error => {

			});
  }

  ngOnInit() {
  }

  closeDropdowns() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  ngAfterViewChecked() {
    let self=this;
    $('#special').on('click', function(e) { });
    $(document).on('click', function (e) {
    //  console.log(e.target.id);
     if (e.target.id != 'menu-dropdown') {
       var dropdowns = document.getElementsByClassName("dropdown-content");
       var i;
       for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
           openDropdown.classList.remove('show');
         }
       }
     }
    });
  }

  selectStore(index) {
    this.dashboardService.getStoreCoordinates24Hours(this.stores[index].id)
      .subscribe(
      obj => {
        this.data = JSON.stringify(obj);
      },
      error => {

      });
  }
  showHeatmap() {
    this.current = 0;
  }
  showPathmap() {
    this.current = 1;
  }
  toggleSettings() {
    this.closeDropdowns();
    document.getElementById("settingsDropdown").classList.toggle("show");
  }
  toggleStores() {
    this.closeDropdowns();
    document.getElementById("storesDropdown").classList.toggle("show");
  }
  toggleMaps() {
    this.closeDropdowns();
    document.getElementById("mapsDropdown").classList.toggle("show");
  }
  toggleCarts() {
    this.closeDropdowns();
    document.getElementById("cartsDropdown").classList.toggle("show");
  }
  toggleFilters() {
    this.closeDropdowns();
    document.getElementById("filtersDropdown").classList.toggle("show");
  }
  logout() {
		// this.tokenService.logOut();
		localStorage.removeItem("token");
		let link = ['/'];
		this.router.navigate(link);
	}

}
