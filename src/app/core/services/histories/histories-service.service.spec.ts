import { TestBed } from '@angular/core/testing';

import { HistoriesServiceService } from './histories-service.service';

describe('HistoriesServiceService', () => {
  let service: HistoriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
