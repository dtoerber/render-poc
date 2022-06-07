import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvOfferDetailsCardComponent } from './tv-offer-details-card.component';

describe('TvOfferDetailsCardComponent', () => {
  let component: TvOfferDetailsCardComponent;
  let fixture: ComponentFixture<TvOfferDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvOfferDetailsCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvOfferDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
