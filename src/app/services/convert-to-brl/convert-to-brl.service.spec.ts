import { TestBed } from '@angular/core/testing';

import { ConvertToBRLService } from './convert-to-brl.service';

describe('ConvertToBRLService', () => {
  let service: ConvertToBRLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertToBRLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
