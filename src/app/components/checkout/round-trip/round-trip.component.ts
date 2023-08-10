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
  showDetails:boolean=false;
  collapseRoute:boolean=false;
  index:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDetailsCard(){
    this.showDetails=!this.showDetails;
  }
  detailsCollapse(index: number){
    if (this.index == index && this.collapseRoute == true) {
      this.collapseRoute = !this.collapseRoute;
    } else {
      this.index = index;
      this.collapseRoute = true;
    }  }
}
