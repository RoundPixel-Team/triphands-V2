import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FlightCheckoutService, HomePageService } from 'rp-travel-ui';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {

  public flight = inject(FlightCheckoutService)
  public translate = inject(TranslateService)
  public home = inject(HomePageService)

  todayDate = new Date();
  minAdultDateBirth = new Date(1990, 0, 1)
  minChildDateBirth = new Date(2010, 0, 1)
  minInfantDateBirth = new Date(2020, 0, 1)
  passengerCompleted: boolean[] = [];

  @Output() fareBreakup = new EventEmitter<boolean>();

  constructor(private fb : FormBuilder) { 
   
  }

  ngOnInit(): void {
    console.log(this.flight.usersArray.at(0).get('title')?.value)
    // this.flight.usersForm = this.fb.group({
    //   // ... Other form controls ...
    //   firstPanelCompleted: [false],
    // });

    // // Subscribe to form value changes
    // this.flight.usersForm.valueChanges.subscribe(() => {
    //   // Check if the 1st user form is valid and completed
    //   if (this.isFirstUserFormValidAndCompleted()) {
    //     this.flight.usersForm.get('firstPanelCompleted').setValue(true);
    //   }
    // });
  }
  // isFirstUserFormValidAndCompleted(): boolean {
  //   const firstUserForm = this.flight.usersArray.at(0); // Assuming 1st user is at index 0

  //   // Add your validation logic here
  //   return firstUserForm.valid  /* Add other conditions as needed */;
  // }

  initializePassengerCompletion() {
    for (let i = 0; i < this.flight.usersArray.length; i++) {
      this.passengerCompleted[i] = false;
    }
  }
  completePassengerForm(index: number) {
    this.passengerCompleted[index] = true;
  }
  assignGenderToUser(index:number,value:string){
    this.flight.usersArray.at(index).get('title')?.setValue(value)
  }

  assignCountries(event:any,index:number){
    this.flight.usersArray.at(index).get('countryOfResidence')?.setValue(event.option.value)
    this.flight.usersArray.at(index).get('nationality')?.setValue(event.option.value)
  }

  openFareBreakUp(){
    this.fareBreakup.emit(true)
  }

  saveBooking(){
    console.log("show me the form",this.flight.usersArray)
    if(this.flight.usersArray.invalid){
      for(var i = 0; i < this.flight.usersArray.length ; i++){
        this.flight.usersArray.at(i).markAllAsTouched()
      }

      document.getElementById('passengersFormSection')!.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      if (this.translate.currentLang=='en'){
        this.Payerror('Oops..','Passengers data are not completed');
      }else{
        this.Payerror('عذرا..','بيانات المسافرين ليست مكتملة');
      }
      
    }
    else{
      this.flight.saveBooking(this.home.selectedCurrency.Currency_Code)
    }
    
  }
Payerror(title:string,message:string){
  Swal.fire({
    icon: 'error',
    title: title,
    text: message,
  });
}
}
