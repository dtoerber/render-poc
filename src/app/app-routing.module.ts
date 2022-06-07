import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmComponent } from './components/farm/farm.component';
import { TvWraperComponent } from './components/tv-wraper.component';

const routes: Routes = [
  { path: '', redirectTo: '/tv', pathMatch: 'full' },
  {
    path: 'tv',
    component: TvWraperComponent,
  },
  {
    path: 'farm',
    component: FarmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
