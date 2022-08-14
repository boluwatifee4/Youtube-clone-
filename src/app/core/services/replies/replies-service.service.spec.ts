import { TestBed } from '@angular/core/testing';

import { RepliesServiceService } from './replies-service.service';

describe('RepliesServiceService', () => {
  let service: RepliesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepliesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
