import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private data:any[]=[]
  constructor() { }
  setTableData(value:any[]){
    this.data =value
  }
  getTableData(){
    return this.data;
  }
}
