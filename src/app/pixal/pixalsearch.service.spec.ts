import { TestBed, inject } from '@angular/core/testing';

import { PixalsearchService } from './pixalsearch.service';

describe('PixalsearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixalsearchService]
    });
  });

  it('should be created', inject([PixalsearchService], (service: PixalsearchService) => {
    expect(service).toBeTruthy();
  }));
});
