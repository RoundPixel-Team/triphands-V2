import { Component, OnInit, inject } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { FilterCityPipe, FlightSearchService, airPorts } from 'rp-travel-ui';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.scss']
})
export class OneWayComponent implements OnInit {
  searchbox = inject(FlightSearchService);
  translate = inject(TranslateService);
  sharedService = inject(SharedService);
  constructor() { }

  ngOnInit(): void { }
//update date value from form Array
  onDateSelection(date: NgbDate){
    console.log(date)
    this.searchbox.flightsArray.at(0).get('departingD')?.setValue(new Date(date.year,date.month-1,date.day))
  }
submit(){
  console.log("ONE WAY FORMMM", this.searchbox.searchFlight.value)
}

}
