import { Component } from '@angular/core';

@Component({
  selector: 'app-test-me',
  template: `
    <spectrum-tv-offer-details-card
      (ctaClicked)="ctaClicked()"
      (descriptionLinkClicked)="descClicked()"
    ></spectrum-tv-offer-details-card>
  `,
  styles: [],
})
export class TvWraperComponent {
  ctaClicked() {
    console.log(`cta Clicked`);
  }
  descClicked() {
    console.log(`descClicked`);
  }
}
