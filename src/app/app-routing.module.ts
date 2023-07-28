import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpregadoListComponent } from './empregado-list/empregado-list.component';
import { CreateEmpregadoComponent } from './create-empregado/create-empregado.component';
import { UpdateEmpregadoComponent } from './update-empregado/update-empregado.component';
import { EmpregadoDetailsComponent } from './empregado-details/empregado-details.component';

const routes: Routes = [
  {path: 'empregados', component: EmpregadoListComponent},
  {path: 'create-empregado', component: CreateEmpregadoComponent},
  {path: '', redirectTo: 'empregados', pathMatch: 'full'},
  {path: 'update-empregado/:id', component: UpdateEmpregadoComponent},
  {path: 'empregado-details/:id', component: EmpregadoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }