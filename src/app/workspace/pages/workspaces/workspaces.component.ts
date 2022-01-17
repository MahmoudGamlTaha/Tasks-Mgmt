import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/shared/services/mission/mission.service';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent implements OnInit {
  workspaces:any[] = []
  constructor(private missionService:MissionService) { }

  ngOnInit(): void {
    this.workspaces = this.missionService.getWorkspaces()
  }

}
