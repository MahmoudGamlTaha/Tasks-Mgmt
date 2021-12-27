import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

import { MissionComponent } from './components/mission/mission.component';


@NgModule({
  declarations: [DashboardComponent, MissionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 60,
      unitsColor: '#483500',
      outerStrokeWidth: 5,
      innerStrokeWidth: 5,
      space: -16,
      showSubtitle: false,
      showInnerStroke: true,
      startFromZero: false,
      responsive: true,
    }),
    FormsModule,
  ],
})
export class DashboardModule {}
