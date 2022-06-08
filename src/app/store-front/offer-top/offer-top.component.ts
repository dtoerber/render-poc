import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offer-top',
  templateUrl: './offer-top.component.html',
  styleUrls: ['./offer-top.component.scss'],
})
export class OfferTopComponent implements OnInit {
  /**
   * Card Title
   */
  @Input() cardTitle: string = 'TV SELECT';

  /**
   * Channel Number Heading
   */
  @Input() channelNumberHeading: string = '140+';

  /**
   * Channel Number Sub Heading
   */
  @Input() channelNumberSubHeading: string = 'channels';

  /**
   * Main card description
   */
  @Input() description: string =
    'The ultimate in lifestyle, news, sports and movie favorites plus regional sports and locals.';

  /**
   * View Channels Modal Link
   */
  @Input() descriptionLink: string = 'View Details';

  /**
   * Price
   */
  @Input() price: number = 40;

  /**
   * emit event when View Modal link clicked
   */
  @Output() descriptionLinkClicked: EventEmitter<void> =
    new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
