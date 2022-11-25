import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitLongComponent } from './forfait-long.component';

describe('ForfaitLongComponent', () => {
  let component: ForfaitLongComponent;
  let fixture: ComponentFixture<ForfaitLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitLongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfaitLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
