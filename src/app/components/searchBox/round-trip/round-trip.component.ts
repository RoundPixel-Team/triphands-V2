import { Component, HostListener, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertMsgModel, FlightSearchService, HomePageService } from 'rp-travel-ui';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbInputDatepickerConfig, } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-round-trip',
  templateUrl: './round-trip.component.html',
  styleUrls: ['./round-trip.component.scss'],
})
export class RoundTripComponent implements OnInit {
  //#region variables
  searchbox = inject(FlightSearchService);
  homePageService = inject(HomePageService);
  translate = inject(TranslateService);
  sharedService = inject(SharedService)
  router = inject(Router)

  public screenWidth: number= 650;

  showDatePicker:boolean = true;
  hoveredDate: NgbDate | null = null;
	fromDate: NgbDate;
	toDate: NgbDate | null = null;
  lang:string='en';
  currency?: string;
  resultLink?:string | { adult: AlertMsgModel; child: AlertMsgModel; infant: AlertMsgModel; retDate: AlertMsgModel; depDate: AlertMsgModel; };
  
//#endregion
	constructor(public calendar: NgbCalendar, public formatter: NgbDateParserFormatter,config: NgbInputDatepickerConfig) {

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    config.minDate = { year: 1900, month: 1, day: 1 };
		config.maxDate = { year: 2099, month: 12, day: 31 };
    // days that don't belong to current month are not visible
		config.outsideDays = 'hidden';
    // setting datepicker popup to close only on click outside
		config.autoClose = 'outside';
	}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth; 
  }
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
  showMobileDate(index:number){
    this.router.navigate([`/searchboxMob/${index}`])
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
    this.lang = this.translate.currentLang; //get language
    this.currency = this.homePageService.selectedCurrency.Currency_Code; //get currency from homepage service
    this.resultLink = this.searchbox.onSubmit(
      this.lang,
      this.currency,
      this.lang,
      1,
      ','
    ); //call submit function from searchbox service
    let splittedLink = this.resultLink.toString().split('/');
    if (typeof this.resultLink == 'object') {
      //loop on resultLink object which have returned messages of unvalid inputs
      Object.entries(this.resultLink).forEach(([key, value], index) => {
        if (this.lang == 'en') {
          this.tinyAlert(value.enMsg);
        } else {
          this.tinyAlert(value.arMsg);
        }
        console.log(value.enMsg);
      });
      this.searchbox.searchFlight.updateValueAndValidity();
    } else if (typeof this.resultLink == 'string' && this.resultLink != '') {
      this.router.navigate([
        '/flightResult',
        splittedLink[0],
        splittedLink[1],
        splittedLink[2],
        splittedLink[3],
        splittedLink[4],
        splittedLink[5],
        splittedLink[6],
        splittedLink[7],
        splittedLink[8],
      ]);
      localStorage.setItem('form',JSON.stringify(this.searchbox.searchFlight.value))
    }
  }

  tinyAlert(message: any) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
    });
  }
  @HostListener('window:resize', ['$event'])  
  onResize() {  
    this.screenWidth = window.innerWidth;  
  }  
}
