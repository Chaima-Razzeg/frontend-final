import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandEnAttenteComponent } from './cand-en-attente.component';

describe('CandEnAttenteComponent', () => {
  let component: CandEnAttenteComponent;
  let fixture: ComponentFixture<CandEnAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandEnAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandEnAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
