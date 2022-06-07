import { Component } from '@angular/core';

let instances = 0;

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent {
  count: number;
  constructor() {
    this.count = ++instances;
  }
}
