import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowingWaterWikiComponent } from './flowing-water-wiki.component';

describe('FlowingWaterWikiComponent', () => {
  let component: FlowingWaterWikiComponent;
  let fixture: ComponentFixture<FlowingWaterWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowingWaterWikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowingWaterWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
