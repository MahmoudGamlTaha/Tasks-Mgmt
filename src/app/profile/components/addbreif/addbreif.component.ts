import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbreif',
  templateUrl: './addbreif.component.html',
  styleUrls: ['./addbreif.component.scss']
})
export class AddbreifComponent implements OnInit {
  addBriefForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.addBriefForm = new FormGroup(
      {'brief':new FormControl('',[Validators.required])}
    )
  }
  onSubmit(){
    this.addBriefForm.markAllAsTouched();
    console.log(this.addBriefForm)
  }
}
