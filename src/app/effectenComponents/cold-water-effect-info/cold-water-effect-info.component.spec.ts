import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdWaterEffectInfoComponent } from './cold-water-effect-info.component';

describe('ColdWaterEffectInfoComponent', () => {
  let component: ColdWaterEffectInfoComponent;
  let fixture: ComponentFixture<ColdWaterEffectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdWaterEffectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdWaterEffectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
