import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideNavService } from 'src/app/shared/services/side-nav.service';

@Component({
  selector: 'app-workspaceinfo',
  templateUrl: './workspaceinfo.component.html',
  styleUrls: ['./workspaceinfo.component.scss']
})
export class WorkspaceinfoComponent implements OnInit {
  missionTitle!:string;
  constructor(private activeRoute:ActivatedRoute,private sideNavService:SideNavService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:any)=>{
      this.sideNavService.changeParam(params['id'])
      // console.log(params['id'])
      this.missionTitle = params['id']
    })
  }

}
