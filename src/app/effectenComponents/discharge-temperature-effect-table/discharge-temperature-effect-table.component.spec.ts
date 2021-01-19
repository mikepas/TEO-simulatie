import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeTemperatureEffectTableComponent } from './discharge-temperature-effect-table.component';

describe('DischargeTemperatureEffectTableComponent', () => {
  let component: DischargeTemperatureEffectTableComponent;
  let fixture: ComponentFixture<DischargeTemperatureEffectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeTemperatureEffectTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeTemperatureEffectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
