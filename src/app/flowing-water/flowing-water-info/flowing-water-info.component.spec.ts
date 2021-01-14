import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowingWaterInfoComponent } from './flowing-water-info.component';

describe('FlowingWaterInfoComponent', () => {
  let component: FlowingWaterInfoComponent;
  let fixture: ComponentFixture<FlowingWaterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowingWaterInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowingWaterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
