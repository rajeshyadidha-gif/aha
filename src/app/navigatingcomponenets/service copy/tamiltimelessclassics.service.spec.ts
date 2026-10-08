import { TestBed } from '@angular/core/testing';

import { TamiltimelessclassicService } from './tamiltimelessclassic.service';

describe('TamiltimelessclassicService', () => {
  let service: TamiltimelessclassicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamiltimelessclassicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
