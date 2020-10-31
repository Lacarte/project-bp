import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  constructor() { }
  isOpen = false;
  @Output() tg: EventEmitter<boolean> = new EventEmitter();

toggle(): void {
    this.isOpen = !this.isOpen;
    this.tg.emit(this.isOpen);
  }

  show(): void {
    this.isOpen = true;
    this.tg.emit(this.isOpen);
  }
  hide(): void {
    this.isOpen = false;
    this.tg.emit(this.isOpen);
  }



}




