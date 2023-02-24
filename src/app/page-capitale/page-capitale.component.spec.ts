import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCapitaleComponent } from './page-capitale.component';

describe('PageCapitaleComponent', () => {
  let component: PageCapitaleComponent;
  let fixture: ComponentFixture<PageCapitaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCapitaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCapitaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
