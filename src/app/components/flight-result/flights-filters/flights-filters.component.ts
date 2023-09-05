import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, inject } from '@angular/core';
import { FlightResultService } from 'rp-travel-ui';

@Component({
  selector: 'app-flights-filters',
  templateUrl: './flights-filters.component.html',
  styleUrls: ['./flights-filters.component.scss']
})
export class FlightsFiltersComponent implements OnInit {

  flightResult = inject(FlightResultService)

  optionsLoading : Options = {
    ceil : 0,
    floor:500,
  }
  constructor() { }

  ngOnInit(): void {
  }

  closeMobileSideFilter(){
    document.getElementById("mobileFilterSideNav")!.style.width = "0";
    console.log("iam in the close",document.getElementById("mobileFilterSideNav")!.style.width)
  }

}
