import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinenComponent } from './treinen.component';

describe('TreinenComponent', () => {
  let component: TreinenComponent;
  let fixture: ComponentFixture<TreinenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreinenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
