import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
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

  constructor(@Inject(DOCUMENT) private document: Document,) { }

  ngOnInit(): void {
    this.Utilities.getCurrency(this.Utilities.selectedCurrency.Currency_Code)
    this.Utilities.selectedCurrency
  }
  updateCurrency(currency:currencyModel){
    this.Utilities.selectedCurrency=currency;
  }
  updateLang(){
    this.translate.use(this.translate.currentLang == 'en'?'ar':'en');
    setTimeout(() => {
      if(this.translate.currentLang=='en'){
     
        this.document.dir='ltr';
  
      }else {
        this.document.dir='rtl';
      }
      localStorage.setItem('lang',this.translate.currentLang)
    },300)
 
  }

}
