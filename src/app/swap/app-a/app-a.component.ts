import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-app-a',
  templateUrl: './app-a.component.html',
  styleUrls: ['./app-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
