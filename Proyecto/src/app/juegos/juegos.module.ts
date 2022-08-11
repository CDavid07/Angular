import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PptComponent } from './ppt/ppt.component';
import { GatoComponent } from './gato/gato.component';



@NgModule({
  declarations: [
    PptComponent,
    GatoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JuegosModule { }
