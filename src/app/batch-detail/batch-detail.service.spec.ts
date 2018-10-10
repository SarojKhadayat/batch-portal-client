import { TestBed } from '@angular/core/testing';

import { BatchDetailService } from './batch-detail.service';

describe('BatchDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatchDetailService = TestBed.get(BatchDetailService);
    expect(service).toBeTruthy();
  });
});
