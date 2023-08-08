import { Component, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CountryISO } from 'ngx-intl-tel-input';
import { FlightCheckoutService, HomePageService } from 'rp-travel-ui';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit,OnDestroy {
  
  public flight = inject(FlightCheckoutService) 
  private route = inject(ActivatedRoute)
  public translate = inject(TranslateService)
  public home = inject(HomePageService)
  private router = inject(Router)

  CountryISO = CountryISO;

  checkoutStepNow : number = 1
  phonenumber:string = 'phonenumber'

  showFareBreaker : boolean = false

  subscription = new Subscription()

  scrollToMainForm!: ElementRef<HTMLInputElement>;
  constructor() { }
  

  ngOnInit(): void {
    this.subscription.add(
      this.route.queryParams.subscribe((params)=>{
        this.flight.getSelectedFlightData(params["sid"],+params["sequenceNum"],params["providerKey"]?params["providerKey"]:params["pkey"])
        this.flight.getAllOfflineServices(params["sid"],'KW')
        // this.flight.fetchLastPassengerData()
      })
    )

    this.subscription.add(this.flight.paymentLink.subscribe((res:any)=>{
      console.log("show me payment link",res)
      if(res){
        window.location.href = res.link;
      }
    }))
  }

  changeCheckoutStep(event:number){
    if(event == -1){
      this.invalidPhone()
      document.getElementById('mainFormSection')!.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }else{
      this.checkoutStepNow = event
    }
    
  }
  //  valdidate phone component by chaning css 
  invalidPhone() {
    let phone: FormGroup = (<FormGroup>((<FormArray>this.flight.usersForm.get("users"))["controls"][0]));
    if (phone.get('phoneNumber')!.invalid && (phone.get('phoneNumber')!.touched || phone.get('phoneNumber')!.dirty)) {
      this.phonenumber = "alert";
    } else {
      this.phonenumber = "phonenumber";
    }
  }

  fareBreakupWindow(val:boolean){
    this.showFareBreaker = val
  }


  goToHomePage(){
    // this.router.navigate(['/'])
    location.reload()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.flight.destroyer()
  }


}
