import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmComponent } from './components/farm/farm.component';
import { TvOfferDetailsCardComponent } from './store-front/tv-offer-details-card/tv-offer-details-card.component';
import { StorefrontComponent } from './store-front/storefront/storefront.component';
import { StoreComponent } from './swap/store/store.component';
import { DashboardComponent } from './board/dashboard/dashboard.component';
import { InternetOfferComponent } from './store-front/internet-offer/internet-offer.component';

const routes: Routes = [
  { path: '', redirectTo: '/storefront', pathMatch: 'full' },
  {
    path: 'tv',
    component: TvOfferDetailsCardComponent,
  },
  {
    path: 'internet',
    component: InternetOfferComponent,
  },
  {
    path: 'farm',
    component: FarmComponent,
  },
  {
    path: 'storefront',
    component: StorefrontComponent,
  },
  {
    path: 'swap',
    component: StoreComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
