import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WorkspacesComponent } from './pages/workspaces/workspaces.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { WorkspaceinfoComponent } from './pages/workspaceinfo/workspaceinfo.component';
import { MissioninfoComponent } from './components/missioninfo/missioninfo.component';
import { AddmissionComponent } from './components/addmission/addmission.component';


@NgModule({
  declarations: [
    WorkspaceComponent,
    WorkspacesComponent,
    WorkspaceinfoComponent,
    MissioninfoComponent,
    AddmissionComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule,
  ]
})
export class WorkspaceModule { }
