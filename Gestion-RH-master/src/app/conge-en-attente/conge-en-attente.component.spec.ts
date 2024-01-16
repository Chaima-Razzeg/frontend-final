import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeEnAttenteComponent } from './conge-en-attente.component';

describe('CongeEnAttenteComponent', () => {
  let component: CongeEnAttenteComponent;
  let fixture: ComponentFixture<CongeEnAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongeEnAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeEnAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
