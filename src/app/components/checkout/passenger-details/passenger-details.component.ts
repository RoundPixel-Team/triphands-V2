import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FlightCheckoutService, HomePageService } from 'rp-travel-ui';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {

  public flight = inject(FlightCheckoutService)
  public translate = inject(TranslateService)
  public home = inject(HomePageService)

  todayDate = new Date();
  minAdultDateBirth = new Date(1990, 0, 1)
  minChildDateBirth = new Date(2010, 0, 1)
  minInfantDateBirth = new Date(2020, 0, 1)


  @Output() fareBreakup = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.flight.usersArray.at(0).get('title')?.value)
  }


  assignGenderToUser(index:number,value:string){
    this.flight.usersArray.at(index).get('title')?.setValue(value)
  }

  assignCountries(event:any,index:number){
    this.flight.usersArray.at(index).get('countryofresident')?.setValue(event.option.value)
    this.flight.usersArray.at(index).get('national')?.setValue(event.option.value)
  }

  openFareBreakUp(){
    this.fareBreakup.emit(true)
  }

}
