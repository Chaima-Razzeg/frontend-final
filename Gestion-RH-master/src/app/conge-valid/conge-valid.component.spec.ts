import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeValidComponent } from './conge-valid.component';

describe('CongeValidComponent', () => {
  let component: CongeValidComponent;
  let fixture: ComponentFixture<CongeValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongeValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
