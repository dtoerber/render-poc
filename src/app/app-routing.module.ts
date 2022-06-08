import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmComponent } from './components/farm/farm.component';
import { TvWraperComponent } from './components/tv-wraper.component';
import { StorefrontComponent } from './storefront/storefront.component';

const routes: Routes = [
  { path: '', redirectTo: '/storefront', pathMatch: 'full' },
  {
    path: 'tv',
    component: TvWraperComponent,
  },
  {
    path: 'farm',
    component: FarmComponent,
  },
  {
    path: 'storefront',
    component: StorefrontComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
