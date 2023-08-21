import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightResultRoutingModule } from './flight-result-routing.module';
import { FlightResultComponent } from './flight-result.component';
import { OnewayComponent } from './oneway/oneway.component';
import { RoundtripComponent } from './roundtrip/roundtrip.component';
import { MulticityComponent } from './multicity/multicity.component';


@NgModule({
  declarations: [
    FlightResultComponent,
    OnewayComponent,
    RoundtripComponent,
    MulticityComponent
  ],
  imports: [
    CommonModule,
    FlightResultRoutingModule
  ]
})
export class FlightResultModule { }
