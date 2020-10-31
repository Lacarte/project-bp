import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class UIService {

// is less than medium screen
  private isLtMdBe = new BehaviorSubject<boolean>(false);
  private isLtMd$ = this.isLtMdBe.asObservable();

// sidenav
  private isOpenBe = new BehaviorSubject<boolean>(false);
  private isOpen$ = this.isOpenBe.asObservable();

// sidenavtext
  private sidenavTextBe = new BehaviorSubject<boolean>(false);
  private sidenavText$ = this.sidenavTextBe.asObservable();


  constructor() { }

  set isLtMd(newIsLtMd: boolean) {
    if (newIsLtMd){
      // console.log("lt md");
    }else{
       // console.log("big");

    }
    this.isLtMdBe.next(newIsLtMd);
  }

  getIsLtMd(): Observable<boolean> {
    return this.isLtMd$;
  }

  // to get the last value of the behavior subject
  getIsLtM(): boolean {
    return this.isOpenBe.getValue();
  }

  set isOpen(newIsOpen: boolean) {
    // console.log('nav state',new_isOpen);
    this.isOpenBe.next(newIsOpen);
  }

  getIsOpen(): Observable<boolean> {
    return this.isOpen$;
  }

// to get the last value of the behavior subject
  getValueIsOpen(): boolean {
    return this.isOpenBe.getValue();
  }

  toggleNav(): void {
    this.isOpenBe.next(!this.isOpenBe.getValue());
  }


 set sidenavText(newSidenavText: boolean) {
    this.sidenavTextBe.next(newSidenavText);
  }

  getSidenavText(): Observable<boolean> {
    return this.sidenavText$;
  }

  // to get the last value of the behavior subject
  getValueSidenavText(): boolean {
    return this.sidenavTextBe.getValue();
  }





}
