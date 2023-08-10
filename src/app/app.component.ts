import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EnvironmentService, HomePageService } from 'rp-travel-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public translate = inject(TranslateService)
  public home = inject(HomePageService)
  public environment = inject(EnvironmentService)
  title = 'triphands';

  /**
   *
   */
  constructor(@Inject(DOCUMENT) private document: Document) {

    let env = {
        offlineSeats:"http://178.63.214.219:7025",
        searchflow:  'https://wegosearch.triphands.com',
        BookingFlow:  'https://wegobook.triphands.com',
        FareRules:  'https://wegoprovider.triphands.com',
        asm:  'https://backofficeapi.triphands.com',
        Apihotels:  "https://hotels.rhlatycom",
        hotelprepay: 'https://prepayapi.triphands.com',
        users:  'https://usersapi.triphands.com',
        admin:  'https://adminapi.triphands.com/',
        getDPayment:  'https://adminapi.triphands.com/',
        bookHotels: "https://hotels.triphands.com",
        hotelPrepay: 'https://prepayapi.triphands.com',
        backOffice: 'https://backofficeapi.triphands.com',
        FlightTop:'https://flightsearch.triphands.com',
        offers: {
          getAll: 'http://41.215.243.138:7893/api/GetAllOffersAPI?POS=',
          getAllActive:'http://41.215.243.138:7893/api/GetAllActiveOffersAPI?POS=',
          getByID: 'http://41.215.243.138:7893/api/GetOfferByIdAPI?OfferId=',
          BookOffer: "http://41.215.243.138:7895/api/BookOffer",
          RetriveItineraryDetails:'/api/Admin/RetriveItineraryDetails'
        }
      }

      let envTazkrti = {
          offlineSeats:"http://41.223.55.14:7025",
          searchflow:  'https://flightsearch.triphands.com',
          BookingFlow:  'https://flightflow.triphands.com',
          FareRules:  'https://flightprov.triphands.com',
          asm:  'https://backofficeapi.triphands.com',
          Apihotels:  "https://hotels.Tazkrticom",
          hotelprepay: 'https://prepayapi.triphands.com',
          users:  'https://usersapi.triphands.com',
          admin:  'https://adminapi.triphands.com/',
          getDPayment:  'https://adminapi.triphands.com/',
          bookHotels: "https://hotels.triphands.com",
          hotelPrepay: 'https://prepayapi.triphands.com',
          backOffice: 'https://backofficeapi.triphands.com',
          FlightTop:'https://flightsearch.triphands.com',
          offers: {
            getAll: 'http://41.215.243.36:7893/api/GetAllOffersAPI?POS=',
            getByID: 'http://41.215.243.36:7893/api/GetOfferByIdAPI?OfferId=',
            BookOffer: "http://41.215.243.36:7895/api/BookOffer",
            RetriveItineraryDetails:'/api/Admin/RetriveItineraryDetails'
          }
      }

    this.environment.envConfiguration(env)
    
    setTimeout(()=>{
      if(localStorage.getItem('lang')){

        this.translate.use(localStorage.getItem('lang')!)
        setTimeout(() => {
          if(this.translate.currentLang=='en'){
         
            this.document.dir='ltr';
      
          }else {
            this.document.dir='rtl';
          }
        },300)
      }else{
        this.translate.use('en');
        this.document.dir='ltr';
      }
    
      this.home.getPointOfSale();
      this.home.getCountries(this.translate.currentLang)
    },500)
    
  }

  

}
