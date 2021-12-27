import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Modules
import {MatNativeDateModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

const materialModules = [
     MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports:[
    materialModules
  ]
})
export class MaterialModule { }
