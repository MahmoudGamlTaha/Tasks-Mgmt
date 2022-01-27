import { Component, Input, OnInit } from '@angular/core';
import { Mission } from 'src/app/shared/interfaces/mission';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  @Input() workspace!: any;
  missionsCount!: number;
  completedMissionsCount!: number;
  constructor() {}

  ngOnInit(): void {
    this.missionsCount = this.workspace.missions.length
    // this.missionsCount = this.workspace.missions.reduce((previous: Mission, current: Mission) => {
    //   // previous.subMissions?.length + current.subMissions?.length
    //   console.log(previous.subMissions?.length)
    //   console.log(current.subMissions?.length)
    // },0);
    // console.log(this.completedMissionsCount);
    this.missionsCount = this.workspace.missions.length
    console.log('count : ',this.missionsCount)
    console.log('missions : ',this.workspace.missions)
    console.log('missions length : ',this.workspace.missions.length)
  }
  getMissionsCount(missions:any){
    let count:number = 0;
    // console.log(missions)
    // missions.forEach(function(ele:any) {
    //   console.log(ele.subMissions.length)
    //   if(ele.subMissions.length == 0){
    //     console.log('missions : ',ele.length)
    //   }
    // });

    return count
  }
}
