import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBaseComponent } from './offer-base.component';

describe('OfferBaseComponent', () => {
  let component: OfferBaseComponent;
  let fixture: ComponentFixture<OfferBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
