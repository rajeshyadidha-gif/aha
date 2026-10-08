import { TestBed } from '@angular/core/testing';

import { LatestreleasesService } from './latestreleases.service';

describe('LatestreleasesService', () => {
  let service: LatestreleasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestreleasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
