import { TestBed } from '@angular/core/testing';

import { FeelingsServiceService } from './feelings-service.service';

describe('FeelingsServiceService', () => {
  let service: FeelingsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeelingsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
