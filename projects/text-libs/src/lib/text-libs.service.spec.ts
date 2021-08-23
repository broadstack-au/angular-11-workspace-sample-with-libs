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

  it('should convert from plain text to camel case', () => {
    expect(service.camelCase('my plan')).toEqual('myPlan');
  });

  it ('should convert from plain text to kebab case', () => {
    expect(service.kebabCase('my plan')).toEqual('my-plan');
  });

  it ('should convert from plain text to snake case', () => {
    expect(service.snakeCase('my plan')).toEqual('my_plan');
  });
});
