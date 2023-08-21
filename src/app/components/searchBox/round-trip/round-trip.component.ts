import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FlightSearchService, airPorts } from 'rp-travel-ui';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared/services/shared.service';
@Component({
  selector: 'app-round-trip',
  templateUrl: './round-trip.component.html',
  styleUrls: ['./round-trip.component.scss'],
})
export class RoundTripComponent implements OnInit {
  searchbox = inject(FlightSearchService);
  translate = inject(TranslateService);
  sharedService = inject(SharedService)
  cities?:airPorts[] =[] ;
  hoveredDate: NgbDate | null = null;
	fromDate: NgbDate | null;
	toDate: NgbDate | null;
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
  
  ngOnInit(): void {
    this.cities = this.sharedService.cities;
    console.log("AIRPORTS", this.cities);
    console.log('Formmmmm', this.searchbox.flightsArray.at(0).get('departing')?.value); 
  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
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

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}
