import { TestBed } from '@angular/core/testing';

import { GetCityResolver } from './get-city.resolver';

describe('GetCityResolver', () => {
  let resolver: GetCityResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetCityResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
