import { TestBed } from '@angular/core/testing';

import { CaseJugglingService } from './index.service';

describe('CaseJugglingService', () => {
  let service: CaseJugglingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseJugglingService);
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
