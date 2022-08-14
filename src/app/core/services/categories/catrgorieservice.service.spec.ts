import { TestBed } from '@angular/core/testing';

import { CatrgorieserviceService } from './catrgorieservice.service';

describe('CatrgorieserviceService', () => {
  let service: CatrgorieserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatrgorieserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
