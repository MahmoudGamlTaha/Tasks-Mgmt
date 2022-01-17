import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private missions = [
    {
      mission_id: 1,
      name: 'دراسة المشروع الأوليه 1 ',
      creationDate: '20/2/2022',
      hours: 0,
      minutes: 0,
      status: 1,
      subMissions: [],
    },
    {
      mission_id: 2,
      name: 'دراسة المشروع الأوليه 2 ',
      creationDate: '20/2/2022',
      hours: 0,
      minutes: 0,
      status: 2,
      subMissions: [
        {
          id: 1,
          mission_id: 1,
          name: 'مهمة فرعية رقم 1 لمشروع الاولية 2',
          creationDate: '2/2/2022',
          hours: 0,
          minutes: 0,
          status: 1,
        },
        {
          id: 2,
          mission_id: 1,
          name: 'مهمة فرعي رقم 2 لمشروع الاولية 2',
          creationDate: '2/2/2022',
          hours: 0,
          minutes: 0,
          status: 1,
        },
      ],
    },
  ];
  private workspaces = [
    {name:'مشروع انتاج الطحينه'},
    {name:'كراسات الشروط والنماذج'},
    {name:'برمجة المحاسبة'},
  ]
  constructor() {}
  getWorkspaces(){
    return this.workspaces
  }
  getMissions() {
    return this.missions;
  }
}
