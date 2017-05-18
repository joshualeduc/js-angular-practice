import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Mouse Tracking';
  mousePosition: KeyboardEvent;
  click:string;
  key: string;
  mouseOver(e): void {
    this.mousePosition = e;
  }
  leaveCanvas(): void {
    this.mousePosition = null;
  }
  leftClick(e): void {
    this.click = 'left click';
  }
  rightClick(e): void {
    e.preventDefault();
    this.click = 'right click';
  }
  @HostListener('keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    this.key = event.key;
  }
}
