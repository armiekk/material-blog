/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogContentService } from './blog-content.service';

describe('Service: BlogContent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogContentService]
    });
  });

  it('should ...', inject([BlogContentService], (service: BlogContentService) => {
    expect(service).toBeTruthy();
  }));
});
