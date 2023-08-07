import { Component, OnInit, inject } from '@angular/core';
import { FlightCheckoutService } from 'rp-travel-ui';

@Component({
  selector: 'app-multi-city',
  templateUrl: './multi-city.component.html',
  styleUrls: ['./multi-city.component.scss']
})
export class MultiCityComponent implements OnInit {
  public flight = inject(FlightCheckoutService) 

  constructor() { }

  ngOnInit(): void {
  }

}
