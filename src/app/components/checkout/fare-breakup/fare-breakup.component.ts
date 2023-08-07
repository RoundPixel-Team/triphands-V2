import { Component, OnInit, inject } from '@angular/core';
import { FlightCheckoutService } from 'rp-travel-ui';

@Component({
  selector: 'app-fare-breakup',
  templateUrl: './fare-breakup.component.html',
  styleUrls: ['./fare-breakup.component.scss']
})
export class FareBreakupComponent implements OnInit {
  public flight = inject(FlightCheckoutService)

  constructor() { }

  ngOnInit(): void {
  }

}
