import { TestBed } from '@angular/core/testing';

import { ShippingApiService } from './shipping-api.service';

describe('ShippingApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShippingApiService = TestBed.get(ShippingApiService);
    expect(service).toBeTruthy();
  });
});
