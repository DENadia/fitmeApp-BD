import { TestBed } from '@angular/core/testing';

import { SubjectInServiceService } from './subject-in-service.service';

describe('SubjectInServiceService', () => {
  let service: SubjectInServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectInServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
