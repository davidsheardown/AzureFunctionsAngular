import { TestBed } from '@angular/core/testing';

import { PeopleDetailGuard } from './people-detail.guard';

describe('PeopleDetailGuard', () => {
  let guard: PeopleDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PeopleDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
