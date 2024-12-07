import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationslijstComponent } from './stationslijst.component';

describe('StationslijstComponent', () => {
  let component: StationslijstComponent;
  let fixture: ComponentFixture<StationslijstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationslijstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationslijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
