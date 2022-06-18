import { TestBed } from '@angular/core/testing';

import { LigaBancoService } from './liga-banco.service';

describe('LigaBancoService', () => {
  let service: LigaBancoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigaBancoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
