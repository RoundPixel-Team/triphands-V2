import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FlightCheckoutService } from 'rp-travel-ui';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.scss']
})
export class OneWayComponent implements OnInit {
  public flight = inject(FlightCheckoutService) 
  public translate = inject(TranslateService)
  showDetails:boolean=false;
  collapseRoute:boolean=false;
  subscription = new Subscription()
  

  constructor() { }

  ngOnInit(): void {
  this.flight.selectedFlight;
  }
  toggleDetailsCard(){
    this.showDetails=!this.showDetails;
  }
  detailsCollapse(){
    this.collapseRoute=!this.collapseRoute;
  }
 
}
