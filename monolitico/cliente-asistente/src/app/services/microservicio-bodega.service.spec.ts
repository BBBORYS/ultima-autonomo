import { TestBed } from '@angular/core/testing';

import { MicroservicioBodegaService } from './microservicio-bodega.service';

describe('MicroservicioBodegaService', () => {
  let service: MicroservicioBodegaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroservicioBodegaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
