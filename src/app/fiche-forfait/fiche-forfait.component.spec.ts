import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheForfaitComponent } from './fiche-forfait.component';

describe('FicheForfaitComponent', () => {
  let component: FicheForfaitComponent;
  let fixture: ComponentFixture<FicheForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheForfaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
