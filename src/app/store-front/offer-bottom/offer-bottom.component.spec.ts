import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBottomComponent } from './offer-bottom.component';

describe('OfferBottomComponent', () => {
  let component: OfferBottomComponent;
  let fixture: ComponentFixture<OfferBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
