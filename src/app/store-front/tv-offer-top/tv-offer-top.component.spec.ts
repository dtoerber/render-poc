import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvOfferTopComponent } from './tv-offer-top.component';

describe('TvOfferTopComponent', () => {
  let component: TvOfferTopComponent;
  let fixture: ComponentFixture<TvOfferTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvOfferTopComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvOfferTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
