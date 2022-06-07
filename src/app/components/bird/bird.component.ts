import { Component } from '@angular/core';

let instances = 0;

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.scss'],
})
export class BirdComponent {
  count: number;
  constructor() {
    this.count = ++instances;
  }
}
