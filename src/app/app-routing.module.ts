import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchboxMobileComponent } from './components/searchBox/searchbox-mobile/searchbox-mobile.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent 
  },
  {
    path:'checkout',
    loadChildren:()  =>import('./components/checkout/checkout.module').then((m)=> m.CheckoutModule) 
  },
  {
    path:'flightResult',
    loadChildren:()  =>import('./components/flight-result/flight-result.module').then((m)=> m.FlightResultModule) 

  },
  {
    path:"searchbox",
    component:SearchBoxComponent
  },
  {
    path:"searchboxMob/:index",
    component:SearchboxMobileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
