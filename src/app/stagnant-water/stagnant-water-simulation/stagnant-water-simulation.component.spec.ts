import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagnantWaterSimulationComponent } from './stagnant-water-simulation.component';

describe('StagnantWaterSimulationComponent', () => {
  let component: StagnantWaterSimulationComponent;
  let fixture: ComponentFixture<StagnantWaterSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagnantWaterSimulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagnantWaterSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
