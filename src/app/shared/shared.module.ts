import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


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
    MatrialComponents
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    MatrialComponents,
    SharedComponents
  ]
})
export class SharedModule { }
