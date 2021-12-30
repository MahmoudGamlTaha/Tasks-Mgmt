import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { AddbreifComponent } from './components/addbreif/addbreif.component';
import { AddeducationComponent } from './components/addeducation/addeducation.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ExperienceComponent } from './components/experience/experience.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserinfoComponent,
    GoalsComponent,
    AddbreifComponent,
    AddeducationComponent,
    CertificationComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
