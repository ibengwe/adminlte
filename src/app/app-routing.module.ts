import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlteComponent } from './components/layout/adminlte/adminlte.component';
import { Dashboard1Component } from './components/pages/dashboard1/dashboard1.component';
import { Dashboard2Component } from './components/pages/dashboard2/dashboard2.component';
import { Dashboard3Component } from './components/pages/dashboard3/dashboard3.component';

const routes: Routes = [
  {path:"",component:AdminlteComponent,children:[
    {path:"",component:Dashboard1Component},
    {path:"dashboard1",component:Dashboard1Component},
    {path:"dashboard2",component:Dashboard2Component},
    {path:"dashboard3",component:Dashboard3Component},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
