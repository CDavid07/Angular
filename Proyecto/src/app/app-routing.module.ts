import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "principal" },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'principal', component: SidebarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
