import { TestBed } from '@angular/core/testing';

import { JunctionsDataService } from './junctions-data.service';

describe('FormsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JunctionsDataService = TestBed.get(JunctionsDataService);
    expect(service).toBeTruthy();
  });
});
