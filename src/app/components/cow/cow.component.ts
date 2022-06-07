import { Component } from '@angular/core';

let instances = 0;

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.scss'],
})
export class CowComponent {
  count: number;
  constructor() {
    this.count = ++instances;
  }
}
