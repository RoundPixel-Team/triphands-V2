import { Component, OnInit, inject } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { AlertMsgModel, FlightSearchService } from 'rp-travel-ui';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.scss'],
})
export class OneWayComponent implements OnInit {
  //#region variables
  searchbox = inject(FlightSearchService);
  translate = inject(TranslateService);
  sharedService = inject(SharedService);
  showDatePicker:boolean = true;
  lang:string='en';
  resultLink?:string | { adult: AlertMsgModel; child: AlertMsgModel; infant: AlertMsgModel; retDate: AlertMsgModel; depDate: AlertMsgModel; };
  //#endregion
  constructor() {}

  ngOnInit(): void {   
  }
  showDate(){
    this.showDatePicker = true;
  }
  showTravellers(){
    this.showDatePicker = false;
  }
  //get total Passengers
  getTotalPassenger(){
    let adult = this.searchbox.searchFlight?.get('passengers.adults')?.value;
    let child = this.searchbox.searchFlight?.get('passengers.child')?.value;
    let infant = this.searchbox.searchFlight?.get('passengers.infant')?.value;
    return this.searchbox.getTotalPassengers(adult,child,infant);
  }
  //update date value from form Array
  onDateSelection(date: NgbDate) {
    this.searchbox.flightsArray
      .at(0)
      .get('departingD')
      ?.setValue(new Date(date.year, date.month - 1, date.day));
  }
  submit() {
    this.lang = JSON.stringify(localStorage.getItem('lang') as string);
    console.log('ONE WAY FORMMM', this.searchbox.searchFlight.value);
    this.resultLink = this.searchbox.onSubmit(this.lang,'kwd','eg',0,',');
    console.log("FINAL RESPONSE", this.searchbox.onSubmit(this.lang,'kwd','eg',0,','));
  }
}
