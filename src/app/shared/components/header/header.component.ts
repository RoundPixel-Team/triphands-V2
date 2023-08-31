import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {  HomePageService, currencyModel } from 'rp-travel-ui';
import { SharedService } from '../../services/shared.service';
import airporten from "src/assets/airports/airporten.json"; 
import airportar from "src/assets/airports/airportar.json"; 
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public Utilities = inject(HomePageService)
public translate = inject(TranslateService)
public sharedService = inject(SharedService);

Lang:string= this.translate.currentLang;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dialog:MatDialog
    ) { }

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
        this.sharedService.cities = airporten;
        this.document.dir='ltr';
      }
      else if(this.translate.currentLang == 'ar') {
        this.sharedService.cities = airportar;
        this.document.dir='rtl';
      }
      localStorage.setItem('lang',this.translate.currentLang)
    },300)
    
  }


  goToLogin(){
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(LoginComponent,{panelClass: 'autModal'});
  }

}
