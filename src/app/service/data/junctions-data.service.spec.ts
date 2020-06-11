import { TestBed } from '@angular/core/testing';

import { JunctionsDataService } from './junctions-data.service';

describe('JunctionsDataService', () => {
  let service: JunctionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JunctionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
