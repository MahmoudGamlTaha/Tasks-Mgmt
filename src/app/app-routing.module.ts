import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {path:'dashboard',component:LayoutComponent,children:[
    {path:'',loadChildren:()=>import('./dashboard/dashboard.module').then(module=>module.DashboardModule)}
  ]},
  {path:'workspaces',component:LayoutComponent,children:[
    {path:'',loadChildren:()=>import('./workspace/workspace.module').then(module=>module.WorkspaceModule)}
  ]},
  {path:'finance',component:LayoutComponent,children:[
    {path:'',loadChildren:()=>import('./finance/finance.module').then(module=>module.FinanceModule)}
  ]},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
