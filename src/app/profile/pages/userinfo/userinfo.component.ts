import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {
  imageSrc!: any;
  userInfoForm!:FormGroup
  constructor() {}

  ngOnInit(): void {
    this.userInfoForm = new FormGroup({
      'name':new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'age':new FormControl('',[Validators.required]),
      'address':new FormControl('',[Validators.required]),
      'image':new FormControl('',[Validators.required]),
    })

    console.log(this.userInfoForm)
    console.log(this.userInfoForm.get('name')?.invalid)
    console.log(this.userInfoForm.get('name')?.invalid &&
    this.userInfoForm.get('name')?.errors &&
    (this.userInfoForm.get('name')?.dirty || this.userInfoForm.get('name')?.touched))
  }
  readURL(event: any): void {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      console.log(this.imageSrc);
      reader.onload = (e) => {
        this.imageSrc = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }
  onSubmit(){
    this.userInfoForm.markAllAsTouched();
    console.log(this.userInfoForm)
  }
}
