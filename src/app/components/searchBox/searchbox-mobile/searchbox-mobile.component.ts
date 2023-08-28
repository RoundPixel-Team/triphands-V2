import { Component, OnInit } from '@angular/core';
import { inject, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { FlightSearchService } from 'rp-travel-ui';

@Component({
  selector: 'app-searchbox-mobile',
  templateUrl: './searchbox-mobile.component.html',
  styleUrls: ['./searchbox-mobile.component.scss']
})
export class SearchboxMobileComponent implements OnInit {
  searchbox = inject(FlightSearchService);
  router = inject(Router);
  route  =inject(ActivatedRoute);
  public screenWidth: number=650;  
  flightIndex: number = 0;
  flightType?:string ;
  hoveredDate: NgbDate | null = null;
	fromDate?: NgbDate;
	toDate: NgbDate | null = null;
  showPicker:boolean =true;

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;  
    this.flightType = this.searchbox.searchFlight.get('flightType')?.value;
    this.route.paramMap.subscribe(params => {
      let param = params.get('index');
      this.flightIndex = Number(param)
    });
  }

  backToSearchBox(){
    this.router.navigate(['/']);
  }
  confirmDate(){
    //update local storage after setting the date **Very important**
    localStorage.setItem('form', JSON.stringify(this.searchbox.searchFlight.value));
    this.backToSearchBox();
  }
  //update date value from form Array
  onDateSelection(date: NgbDate) {
    this.searchbox.flightsArray.at(this.flightIndex)?.get('departingD')?.setValue(new Date(date.year, date.month - 1, date.day));
  }
  onDateSelectionRound(date: NgbDate) {
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
showDatePicker(){
  this.showPicker = true;
}
showTravellers(){
  this.showPicker = false;
}
  @HostListener('window:resize', ['$event'])  
  onResize() {  
    this.screenWidth = window.innerWidth;  
  }  
}
