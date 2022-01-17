import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SideNavService } from '../../services/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isExpanded: boolean = true;
  display:boolean = true;
  routerUrl!: string;
  notifications!: [];
  selectednotification!: any;
  constructor(private router: Router,private sidenavService:SideNavService,private activatedRoute:ActivatedRoute) {
    this.routerUrl = this.router.url;
    if (this.router.url == '/dashboard') {
      this.routerUrl = 'الرئيسية';
    }else if(this.router.url === '/workspaces'){
      this.routerUrl = 'مساحات العمل';
    }else if(this.router.url =='/finance'){
      this.routerUrl = 'الماليات'
    }else if(this.router.url =='/profile'){
      this.routerUrl = 'الملف الشخصي'
    }else{
      this.sidenavService.currentParam.subscribe((result)=>{
        this.routerUrl = result
      })
    }
  }

  ngOnInit() {
  }

  toggleNav() {
    this.isExpanded = !this.isExpanded;
    this.sidenavService.changeExpandStatus(this.isExpanded)
    this.sidenavService.changeDisplayStatus(true)
  }
}

