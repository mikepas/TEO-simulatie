import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowingWaterTableComponent } from './flowing-water-table.component';

describe('FlowingWaterTableComponent', () => {
  let component: FlowingWaterTableComponent;
  let fixture: ComponentFixture<FlowingWaterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowingWaterTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowingWaterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
