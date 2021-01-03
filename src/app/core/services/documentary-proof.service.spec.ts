import { TestBed } from '@angular/core/testing';

import { DocumentaryProofService } from './documentary-proof.service';

describe('DocumentaryProofService', () => {
  let service: DocumentaryProofService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentaryProofService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
