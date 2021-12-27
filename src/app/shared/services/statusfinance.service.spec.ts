import { TestBed } from '@angular/core/testing';

import { StatusfinanceService } from './statusfinance.service';

describe('StatusfinanceService', () => {
  let service: StatusfinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusfinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
