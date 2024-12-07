import { TestBed } from '@angular/core/testing';

import { NsApiService } from './ns-api.service';

describe('NsApiService', () => {
  let service: NsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
