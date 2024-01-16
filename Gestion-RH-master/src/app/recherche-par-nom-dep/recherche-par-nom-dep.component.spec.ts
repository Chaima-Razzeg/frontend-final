import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParNomDepComponent } from './recherche-par-nom-dep.component';

describe('RechercheParNomDepComponent', () => {
  let component: RechercheParNomDepComponent;
  let fixture: ComponentFixture<RechercheParNomDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParNomDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheParNomDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
