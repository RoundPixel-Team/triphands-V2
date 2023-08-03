import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { OneWayComponent } from './one-way/one-way.component';
import { RoundTripComponent } from './round-trip/round-trip.component';
import { MultiCityComponent } from './multi-city/multi-city.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CheckoutComponent,
    OneWayComponent,
    RoundTripComponent,
    MultiCityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
