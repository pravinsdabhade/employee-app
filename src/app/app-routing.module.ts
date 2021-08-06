import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  {path:'all', component:EmployeeAllComponent},
  {path:'add', component:EmployeeCreateComponent},
  {path:'', redirectTo:'all',pathMatch : 'full'},
  {path: 'edit/:id',component:EmployeeEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
