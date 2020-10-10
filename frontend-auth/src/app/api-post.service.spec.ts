import { TestBed } from '@angular/core/testing';

import { ApiPostService } from './api-post.service';

describe('ApiPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPostService = TestBed.get(ApiPostService);
    expect(service).toBeTruthy();
  });
});
