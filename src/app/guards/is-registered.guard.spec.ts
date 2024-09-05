import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isRegisteredGuard } from './is-registered.guard';

describe('isRegisteredGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isRegisteredGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
