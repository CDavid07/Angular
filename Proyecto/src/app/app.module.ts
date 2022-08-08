import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './contador/hijo/hijo.component';
import { RuletaComponent } from './ruleta/ruleta.component';
import { SharedModule } from './shared/shared.module';
import { PiccoloComponent } from './piccolo/piccolo.component';
import { GohanComponent } from './piccolo/gohan/gohan.component';
import { JuegosModule } from './juegos/juegos.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    CalculadoraComponent,
    HijoComponent,
    RuletaComponent,
    PiccoloComponent,
    GohanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    JuegosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
