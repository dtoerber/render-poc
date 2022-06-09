import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HybridOfferComponent } from 'src/app/store-front/hybrid-offer/hybrid-offer.component';
import { InternetOfferComponent } from 'src/app/store-front/hybrid-offer copy/internet-offer.component';
import { TvOfferDetailsCardComponent } from 'src/app/store-front/tv-offer-details-card/tv-offer-details-card.component';
import { Widget } from '../models/widget';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  widgets: Widget[] = [
    { name: 'TV Offer', component: TvOfferDetailsCardComponent },
    { name: 'Internet Offer', component: InternetOfferComponent },
    { name: 'Hybrid Offer', component: HybridOfferComponent },
  ];
  constructor() {}

  ngOnInit(): void {}
}
