import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public translate = inject(TranslateService)
  title = 'triphands';

  /**
   *
   */
  constructor(@Inject(DOCUMENT) private document: Document) {
    
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
  
  }

}
