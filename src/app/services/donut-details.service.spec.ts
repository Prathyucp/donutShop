import { TestBed } from '@angular/core/testing';

import { DonutDetailsService } from './donut-details.service';

describe('DonutDetailsService', () => {
  let service: DonutDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
