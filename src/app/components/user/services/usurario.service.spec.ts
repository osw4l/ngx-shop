import { TestBed } from '@angular/core/testing';

import { UsurarioService } from './usurario.service';

describe('UsurarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsurarioService = TestBed.get(UsurarioService);
    expect(service).toBeTruthy();
  });
});
