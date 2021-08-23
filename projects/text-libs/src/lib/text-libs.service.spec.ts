import { TestBed } from '@angular/core/testing';

import { TextLibsService } from './text-libs.service';

describe('TextLibsService', () => {
  let service: TextLibsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextLibsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
