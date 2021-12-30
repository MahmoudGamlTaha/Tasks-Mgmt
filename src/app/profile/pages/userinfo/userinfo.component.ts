import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {
  imageSrc!: any;
  constructor() {}

  ngOnInit(): void {}
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
}
