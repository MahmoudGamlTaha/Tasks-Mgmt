import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceinfoComponent } from './pages/workspaceinfo/workspaceinfo.component';
import { WorkspacesComponent } from './pages/workspaces/workspaces.component';

const routes: Routes = [
  {path:'',component:WorkspacesComponent},
  {path:':id',component:WorkspaceinfoComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
