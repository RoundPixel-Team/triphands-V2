import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'checkout',
    loadChildren:()  =>import('./components/checkout/checkout.module').then((m)=> m.CheckoutModule) 
  },
  {
    path:'flightResult',
    loadChildren:()  =>import('./components/flight-result/flight-result.module').then((m)=> m.FlightResultModule) 

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
