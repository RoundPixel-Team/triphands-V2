import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertMsgModel, FlightSearchService } from 'rp-travel-ui';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-round-trip',
  templateUrl: './round-trip.component.html',
  styleUrls: ['./round-trip.component.scss'],
})
export class RoundTripComponent implements OnInit {
  //#region variables
  searchbox = inject(FlightSearchService);
  translate = inject(TranslateService);
  sharedService = inject(SharedService)

  showDatePicker:boolean = true;
  hoveredDate: NgbDate | null = null;
	fromDate: NgbDate;
	toDate: NgbDate | null = null;
  lang:string='en';
  resultLink?:string | { adult: AlertMsgModel; child: AlertMsgModel; infant: AlertMsgModel; retDate: AlertMsgModel; depDate: AlertMsgModel; };
  
//#endregion
	constructor(calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
		this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
	}

  ngOnInit(): void {}
   //update date value from form Array
   onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
			this.toDate = date;
      this.searchbox.searchFlight.controls['returnDate'].setValue(new Date(this.toDate?.year, this.toDate?.month - 1, this.toDate?.day));
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
    this.searchbox.flightsArray.at(0).get('departingD')?.setValue(new Date(this.fromDate?.year, this.fromDate?.month - 1, this.fromDate?.day));
    
  }
  isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
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
  submit() {
    console.log('ROUND TRIP FORMMM', this.searchbox.searchFlight.value);
  }
}
