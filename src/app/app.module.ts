import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TvOfferDetailsCardComponent } from './components/tv-offer-details-card/tv-offer-details-card.component';
import { TvWraperComponent } from './components/tv-wraper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FarmComponent } from './components/farm/farm.component';
import { CatComponent } from './components/cat/cat.component';
import { DogComponent } from './components/dog/dog.component';
import { CowComponent } from './components/cow/cow.component';
import { FieldComponent } from './components/field/field.component';
import { AnimalDirective } from './animal.directive';
import { SnakeComponent } from './components/snake/snake.component';
import { BirdComponent } from './components/bird/bird.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TvOfferDetailsCardComponent,
    TvWraperComponent,
    FarmComponent,
    CatComponent,
    DogComponent,
    CowComponent,
    FieldComponent,
    SnakeComponent,
    BirdComponent,
    AnimalDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}