import { TestBed } from '@angular/core/testing';

import { GetCitiesResolver } from './get-cities.resolver';

describe('GetCitiesResolver', () => {
  let resolver: GetCitiesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetCitiesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
