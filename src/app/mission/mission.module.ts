import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionRoutingModule } from './mission-routing.module';
import { MissionComponent } from './components/mission/mission.component';


@NgModule({
  declarations: [
    MissionComponent
  ],
  imports: [
    CommonModule,
    MissionRoutingModule
  ]
})
export class MissionModule { }
