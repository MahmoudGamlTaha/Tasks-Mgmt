import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';

import { RandomcolorPipe } from './pipes/randomcolor.pipe';

import { NgxModule } from './ngx/ngx.module';
import { PrimngModule } from './primng/primng.module';
import { MaterialModule } from './material/material.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { ConfirmationService } from 'primeng/api';
import { ModalComponent } from './components/modal/modal.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    RandomcolorPipe,
    NotificationComponent,
    TableComponent,
    ModalComponent,
    FormComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxModule,
    PrimngModule,
    MaterialModule,
    TranslateModule.forChild({
      defaultLanguage:'ar',
      loader:{
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers:[ConfirmationService],
  exports: [RandomcolorPipe,ModalComponent,TableComponent,FormsModule, NgxModule, PrimngModule, MaterialModule,TranslateModule,ReactiveFormsModule],
})
export class SharedModule {}

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
