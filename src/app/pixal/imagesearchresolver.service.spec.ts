import { TestBed, inject } from '@angular/core/testing';

import { ImagesearchresolverService } from './imagesearchresolver.service';

describe('ImagesearchresolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagesearchresolverService]
    });
  });

  it('should be created', inject([ImagesearchresolverService], (service: ImagesearchresolverService) => {
    expect(service).toBeTruthy();
  }));
});
