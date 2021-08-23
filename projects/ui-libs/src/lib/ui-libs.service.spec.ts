import { TestBed } from '@angular/core/testing';

import { UiLibsService } from './ui-libs.service';

describe('UiLibsService', () => {
  let service: UiLibsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiLibsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
