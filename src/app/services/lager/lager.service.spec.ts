import { TestBed } from '@angular/core/testing';

import { LagerService } from './lager.service';

describe('LagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LagerService = TestBed.get(LagerService);
    expect(service).toBeTruthy();
  });
});
