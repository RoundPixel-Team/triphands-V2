import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FlightCheckoutService } from 'rp-travel-ui';

@Component({
  selector: 'app-round-trip',
  templateUrl: './round-trip.component.html',
  styleUrls: ['./round-trip.component.scss']
})
export class RoundTripComponent implements OnInit {
  public flight = inject(FlightCheckoutService) 
  public translate = inject(TranslateService)
  constructor() { }

  ngOnInit(): void {
  }

}
