import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmComponent } from './components/farm/farm.component';
import { TvOfferDetailsCardComponent } from './store-front/tv-offer-details-card/tv-offer-details-card.component';
import { StorefrontComponent } from './store-front/storefront/storefront.component';
import { StoreComponent } from './store-front-2/store/store.component';

const routes: Routes = [
  { path: '', redirectTo: '/storefront', pathMatch: 'full' },
  {
    path: 'tv',
    component: TvOfferDetailsCardComponent,
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
    path: 'storefront2',
    component: StoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
