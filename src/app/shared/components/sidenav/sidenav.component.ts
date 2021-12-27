import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { SideNavService } from '../../services/side-nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  mobileQuery!: MediaQueryList;
  isExpanded!:boolean;
  private _mobileQueryListener: () => void;
  routes=[
    {path:'../dashboard',text:'الرئيسية',icon:'fas fa-home'},
    {path:'../finance',text:'الماليات',icon:'far fa-credit-card'},
    {path:'../profile',text:'الملف الشخصي',icon:'far fa-user'},
    {path:'../setting',text:'الاعدادت',icon:'fas fa-cog'},

  ]
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private sideNavService:SideNavService) {
    this.mobileQuery = media.matchMedia('(max-width: 1467px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.sideNavService.currentMessage.subscribe(value => {this.isExpanded =value;console.log('sideNav : ',this.isExpanded) })
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
