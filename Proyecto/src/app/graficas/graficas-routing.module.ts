import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';
import { RadarComponent } from './pages/radar/radar.component';

const routes: Routes = [
  {
    path:'' , component: GraficaBarraComponent ,
    children:[
      { path: 'barra', component: BarrasComponent},
      {path: 'barra-doble', component: RadarComponent},
      {path: 'dona', component: DonaComponent},
      {path: 'dona-http', component: DonaHttpComponent},
    ]
  }

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
