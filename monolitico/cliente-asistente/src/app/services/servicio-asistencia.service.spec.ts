import { TestBed } from '@angular/core/testing';

import { ServicioAsistenciaService } from './servicio-asistencia.service';

describe('ServicioAsistenciaService', () => {
  let service: ServicioAsistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
