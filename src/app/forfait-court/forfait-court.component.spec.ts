import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitCourtComponent } from './forfait-court.component';

describe('ForfaitCourtComponent', () => {
  let component: ForfaitCourtComponent;
  let fixture: ComponentFixture<ForfaitCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitCourtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfaitCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
