import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WorkspacesComponent } from './pages/workspaces/workspaces.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { WorkspaceinfoComponent } from './components/workspaceinfo/workspaceinfo.component';


@NgModule({
  declarations: [
    WorkspaceComponent,
    WorkspacesComponent,
    WorkspaceinfoComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule,
  ]
})
export class WorkspaceModule { }
