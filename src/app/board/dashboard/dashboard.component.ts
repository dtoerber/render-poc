import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HybridOfferComponent } from '../../store-front/hybrid-offer/hybrid-offer.component';
import { Widget } from '../models/widget';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to two columns per row */
  widget: Widget = { component: HybridOfferComponent };
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Card 1',
            cols: 2,
            rows: 2,
            component: HybridOfferComponent,
          },
          {
            title: 'Card 2',
            cols: 2,
            rows: 2,
            component: HybridOfferComponent,
          },
          {
            title: 'Card 3',
            cols: 2,
            rows: 2,
            component: HybridOfferComponent,
          },
          {
            title: 'Card 4',
            cols: 2,
            rows: 2,
            component: HybridOfferComponent,
          },
          {
            title: 'Card 4',
            cols: 2,
            rows: 2,
            component: HybridOfferComponent,
          },
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 2, component: HybridOfferComponent },
        { title: 'Card 2', cols: 1, rows: 2, component: HybridOfferComponent },
        { title: 'Card 3', cols: 1, rows: 2, component: HybridOfferComponent },
        { title: 'Card 4', cols: 1, rows: 2, component: HybridOfferComponent },
        { title: 'Card 4', cols: 1, rows: 2, component: HybridOfferComponent },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
