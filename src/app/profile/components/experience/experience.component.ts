import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  addExperienceForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.addExperienceForm = new FormGroup({
      'position':new FormControl('',[Validators.required]),
      'jobKind':new FormControl('',[Validators.required]),
      'startDate':new FormControl('',[Validators.required]),
      'endDate':new FormControl(''),
      'location':new FormControl(''),
      'industry':new FormControl(''),
      'description':new FormControl(''),
    })
  }
  onSubmit(){
    this.addExperienceForm.markAllAsTouched()
  }
}
