/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LanzamientosService } from './lanzamientos.service';

describe('Service: Lanzamientos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanzamientosService]
    });
  });

  it('should ...', inject([LanzamientosService], (service: LanzamientosService) => {
    expect(service).toBeTruthy();
  }));
});
