import { TestBed } from '@angular/core/testing';

import { EligFileParserService } from './elig-file-parser.service';

describe('EligFileParserService', () => {
  let service: EligFileParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EligFileParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
