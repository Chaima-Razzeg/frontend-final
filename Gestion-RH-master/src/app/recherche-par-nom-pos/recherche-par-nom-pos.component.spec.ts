import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParNomPosComponent } from './recherche-par-nom-pos.component';

describe('RechercheParNomPosComponent', () => {
  let component: RechercheParNomPosComponent;
  let fixture: ComponentFixture<RechercheParNomPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParNomPosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheParNomPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
