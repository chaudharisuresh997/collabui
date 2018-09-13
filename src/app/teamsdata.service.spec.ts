import { TestBed, inject } from '@angular/core/testing';

import { TeamsdataService } from './teamsdata.service';

describe('TeamsdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsdataService]
    });
  });

  it('should ...', inject([TeamsdataService], (service: TeamsdataService) => {
    expect(service).toBeTruthy();
  }));
});
