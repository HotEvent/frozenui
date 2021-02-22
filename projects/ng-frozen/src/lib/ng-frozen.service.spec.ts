import { TestBed } from '@angular/core/testing';

import { NgFrozenService } from './ng-frozen.service';

describe('NgFrozenService', () => {
  let service: NgFrozenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFrozenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
