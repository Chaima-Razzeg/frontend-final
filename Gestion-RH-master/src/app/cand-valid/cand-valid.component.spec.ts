import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandValidComponent } from './cand-valid.component';

describe('CandValidComponent', () => {
  let component: CandValidComponent;
  let fixture: ComponentFixture<CandValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
