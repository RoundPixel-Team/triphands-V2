import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { OneWayComponent } from './one-way/one-way.component';
import { RoundTripComponent } from './round-trip/round-trip.component';
import { MultiCityComponent } from './multi-city/multi-city.component';
import { OfflineServiceComponent } from './offline-service/offline-service.component';
import { BookNowComponent } from './book-now/book-now.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@NgModule({
  declarations: [
    CheckoutComponent,
    OneWayComponent,
    RoundTripComponent,
    MultiCityComponent,
    OfflineServiceComponent,
    BookNowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxIntlTelInputModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
