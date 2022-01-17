import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionService } from 'src/app/shared/services/mission/mission.service';
import { SideNavService } from 'src/app/shared/services/side-nav.service';

@Component({
  selector: 'app-workspaceinfo',
  templateUrl: './workspaceinfo.component.html',
  styleUrls: ['./workspaceinfo.component.scss'],
})
export class WorkspaceinfoComponent implements OnInit {
  toggleModal:boolean = false;
  position!:string;
  modalSection!:string;

  workspaceTitle!: string;
  missionTitle!: string;
  workspaceData: any[] = [];
  filteredItem!:string;
  missionsData!: any[];
  selectedMission: any;
  selectedFilter:any
  seconds!: any;
  minutes!: any;
  hours!: any;

  time: number = 0;
  display!: any;
  interval!: any;
  filter:any []= [
    {
      name:'مهام فرعية',
      icon:'pi pi-sliders-h align-middle'
    }
  ]
  constructor(
    private activeRoute: ActivatedRoute,
    private sideNavService: SideNavService,
    private missionService: MissionService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    // Fetch Data of missions & workspaces
    this.missionsData = this.missionService.getMissions();
    this.workspaceData = this.missionService.getWorkspaces()
    this.activeRoute.params.subscribe((params: any) => {
      this.sideNavService.changeParam(params['id']);
      //Selected Workspace
      this.workspaceTitle = params['id'];
      this.selectedMission = this.workspaceData.find((element)=> element.name ==this.workspaceTitle)
    });

  }
  changeRoute() {
    this.router.navigate([`workspaces/${this.selectedMission.name}`]);
    console.log(this.selectedMission);
  }

  getTime(seconds:number =0){
    let hours = Math.floor((seconds % (3600 * 24)) / 3600)
    let minutes = Math.floor((seconds % 3600) / 60);
    this.getMinutes(minutes)
    this.getHours(hours)
  }
  play(){
    let count = 0;
    setInterval(()=>{
      count++
      console.log(count)
      this.getTime(count)
      console.log(this.getTime(count))
    },1000)
  }
  // getElapsedTime(): TimeSpan {
  //   let count: number = 0;
  //   let hours;
  //   let minutes;
  //   setInterval(() => {
  //     hours = Math.floor((count % (3600 * 24)) / 3600);
  //     minutes = Math.floor((count % 3600) / 60);
  //     count++;
  //   }, 1000);
  //   return {
  //     hour: hours,
  //     minute: minutes,
  //     second: count,
  //   };
  // }

  // play(minute: number = 0, hour: number = 0) {0
  //   let count: number = 0;
  //   let hours;
  //   let minutes;
  //   hours = hour + Math.floor((count % (3600 * 24)) / 3600);
  //   minutes = minute + Math.floor((count % 3600) / 60);
  //   setInterval(() => {
  //     count++;
  //   }, 1000);
  //   return {
  //     hour: hours,
  //     minute: minutes,
  //     second: count,
  //   };
  // }
  repeat() {
    clearInterval(this.interval);
  }
  getHours(hours: number = 0) {
    return hours;
  }
  getMinutes(minutes: number = 0) {
    return minutes;
  }
  // @HostListener('window:beforeunload', [ '$event' ])
  // beforeUnloadHandler(event:any) {
  //   // ...
  //   return false;
  // }

  closeModal(event:any){
    this.toggleModal = event;
  }
  openModal(section:string){
    this.toggleModal = true;
    this.modalSection = section;
    this.position = 'center';
    console.log(this.modalSection)
  }
  getMissionDetails(mission:string,section:string){
    this.toggleModal = true;
    this.position = 'bottomleft';
    this.missionTitle = mission
    this.modalSection = section
  }
}
