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
import { DirectivasComponent } from './directivas/directivas.component';
import { HighlightDirective } from './directivas/highlight.directive';
import { PipeComponent } from './pipe/pipe.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import {HttpClientModule} from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import localeJa from '@angular/common/locales/ja';
import { VuelaPipe } from './pipes/vuela.pipe';
import {HttpClientModule} from '@angular/common/http';


registerLocaleData(localeJa);
registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    CalculadoraComponent,
    HijoComponent,
    RuletaComponent,
    PiccoloComponent,
    GohanComponent,
    DirectivasComponent,
    HighlightDirective,
    PipeComponent,
    MayusculasPipe,
    VuelaPipe
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    JuegosModule,
<<<<<<< Updated upstream
    HttpClientModule    
=======
    HttpClientModule
>>>>>>> Stashed changes
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-MX'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
