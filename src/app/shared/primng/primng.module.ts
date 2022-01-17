import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg Modules
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { FieldsetModule } from 'primeng/fieldset';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';

import {MenuModule} from 'primeng/menu';
import {InputTextareaModule} from 'primeng/inputtextarea';
const primengModules = [
  ButtonModule,
  DividerModule,
  AccordionModule,
  OverlayPanelModule,
  TableModule,
  AvatarModule,
  BadgeModule,
  CardModule,
  ProgressBarModule,
  TabViewModule,
  InputNumberModule,
  FieldsetModule,
  ConfirmDialogModule,
  DialogModule,
  FileUploadModule,
  HttpClientModule,
  ToastModule,
  PanelModule,
  DropdownModule,
  InputTextModule,
  CalendarModule,
  // MenuModule,
  // InputTextareaModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, primengModules],
  exports: [primengModules],
})
export class PrimngModule {}
