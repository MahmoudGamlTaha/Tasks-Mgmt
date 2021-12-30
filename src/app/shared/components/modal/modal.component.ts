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
  @Output() onCloseModal = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
  hideModal(){
    this.onCloseModal.emit(false)
  }
}
