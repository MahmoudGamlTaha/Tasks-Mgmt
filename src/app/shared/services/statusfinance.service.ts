import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusfinanceService {
  private statusSettlementData:any[] = []
  constructor() { }
  getStatusSettlement(){
    return this.statusSettlementData;
  }
  setStatusSettlement(value:any){
    this.statusSettlementData = value
  }
}
