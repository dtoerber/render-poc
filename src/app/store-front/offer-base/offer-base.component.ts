import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offer-base',
  templateUrl: './offer-base.component.html',
  styleUrls: ['./offer-base.component.scss'],
})
export class OfferBaseComponent {
  /**
   * Card Label
   */
  @Input() cardLabel: string = 'EVERYTHING PACKAGE';
  /**
   * Button Label
   */
  @Input() ctaLabel: string = 'Choose';
  /**
   * emit event when CTA clicked
   */
  @Output() ctaClicked: EventEmitter<void> = new EventEmitter<void>();
}
