import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hybrid-offer',
  template: `<app-offer-base>
    <app-internet-offer-top></app-internet-offer-top>
    <app-offer-bottom></app-offer-bottom>
  </app-offer-base> `,
})
export class HybridOfferComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
