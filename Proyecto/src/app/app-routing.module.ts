import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContadorComponent } from './contador/contador.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { GatoComponent } from './juegos/gato/gato.component';
import { PptComponent } from './juegos/ppt/ppt.component';
import { PipeComponent } from './pipe/pipe.component';
import { RuletaComponent } from './ruleta/ruleta.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "principal" },
  {path:'contador',component: ContadorComponent},
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'principal', component: SidebarComponent},
  { path: 'ppt', component: PptComponent },
  { path: 'ruleta', component: RuletaComponent },
  { path: 'directivas', component: DirectivasComponent},
  { path: 'gato', component: GatoComponent},
  { path: 'pipes', component: PipeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
