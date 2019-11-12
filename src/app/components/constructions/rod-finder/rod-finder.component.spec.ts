import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodFinderComponent } from './rod-finder.component';

describe('RodFinderComponent', () => {
  let component: RodFinderComponent;
  let fixture: ComponentFixture<RodFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
