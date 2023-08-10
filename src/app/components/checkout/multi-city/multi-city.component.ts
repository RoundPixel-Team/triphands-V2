import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FlightCheckoutService } from 'rp-travel-ui';

@Component({
  selector: 'app-multi-city',
  templateUrl: './multi-city.component.html',
  styleUrls: ['./multi-city.component.scss']
})
export class MultiCityComponent implements OnInit {
  public flight = inject(FlightCheckoutService) 
  public translate = inject(TranslateService)
  showDetails:boolean=false;
  collapseRoute:boolean=false;
   index:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  toggleDetailsCard(){
    this.showDetails=!this.showDetails;
  }
  detailsCollapse(index:number){
    if (this.index == index && this.collapseRoute == true) {
      this.collapseRoute = !this.collapseRoute;
    } else {
      this.index = index;
      this.collapseRoute = true;
    } 
  }
}
