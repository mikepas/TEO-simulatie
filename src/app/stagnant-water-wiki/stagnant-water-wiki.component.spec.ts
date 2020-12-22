import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagnantWaterWikiComponent } from './stagnant-water-wiki.component';

describe('StagnantWaterWikiComponent', () => {
  let component: StagnantWaterWikiComponent;
  let fixture: ComponentFixture<StagnantWaterWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagnantWaterWikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagnantWaterWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
