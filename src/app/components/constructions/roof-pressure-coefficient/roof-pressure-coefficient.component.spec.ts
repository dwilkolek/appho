import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofPressureCoefficientComponent } from './roof-pressure-coefficient.component';

describe('RoofPressureCoefficientComponent', () => {
  let component: RoofPressureCoefficientComponent;
  let fixture: ComponentFixture<RoofPressureCoefficientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofPressureCoefficientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofPressureCoefficientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
