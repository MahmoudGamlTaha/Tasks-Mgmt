import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  toggleModal:boolean = false;
  selectSection!:string;
  title:string = '';
  titleDescription:string = '';
  constructor() { }

  ngOnInit() {
  }
  ontoggleModal(value:string){
    this.toggleModal = true;
    this.selectSection = value
    if(value == 'brief'){
      this.title = 'تعديل النبذة الشخصية';
      this.titleDescription='أخبرنا اكثر عن نفسك'

    }else if(value == 'education'){
      this.title = 'التعليم';
      this.titleDescription='يمكنك إضافه كل ما يتعلق بدرجاتك العلمية'
    }else if(value == 'certification'){
      this.title = 'شهادة / إنجاز';
      this.titleDescription='يمكنك إضافه كل ما يتعلق بشهاداتك وانجازاتك العلمية'
    }else if(value == 'experience'){
      this.title = 'الخبرات';
      this.titleDescription='يمكنك إضافه كل ما يتعلق بخبراتك'
    }
  }
  closeModal(event:any){
    this.toggleModal = event
  }
}
