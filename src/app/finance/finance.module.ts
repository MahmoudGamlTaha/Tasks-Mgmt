import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { NewFinancialSettlementComponent } from './pages/new-financial-settlement/new-financial-settlement.component';
import { FinaceComponent } from './pages/finace/finace.component';
import { SharedModule } from '../shared/shared.module';
import { StatusfinanceComponent } from './pages/statusfinance/statusfinance.component';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    NewFinancialSettlementComponent,
    FinaceComponent,
    StatusfinanceComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedModule
  ],
  providers:[MessageService]
})
export class FinanceModule { }
