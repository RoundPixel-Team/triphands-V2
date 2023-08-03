import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FlightCheckoutService, HomePageService } from 'rp-travel-ui';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  
  public flight = inject(FlightCheckoutService) 
  private route = inject(ActivatedRoute)
  public translate = inject(TranslateService)
  public home = inject(HomePageService)


  phonenumber:string = 'phonenumber'

  subscription = new Subscription()
  constructor() { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.queryParams.subscribe((params)=>{
        this.flight.getSelectedFlightData(params["sid"],+params["sequenceNum"],params["providerKey"]?params["providerKey"]:params["pkey"])
        this.flight.getAllOfflineServices(params["sid"],'KW')
        // this.flight.fetchLastPassengerData()
      })
    )
  }


  //  valdidate phone component by chaning css 
  invalidPhone() {
    let phone: FormGroup = (<FormGroup>((<FormArray>this.flight.usersForm.get("users"))["controls"][0]));
    if (phone.get('phonenum')!.invalid && (phone.get('phonenum')!.touched || phone.get('phonenum')!.dirty)) {
      this.phonenumber = "alertPhone";
    } else {
      this.phonenumber = "phonenumber";
    }
  }

}
