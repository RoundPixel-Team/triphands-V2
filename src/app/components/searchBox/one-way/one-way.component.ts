import { Component, OnInit, inject } from '@angular/core';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { FlightSearchService } from 'rp-travel-ui';
import { NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CitiesModule } from '../interfaces/interfaces';
import airporten from "src/assets/airports/airporten.json"; 

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.scss']
})
export class OneWayComponent implements OnInit {
  searchbox = inject(FlightSearchService);
  translate = inject(TranslateService);
  model?: NgbDateStruct;
  cities: CitiesModule[] = [];
  citiesar?: CitiesModule[];
  citiesen?: CitiesModule[];
	date?: { year: number; month: number };

  constructor(private calendar: NgbCalendar) { }
	selectToday() {
		this.model = this.calendar.getToday();
	}
  ngOnInit(): void {
    this.citiesen = airporten;
  }


  onDateSelection(date: NgbDate){
    console.log(date)
    this.searchbox.flightsArray.at(0).get('departingD')?.setValue(new Date(date.year,date.month-1,date.day))
  }

}
