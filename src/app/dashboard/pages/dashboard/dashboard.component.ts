import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/shared/services/side-nav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  value:string='10';
  isExpanded!:boolean;
  constructor(private sideNavService:SideNavService) { }

  ngOnInit(): void {
    this.sideNavService.currentExpandStatus.subscribe(value=> this.isExpanded = value)
  }

}
