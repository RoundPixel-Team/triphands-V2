import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FlightCheckoutService } from 'rp-travel-ui';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {

  public flight = inject(FlightCheckoutService)
  public translate = inject(TranslateService)
  constructor() { }

  ngOnInit(): void {
  }


  goToNextStep(){
    console.log('show me the form', this.flight.usersArray)
  }

}
