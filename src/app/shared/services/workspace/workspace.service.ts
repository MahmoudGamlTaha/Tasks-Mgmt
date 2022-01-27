import { Injectable } from '@angular/core';
import { Workspace } from '../../interfaces/workspace';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  private workspaces: Workspace[] = [
    {
      id: 1,
      name: 'مشروع إنتاج الطحينة',
      totalHours: '20',
      missions: [
        {
          id:1,
          mission_id: 1,
          name: 'دراسة المشروع الأوليه 1 ',
          creationDate: '20/2/2022',
          hours: 0,
          minutes: 0,
          status: 1,
          subMissions: [],
        },
        {
          id: 2,
          mission_id: 2,
          name: 'دراسة المشروع الأوليه 2 ',
          creationDate: '20/2/2022',
          hours: 0,
          minutes: 0,
          status: 1,
          subMissions: [],
        },
      ],
    },
    {
      id: 2,
      name: 'كراسات الشروط والنماذج',
      totalHours: '30',
      missions: [
        {
          id:1,
          mission_id: 1,
          name: 'دراسة المشروع الأوليه 1 ',
          creationDate: '20/2/2022',
          hours: 0,
          minutes: 0,
          status: 1,
          subMissions: [],
        },
        {
          id: 2,
          mission_id: 2,
          name: 'دراسة المشروع الأوليه 2 ',
          creationDate: '20/2/2022',
          hours: 0,
          minutes: 0,
          status: 2,
          subMissions: [
            {
              id: 1,
              mission_id: 2,
              name: 'دراسة المشروع الأوليه 2 ',
              creationDate: '20/2/2022',
              hours: 0,
              minutes: 0,
              status: 1,
              subMissions: [],
            },
            {
              id: 1,
              mission_id: 2,
              name: 'دراسة المشروع الأوليه 2 ',
              creationDate: '20/2/2022',
              hours: 0,
              minutes: 0,
              status: 2,
              subMissions: [],
            }
            ,
            {
              id: 3,
              mission_id: 2,
              name: 'دراسة المشروع الأوليه 3 ',
              creationDate: '20/2/2022',
              hours: 0,
              minutes: 0,
              status: 1,
              subMissions: [],
            }
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'برمجة المحاسبة',
      totalHours: '30',
      missions: [
        {
          id:1,
          mission_id: 3,
          name: 'دراسة المشروع الأوليه 1 ',
          creationDate: '20/2/2022',
          hours: 0,
          minutes: 0,
          status: 1,
          subMissions: [],
        },
        {
          id: 2,
          mission_id: 3,
          name: 'دراسة المشروع الأوليه 2 ',
          creationDate: '20/2/2022',
          hours: 0,
          minutes: 0,
          status: 2,
          subMissions: [
            {
              id: 1,
              mission_id: 3,
              name: 'دراسة المشروع الأوليه 2 ',
              creationDate: '20/2/2022',
              hours: 0,
              minutes: 0,
              status: 1,
              subMissions: [],
            },
            {
              id: 1,
              mission_id: 3,
              name: 'دراسة المشروع الأوليه 2 ',
              creationDate: '20/2/2022',
              hours: 0,
              minutes: 0,
              status: 2,
              subMissions: [],
            }
            ,
            {
              id: 3,
              mission_id: 3,
              name: 'دراسة المشروع الأوليه 3 ',
              creationDate: '20/2/2022',
              hours: 0,
              minutes: 0,
              status: 2,
              subMissions: [],
            }
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'تصميم موقع الكتروني',
      totalHours: '30',
      missions: [],
    },
  ];
  constructor() {}
  getWorkspaces(){
    return this.workspaces
  }
}
