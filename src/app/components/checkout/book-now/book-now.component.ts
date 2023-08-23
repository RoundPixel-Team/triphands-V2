import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
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

  @Output() checkoutSteps = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  } 


  goToNextStep(){
    console.log('show me the form', 2)
    if(this.flight.usersArray.at(0).get('email')?.status == 'INVALID' || this.flight.usersArray.at(0).get('phoneNumber')?.status == 'INVALID'){
      this.flight.usersArray.at(0).get('email')?.markAsTouched()
      this.flight.usersArray.at(0).get('phoneNumber')?.markAsTouched()
      this.checkoutSteps.emit(-1)
    }else{
      this.checkoutSteps.emit(2)
    }
    
  }

}
