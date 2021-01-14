import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureEffectTableComponent } from './temperature-effect-table.component';

describe('TemperatureEffectTableComponent', () => {
  let component: TemperatureEffectTableComponent;
  let fixture: ComponentFixture<TemperatureEffectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureEffectTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureEffectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
