import { TestBed } from '@angular/core/testing';

import { LeaveRequestHrService } from './leave-request-hr.service';

describe('LeaveRequestHrService', () => {
  let service: LeaveRequestHrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveRequestHrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
