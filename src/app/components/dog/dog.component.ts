import { Component } from '@angular/core';

let instances = 0;

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
})
export class DogComponent {
  count: number;
  constructor() {
    this.count = ++instances;
  }
}
