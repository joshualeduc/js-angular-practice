import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mouse Tracking';
  mousePosition = {};
  click = '';
  key = '';
  mouseOver(e){
    this.mousePosition = e;
  }
  leaveCanvas(){
    this.mousePosition = {};
  }
  leftClick(e){
    this.click = 'left click';
  }
  rightClick(e){
    e.preventDefault();
    this.click = 'right click';
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    this.key = event.key;
  }
}
