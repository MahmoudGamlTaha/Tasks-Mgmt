import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavService } from '../../services/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isExpanded: boolean = true;
  routerUrl!: string;
  notifications!: [];
  selectednotification!: any;
  constructor(router: Router,private sidenavService:SideNavService) {
    this.routerUrl = router.url;
    if (router.url == '/dashboard') {
      this.routerUrl = 'الرئيسية';
    }else if(router.url == '/workspaces'){
      this.routerUrl = 'مساحات العمل';
    }else if(router.url =='/finance'){
      this.routerUrl = 'الماليات'
    }
  }

  ngOnInit() {}

  toggleNav() {
    this.isExpanded = !this.isExpanded;
    this.sidenavService.changeMessage(this.isExpanded)
  }
}
