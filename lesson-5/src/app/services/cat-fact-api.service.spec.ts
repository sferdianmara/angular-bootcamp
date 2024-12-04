import { TestBed } from '@angular/core/testing';

import { CatFactApiService } from './cat-fact-api.service';

describe('CatFactApiService', () => {
  let service: CatFactApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFactApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
