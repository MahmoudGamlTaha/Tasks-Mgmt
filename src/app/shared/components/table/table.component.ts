import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableData:any[]= []
  @Input() tableColumns:string[]= []
  @Input() tableLabels:string[]= [];
  // Removed
  @Input() type!:string;
  @Input() reOrder:boolean = false;
  @Input() Expand:boolean = false;
  @Input() countExist:boolean = false;
  @Output() onShowDialog = new EventEmitter<boolean>()
  @Output() onToggleMissions = new EventEmitter<boolean>();
  visable:boolean = false;
  MissionsVisable:boolean = false;
  hours!:number;
  minutes!:number;
  constructor() { }

  ngOnInit(): void {
  }
  showDialog(){
    this.visable = true
    this.onShowDialog.emit(this.visable)
  }
  showMissions(){
    this.MissionsVisable = true;
    this.onToggleMissions.emit(this.MissionsVisable)
  }

}
