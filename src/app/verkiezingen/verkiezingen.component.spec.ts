import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerkiezingenComponent } from './verkiezingen.component';

describe('VerkiezingenComponent', () => {
  let component: VerkiezingenComponent;
  let fixture: ComponentFixture<VerkiezingenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerkiezingenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerkiezingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
