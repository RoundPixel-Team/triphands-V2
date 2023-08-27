import { Component, HostListener, OnInit, inject } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { AlertMsgModel, FlightSearchService } from 'rp-travel-ui';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-multi-city',
  templateUrl: './multi-city.component.html',
  styleUrls: ['./multi-city.component.scss'],
})
export class MultiCityComponent implements OnInit {
  //#region variables
  searchbox = inject(FlightSearchService);
  translate = inject(TranslateService);
  sharedService = inject(SharedService);
  router = inject(Router);

  public screenWidth: number=650;    

  showDatePicker:Array<boolean>=[true,false,false,false];
  showTraveller:Array<boolean>=[false,false,false,false];
  flightActionValid: boolean = true;
  lang:string='en';
  resultLink?:string | { adult: AlertMsgModel; child: AlertMsgModel; infant: AlertMsgModel; retDate: AlertMsgModel; depDate: AlertMsgModel; };
  //#endregion
  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }

  showDate(index:number) {
    this.showTraveller[index]=false;
    this.showDatePicker[index]=!this.showDatePicker[index];
  }
  showMobileDate(index:number){
    this.router.navigate([`/searchboxMob/${index}`])
  }
  showTravellers(index:number) {
    this.showDatePicker[index]=false;
    this.showTraveller[index]= !this.showTraveller[index];
  }
  //get total Passengers
  getTotalPassenger() {
    let adult = this.searchbox.searchFlight?.get('passengers.adults')?.value;
    let child = this.searchbox.searchFlight?.get('passengers.child')?.value;
    let infant = this.searchbox.searchFlight?.get('passengers.infant')?.value;
    return this.searchbox.getTotalPassengers(adult, child, infant);
  }
  //update date value from form Array
  onDateSelection(date: NgbDate, index: number) {
    this.searchbox.flightsArray
      .at(index)
      .get('departingD')
      ?.setValue(new Date(date.year, date.month - 1, date.day));
  }
  addFlight() {
    this.searchbox.addFlight();
    let len = this.searchbox.flightsArray.length;
    if (len >= 4) {
      this.flightActionValid = false;
    }
  }
  removeFlight() {
    this.searchbox.removeFlight();
    let len = this.searchbox.flightsArray.length;
    if (len <= 1) {
      this.flightActionValid = true;
    }
  }
  submit() {
    console.log('MULTI CITY FORMMM', this.searchbox.searchFlight.value);
  }

  @HostListener('window:resize', ['$event'])  
  onResize() {  
    this.screenWidth = window.innerWidth;  
  }  
}
