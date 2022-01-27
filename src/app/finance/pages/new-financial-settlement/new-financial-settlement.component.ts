import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { TableService } from 'src/app/shared/services/table.service';

@Component({
  selector: 'app-new-financial-settlement',
  templateUrl: './new-financial-settlement.component.html',
  styleUrls: ['./new-financial-settlement.component.scss']
})
export class NewFinancialSettlementComponent implements OnInit {
  data:any[]=[
    {name:'دراسة المشروع الأوليه 1',creationDate:'20/2/2022',hours:1,minutes:21,status:1},
    {name:'دراسة المشروع الأوليه 2',creationDate:'20/2/2022',hours:2,minutes:23,status:1},
    {name:'دراسة المشروع الأوليه 3',creationDate:'20/2/2022',hours:3,minutes:30,status:1},
    {name:'دراسة المشروع الأوليه 4',creationDate:'20/2/2022',hours:4,minutes:10,status:1},
    {name:'دراسة المشروع الأوليه 5',creationDate:'20/2/2022',hours:5,minutes:43,status:1}
  ]
  columns:string[] = ['name','creationDate','hoursCount']
  labels:string[] = ['مهام جاهزه للتسويه','تاريخ الانتهاء','عدد الساعات']
  constructor(private tableService:TableService,private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
    this.tableService.setTableData(this.data);
  }
  requestSettlement(){
    this.confirmationService.confirm({
      message: 'في حالة تاكيد طلبك سوف نستغرق عملية المراجعة أسبوع عمل فقط',
      header: 'تاكيد الطلب',
      acceptIcon:'',
      rejectIcon:'',
      closeOnEscape:true,
      acceptLabel:'',
      accept: () => {

      },
    });
  }

}
