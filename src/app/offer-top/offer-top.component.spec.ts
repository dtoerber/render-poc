import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTopComponent } from './offer-top.component';

describe('OfferTopComponent', () => {
  let component: OfferTopComponent;
  let fixture: ComponentFixture<OfferTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
