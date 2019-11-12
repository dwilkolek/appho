import { TestBed } from '@angular/core/testing';

import { RodFinderService } from './rod-finder.service';

describe('RodFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RodFinderService = TestBed.get(RodFinderService);
    expect(service).toBeTruthy();
  });
});
