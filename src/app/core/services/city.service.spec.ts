import { TestBed } from '@angular/core/testing';
import { CityService } from './city.service';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: CityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
