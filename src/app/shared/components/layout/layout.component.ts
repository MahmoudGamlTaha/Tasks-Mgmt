import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SideNavService } from '../../services/side-nav.service';
import { MissionService } from '../../services/mission/mission.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  mobileQuery!: MediaQueryList;
  isExpanded!: boolean;
  display!:boolean;
  workspaces :any[]= [];
  toggleSearch!:boolean
  private _mobileQueryListener: () => void;
  routes = [
    { path: '/dashboard', text: 'الرئيسية', icon: 'fas fa-home' },
    { path: '/finance', text: 'الماليات', icon: 'far fa-credit-card' },
    { path: '/profile', text: 'الملف الشخصي', icon: 'far fa-user' },
    { path: '/setting', text: 'الاعدادت', icon: 'fas fa-cog' },
  ];
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sideNavService: SideNavService,
    private missionService:MissionService
  ) {
    // this.mobileQuery = media.matchMedia('(max-width: 1467px)');
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.sideNavService.currentDisplayStatus.subscribe((value)=>{
      this.display = value;
      if(this.mobileQuery.matches){
        this.isExpanded = true

      }else{
        this.sideNavService.currentExpandStatus.subscribe((value) => {
          this.isExpanded = value;
          console.log(value)
        });
      }
    })
    this.workspaces = this.missionService.getWorkspaces()
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  onClose(){
    this.sideNavService.changeDisplayStatus(false)
  }
  openSearch($event: MouseEvent){
    $event.stopPropagation();
    this.toggleSearch = !this.toggleSearch;
  }
  searchInWorkspaces(value:any){
    let text = value.target.value;
    if(text == ''){
      this.workspaces = this.missionService.getWorkspaces()
    }else{
      this.workspaces = this.workspaces.filter(s => s.name.includes(text));
    }
  }
}
