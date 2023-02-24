import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePetitsPrixComponent } from './page-petits-prix.component';

describe('PagePetitsPrixComponent', () => {
  let component: PagePetitsPrixComponent;
  let fixture: ComponentFixture<PagePetitsPrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePetitsPrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePetitsPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
