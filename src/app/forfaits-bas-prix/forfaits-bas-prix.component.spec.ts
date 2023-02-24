import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsBasPrixComponent } from './forfaits-bas-prix.component';

describe('ForfaitsBasPrixComponent', () => {
  let component: ForfaitsBasPrixComponent;
  let fixture: ComponentFixture<ForfaitsBasPrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsBasPrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfaitsBasPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
