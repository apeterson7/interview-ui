import { TestBed } from '@angular/core/testing';

import { CandidateService } from './candidate-service.service';

describe('CandidateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateService = TestBed.get(CandidateService);
    expect(service).toBeTruthy();
  });
});
