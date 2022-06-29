import { TestBed } from '@angular/core/testing';

import { DatasqliteService } from './datasqlite.service';

describe('DatasqliteService', () => {
  let service: DatasqliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasqliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
