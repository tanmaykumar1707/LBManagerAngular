import { TestBed } from '@angular/core/testing';

import { LbserviceService } from './lbservice.service';

describe('LbserviceService', () => {
  let service: LbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
