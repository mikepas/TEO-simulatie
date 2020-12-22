import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowingWaterComponent } from './flowing-water.component';

describe('FlowingWaterComponent', () => {
  let component: FlowingWaterComponent;
  let fixture: ComponentFixture<FlowingWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowingWaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowingWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
