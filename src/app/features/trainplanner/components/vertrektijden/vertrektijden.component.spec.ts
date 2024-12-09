import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertrektijdenComponent } from './vertrektijden.component';

describe('VertrektijdenComponent', () => {
  let component: VertrektijdenComponent;
  let fixture: ComponentFixture<VertrektijdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VertrektijdenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VertrektijdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
