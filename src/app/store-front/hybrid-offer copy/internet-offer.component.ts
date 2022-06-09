import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-offer',
  template: `<app-offer-base>
    <app-internet-offer-top></app-internet-offer-top>
    <app-speed-is-good-for></app-speed-is-good-for>
  </app-offer-base> `,
})
export class InternetOfferComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
