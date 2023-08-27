import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { OneWayComponent } from './components/searchBox/one-way/one-way.component';
import { RoundTripComponent } from './components/searchBox/round-trip/round-trip.component';
import { MultiCityComponent } from './components/searchBox/multi-city/multi-city.component';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { TravellersComponent } from './components/searchBox/travellers/travellers.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchboxMobileComponent } from './components/searchBox/searchbox-mobile/searchbox-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    OneWayComponent,
    RoundTripComponent,
    MultiCityComponent,
    TravellersComponent,
    HomePageComponent,
    SearchboxMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
    }}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
