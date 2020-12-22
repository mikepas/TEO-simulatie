import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowingWaterSimulationComponent } from './flowing-water-simulation.component';

describe('FlowingWaterSimulationComponent', () => {
  let component: FlowingWaterSimulationComponent;
  let fixture: ComponentFixture<FlowingWaterSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowingWaterSimulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowingWaterSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
