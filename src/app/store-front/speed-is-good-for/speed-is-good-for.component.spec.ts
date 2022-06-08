import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedIsGoodForComponent } from './speed-is-good-for.component';

describe('SpeedIsGoodForComponent', () => {
  let component: SpeedIsGoodForComponent;
  let fixture: ComponentFixture<SpeedIsGoodForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedIsGoodForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedIsGoodForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
