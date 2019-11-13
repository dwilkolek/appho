import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoefComponent } from './coef.component';

describe('CoefComponent', () => {
  let component: CoefComponent;
  let fixture: ComponentFixture<CoefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
