import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer-bottom',
  templateUrl: './offer-bottom.component.html',
  styleUrls: ['./offer-bottom.component.scss'],
})
export class OfferBottomComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
