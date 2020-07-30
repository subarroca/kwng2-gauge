import { TestBed } from '@angular/core/testing';

import { GaugeChartService } from './gauge-chart.service';

describe('GaugeChartService', () => {
  let service: GaugeChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaugeChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
