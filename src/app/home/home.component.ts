import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {

  }

  scroll(event) {
    var temp = $(".main").scrollTop();
    document.getElementById("slide1").style.backgroundPositionY = 0 + (temp*0.2) + 'px';
    // document.getElementById("slide4").style.backgroundPositionY = 400 - (temp/14) + '%';
    document.getElementById("slide4").style.backgroundPositionY = 770 + (temp*0.2) + 'px';
  }

}
