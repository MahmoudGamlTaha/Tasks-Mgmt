import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private isExpanded = new BehaviorSubject<boolean>(true);
  currentExpandStatus = this.isExpanded.asObservable();

  private param = new BehaviorSubject<string>('');
  currentParam = this.param.asObservable();

  private display = new BehaviorSubject<boolean>(true);
  currentDisplayStatus = this.display.asObservable();

  constructor() { }
  changeExpandStatus(status: boolean) {
    this.isExpanded.next(status)
  }
  changeParam(value:string){
    this.param.next(value)
  }
  changeDisplayStatus(status:boolean){
    this.display.next(status)
  }
}
