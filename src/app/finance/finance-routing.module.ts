import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinaceComponent } from './pages/finace/finace.component';

const routes: Routes = [
  {path:'',component:FinaceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
