import { TestBed } from '@angular/core/testing';

import { IndService } from './ind.service';

describe('LagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndService = TestBed.get(IndService);
    expect(service).toBeTruthy();
  });
});
