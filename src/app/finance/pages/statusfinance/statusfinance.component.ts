import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-statusfinance',
  templateUrl: './statusfinance.component.html',
  styleUrls: ['./statusfinance.component.scss'],
})
export class StatusfinanceComponent implements OnInit {
  display!: boolean;
  missionsVisable!:boolean;
  uploadedFiles: any[] = [];
  data: any[] = [
    {
      total: { totalHoursInMonths: 10, priceHour: 20, totalIncome: 10293 },
      complaint: 2,
      date: '28/9/2021',
      status: 1,
    },
    {
      total: { totalHoursInMonths: 30, priceHour: 20, totalIncome: 10293 },
      complaint: 1,
      date: '21/9/2021',
      status: 2,
    },
    {
      total: { totalHoursInMonths: 30, priceHour: 20, totalIncome: 10293 },
      complaint: 1,
      date: '29/9/2021',
      status: 3,
    },
  ];
  columns: string[] = ['total', 'complaint', 'date', 'status', 'showMissions'];
  labels: string[] = [
    'التسويات المالية',
    '',
    'تاريخ الطلب',
    'حالة التسوية',
    ''
  ];
  missions:any[]=[
    {name:'دراسة المشروع الأوليه 1',expireDate:'20/2/2022',hours:1,minutes:21},
    {name:'دراسة المشروع الأوليه 2',expireDate:'20/2/2022',hours:2,minutes:23},
    {name:'دراسة المشروع الأوليه 3',expireDate:'20/2/2022',hours:3,minutes:30},
    {name:'دراسة المشروع الأوليه 4',expireDate:'20/2/2022',hours:4,minutes:10},
    {name:'دراسة المشروع الأوليه 5',expireDate:'20/2/2022',hours:5,minutes:43}
  ]
  columnsMissions:string[] = ['name','expireDate','hoursCount']
  labelsMissions:string[] = ['مهام جاهزه للتسويه','تاريخ الانتهاء','عدد الساعات']

  constructor(private messageService: MessageService) {}
  ngOnInit(): void {}
  toggleDialog(value: boolean) {
    this.display = value;
    console.log(this.display);
  }
  resetToggle() {
    this.display = false;
    console.log(this.display);
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  }

  onBasicUploadAuto(event: any) {

    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Auto Mode',
    });
    console.log(this.uploadedFiles)
  }

  toggleMissions(event:any){
    this.missionsVisable = event
  }
  resetToggleMissions() {
    this.missionsVisable = false;
  }
}
