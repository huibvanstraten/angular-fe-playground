import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationmapComponent } from './stationmap.component';

describe('StationmapComponent', () => {
  let component: StationmapComponent;
  let fixture: ComponentFixture<StationmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
