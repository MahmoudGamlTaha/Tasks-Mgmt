import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() display!:boolean;
  @Input() headerTitle!:string;
  @Input() headerDescription!:string;
  @Input() dialogPosition:string= ''
  @Output() onCloseModal = new EventEmitter<boolean>();
  @Input() closable:boolean = true
  @Input() width:string = '35vw';

  constructor() { }

  ngOnInit(): void {
    console.log(this.headerTitle)
    console.log(this.headerDescription)
  }
  hideModal(){
    this.onCloseModal.emit(false)
  }
}
