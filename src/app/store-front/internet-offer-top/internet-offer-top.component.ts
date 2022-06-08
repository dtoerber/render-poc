import { Component, OnInit, Input } from '@angular/core';
import { SpeedometerFillValues } from '../speedometer/speedometer.component';
@Component({
  selector: 'app-internet-offer-top',
  templateUrl: './internet-offer-top.component.html',
  styleUrls: ['./internet-offer-top.component.scss'],
})
export class InternetOfferTopComponent implements OnInit {
  /**
   * Subscribe button text
   */
  @Input() ctaLabel: string = '';

  /**
   * Applies a white background and drop shadow if true
   */
  @Input() highlightPackage = false;

  /**
   * Displays current package state of card
   */
  @Input() currentPackage: boolean = false;

  /**
   * Displays current package state of card
   */
  @Input() name: string = 'Spectrum Ultra';

  /**
   * Displays current package state of card
   */
  @Input() internetSpeed: string = '400';

  /**
   * Displays current package state of card
   */
  @Input() netPrice: string = '40';

  /**
   * Displays current package state of card
   */
  @Input() planPriceText: string = 'more per month';

  /**
   * percentage of color to fill int the speedometer arc
   * Can be filled quarter, half, threeqtr, full.
   */
  @Input() ringFillPercent: SpeedometerFillValues =
    SpeedometerFillValues.THREEQTR;

  /**
   * Text to include inside speedometer.
   */
  @Input() textHeadline: string = 'speeds up to';
  /**
   * Speed units(Mbps)
   */
  @Input() textUnits: string = 'Mbps';

  constructor() {}

  ngOnInit(): void {}
}
