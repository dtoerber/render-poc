import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetOfferTopComponent } from './internet-offer-top.component';

describe('InternetOfferTopComponent', () => {
  let component: InternetOfferTopComponent;
  let fixture: ComponentFixture<InternetOfferTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetOfferTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetOfferTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
