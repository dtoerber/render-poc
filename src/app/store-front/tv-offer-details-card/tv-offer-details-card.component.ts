import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'spectrum-tv-offer-details-card',
  templateUrl: './tv-offer-details-card.component.html',
  styleUrls: ['./tv-offer-details-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvOfferDetailsCardComponent implements OnInit {
  /**
   * Card Label
   */
  @Input() cardLabel: string = 'EVERYTHING PACKAGE';

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
   * Text used to display promotion period
   */
  @Input() priceValidPeriod: string = 'for 12 mos';

  /**
   * Button Label
   */
  @Input() ctaLabel: string = 'Choose';

  /**
   * Bundle Icons INCLUDES label
   */
  @Input() networkIconsLabel: string = 'INCLUDES';

  /**
   * Icons to show in the package card
   */
  @Input() networkIcons: any = [
    'https://cdnimg.spectrum.net/imageserver/guide/49788',
    'https://cdnimg.spectrum.net/imageserver/guide/32645',
    'https://cdnimg.spectrum.net/imageserver/guide/59186',
    'https://cdnimg.spectrum.net/imageserver/guide/56905',
    'https://cdnimg.spectrum.net/imageserver/guide/42642',
  ];

  /**
   * emit event when View Modal link clicked
   */
  @Output() descriptionLinkClicked: EventEmitter<void> =
    new EventEmitter<void>();

  /**
   * emit event when CTA clicked
   */
  @Output() ctaClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
