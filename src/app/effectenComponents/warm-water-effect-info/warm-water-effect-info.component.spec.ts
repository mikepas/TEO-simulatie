import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmWaterEffectInfoComponent } from './warm-water-effect-info.component';

describe('WarmWaterEffectInfoComponent', () => {
  let component: WarmWaterEffectInfoComponent;
  let fixture: ComponentFixture<WarmWaterEffectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarmWaterEffectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmWaterEffectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
