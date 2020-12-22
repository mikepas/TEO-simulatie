import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagnantWaterComponent } from './stagnant-water.component';

describe('StagnantWaterComponent', () => {
  let component: StagnantWaterComponent;
  let fixture: ComponentFixture<StagnantWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagnantWaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagnantWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
