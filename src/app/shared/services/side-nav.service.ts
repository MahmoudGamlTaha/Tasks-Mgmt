import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private isExpanded = new BehaviorSubject<boolean>(true);
  currentMessage = this.isExpanded.asObservable();
  private param = new BehaviorSubject<string>('');
  currentParam = this.param.asObservable();
  constructor() { }
  changeMessage(message: boolean) {

    this.isExpanded.next(message)
  }
  changeParam(value:string){
    this.param.next(value)
  }
}
