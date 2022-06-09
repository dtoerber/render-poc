import { Injectable } from '@angular/core';

import { WidgetItem } from './widget-item';
import { AppAComponent } from './app-a/app-a.component';
import { AppBComponent } from './app-b/app-b.component';
import { TvOfferDetailsCardComponent } from '../store-front/tv-offer-details-card/tv-offer-details-card.component';
import { HybridOfferComponent } from '../store-front/hybrid-offer/hybrid-offer.component';

@Injectable()
export class WidgetService {
  getWidgets() {
    return [
      new WidgetItem(AppAComponent, { name: 'App A', data: 'app a data' }),
      new WidgetItem(AppBComponent, { name: 'App B', data: 'app b data' }),
      new WidgetItem(TvOfferDetailsCardComponent, {
        name: 'TV Offer',
        data: 'offer stuff',
      }),
      new WidgetItem(HybridOfferComponent, {
        name: 'TV Offer',
        data: 'offer stuff',
      }),
    ];
  }
}
