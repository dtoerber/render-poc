import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
