import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { RpTravelUiModule } from 'rp-travel-ui';


export const MatrialComponents = [
  MatButtonModule
]

export const SharedComponents = [
  HeaderComponent,
  FooterComponent
]
@NgModule({
  declarations: [
    SharedComponents
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    RpTravelUiModule,
    MatrialComponents
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    MatrialComponents,
    SharedComponents,
    RpTravelUiModule,
    TranslateModule
  ]
})
export class SharedModule { }
