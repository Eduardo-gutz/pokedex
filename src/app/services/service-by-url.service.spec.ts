import { TestBed } from '@angular/core/testing';

import { ServiceByUrlService } from './service-by-url.service';

describe('ServiceByUrlService', () => {
  let service: ServiceByUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceByUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
