import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
  addCertificationForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.addCertificationForm = new FormGroup({
      'name':new FormControl('',[Validators.required]),
      'certificationSide':new FormControl('',[Validators.required]),
      'startDate':new FormControl('',[Validators.required]),
      'endDate':new FormControl(''),
      'certificationNumber':new FormControl(''),
      'certificationLink':new FormControl(''),
      'description':new FormControl(''),
    })
  }
  onSubmit(){
    this.addCertificationForm.markAllAsTouched()

  }

}
