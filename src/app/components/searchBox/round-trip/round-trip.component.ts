import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FlightSearchService } from 'rp-travel-ui';

@Component({
  selector: 'app-round-trip',
  templateUrl: './round-trip.component.html',
  styleUrls: ['./round-trip.component.scss']
})
export class RoundTripComponent implements OnInit {
  searchbox = inject(FlightSearchService);
  translate = inject(TranslateService)
  constructor() { }

  ngOnInit(): void {
    console.log("Formmmmm", this.searchbox.searchFlight);
  }

}
