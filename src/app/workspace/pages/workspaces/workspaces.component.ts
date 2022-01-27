import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/shared/services/mission/mission.service';
import { WorkspaceService } from 'src/app/shared/services/workspace/workspace.service';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent implements OnInit {
  workspaces:any[] = []
  constructor(private workspaceService:WorkspaceService) { }

  ngOnInit(): void {
    this.workspaces = this.workspaceService.getWorkspaces()
    // this.workspaces = this.missionService.getWorkspaces()
  }

}
