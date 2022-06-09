import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-app-b',
  templateUrl: './app-b.component.html',
  styleUrls: ['./app-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
