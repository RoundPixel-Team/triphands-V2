import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {  HomePageService, currencyModel } from 'rp-travel-ui';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public Utilities = inject(HomePageService)
public translate = inject(TranslateService)
Lang:string= this.translate.currentLang;

  constructor() { }

  ngOnInit(): void {
    this.Utilities.getCurrency(this.Utilities.selectedCurrency.Currency_Code)
    // this.Utilities.allCurrency
    this.Utilities.selectedCurrency
  }
  updateCurrency(currency:currencyModel){
    this.Utilities.selectedCurrency=currency;
  }
  updateLang(){
    this.translate.use(this.translate.currentLang == 'en'?'ar':'en');
  }

}
