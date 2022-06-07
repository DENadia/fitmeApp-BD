import { TestBed } from '@angular/core/testing';

import { DatafirebaseService } from './datafirebase.service';

describe('DatafirebaseService', () => {
  let service: DatafirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatafirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
