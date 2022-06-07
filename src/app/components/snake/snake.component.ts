import { Component } from '@angular/core';

let instances = 0;

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss'],
})
export class SnakeComponent {
  count: number;
  constructor() {
    this.count = ++instances;
  }
}
