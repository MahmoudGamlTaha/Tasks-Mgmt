import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styleUrls: ['./addeducation.component.scss']
})
export class AddeducationComponent implements OnInit {
  addEducationForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.addEducationForm = new FormGroup({
      'side':new FormControl('',[Validators.required]),
      'degree':new FormControl('',[Validators.required]),
      'fieldStudy':new FormControl('',[Validators.required]),
      'startDate':new FormControl('',[Validators.required]),
      'endDate':new FormControl('',[Validators.required]),
      'gpa':new FormControl(''),
      'description':new FormControl(''),
    })
  }
  onSubmit(){
    this.addEducationForm.markAllAsTouched();

  }
}
