import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: '*',
        backgroundColor: 'red'
      })),
      state('close', style({
        height: '100px',
        opacity: '*',
        backgroundColor: 'green'
      })),
      transition('open <=> close', [
        animate('5s')
      ]),
      transition('* => open, *=>close', [
        animate('5s')
      ]),
    ]),
  ],
})
export class OpenCloseComponent  {
  
  isOpen =false;
  toggle(){
    this.isOpen=!this.isOpen;
  }
}
