import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowingWaterViewComponent } from './flowing-water-view.component';

describe('FlowingWaterViewComponent', () => {
  let component: FlowingWaterViewComponent;
  let fixture: ComponentFixture<FlowingWaterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowingWaterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowingWaterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
