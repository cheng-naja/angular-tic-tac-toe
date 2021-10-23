import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <!-- {{ randomNumber }} -->
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important; }'
  ]
})
export class SquareComponent {
  // randomNumber = Math.random();
  // constructor() {
  //   setInterval(() => this.randomNumber = Math.random(), 500);
  // }
  @Input() value: 'X' | 'O' | any;
}
