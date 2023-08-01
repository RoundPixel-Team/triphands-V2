import { Component, inject } from '@angular/core';
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
  constructor() {
    this.translate.use('en')
    
  }
  changeLang(){
    this.translate.use(this.translate.currentLang == 'en'?'ar':'en')
  }
}
