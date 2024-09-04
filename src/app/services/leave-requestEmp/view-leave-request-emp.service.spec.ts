import { TestBed } from '@angular/core/testing';

import { ViewLeaveRequestEmpService } from './view-leave-request-emp.service';

describe('ViewLeaveRequestEmpService', () => {
  let service: ViewLeaveRequestEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewLeaveRequestEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
