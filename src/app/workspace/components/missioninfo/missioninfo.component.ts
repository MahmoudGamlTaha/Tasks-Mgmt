import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-missioninfo',
  templateUrl: './missioninfo.component.html',
  styleUrls: ['./missioninfo.component.scss']
})
export class MissioninfoComponent implements OnInit {
  @Input() title!:string;
  date!:any;
  formatedDate = new Date(this.date)
  @Output() onCloseModal = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
  play(){

  }
  repeat(){

  }
  closeModal(){
    this.onCloseModal.emit(false)
  }
}
