import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsVilleQcComponent } from './forfaits-ville-qc.component';

describe('ForfaitsVilleQcComponent', () => {
  let component: ForfaitsVilleQcComponent;
  let fixture: ComponentFixture<ForfaitsVilleQcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsVilleQcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfaitsVilleQcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
