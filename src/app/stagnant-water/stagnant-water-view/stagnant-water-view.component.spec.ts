import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagnantWaterViewComponent } from './stagnant-water-view.component';

describe('StagnantWaterViewComponent', () => {
  let component: StagnantWaterViewComponent;
  let fixture: ComponentFixture<StagnantWaterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagnantWaterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagnantWaterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
