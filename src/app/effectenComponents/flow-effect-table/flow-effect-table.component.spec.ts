import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowEffectTableComponent } from './flow-effect-table.component';

describe('FlowEffectTableComponent', () => {
  let component: FlowEffectTableComponent;
  let fixture: ComponentFixture<FlowEffectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowEffectTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowEffectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
