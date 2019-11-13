import { TestBed } from '@angular/core/testing';

import { PreasureCoefficientsService } from './preasure-coefficients.service';

describe('PreasureCoefficientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreasureCoefficientsService = TestBed.get(PreasureCoefficientsService);
    expect(service).toBeTruthy();
  });
});
