/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { APIService } from './estados.service';

describe('Service: Estados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIService]
    });
  });

  it('should ...', inject([APIService], (service: APIService) => {
    expect(service).toBeTruthy();
  }));
});
