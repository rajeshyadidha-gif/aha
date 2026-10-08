import { TestBed } from '@angular/core/testing';

import { TelugutimelessclassicService } from './telugutimelessclassic.service';

describe('TelugutimelessclassicService', () => {
  let service: TelugutimelessclassicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelugutimelessclassicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
