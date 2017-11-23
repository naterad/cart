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
    // let self=this;
    // $("#contact_button").click(function() {
    //   $('html, body').animate({
    //       scrollTop: $("#slide-4").offset().top
    //   }, 600);
    // });
  }

}
