import { TestBed, inject, async } from '@angular/core/testing';
import { ChartHeartRateService } from './chart-heart-rate.service';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TimeSeries } from '../models/time-series.model';
import { MockData } from '../test/mock-HR-data';

describe('ChartHeartRateService', () => {
  let mockbackend, service;
  let mockData = MockData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ChartHeartRateService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  beforeEach(
    inject(
      [ChartHeartRateService, XHRBackend],
      (_service, _mockbackend) => {
        service = _service;
        mockbackend = _mockbackend;
      }));

  it('should parse data to TimeSeries[] (async)', async(() => {
    let options = new ResponseOptions({ body: mockData });
    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(options));
    });

    service.get().subscribe(data => {
      data.map((obj: TimeSeries) => {
        expect(obj.value).toBeDefined();
        expect(obj.date).toBeDefined();
      });
    });
  }));
});
