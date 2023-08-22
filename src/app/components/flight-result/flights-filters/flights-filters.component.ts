import { Component, OnInit, inject } from '@angular/core';
import { FlightResultService } from 'rp-travel-ui';

@Component({
  selector: 'app-flights-filters',
  templateUrl: './flights-filters.component.html',
  styleUrls: ['./flights-filters.component.scss']
})
export class FlightsFiltersComponent implements OnInit {

  flightResult = inject(FlightResultService)

  // optionsLoading : Options = {
  //   ceil : 0,
  //   floor:500,
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
