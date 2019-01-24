import { Component, Input, OnInit } from '@angular/core';

import { GaugeLabel } from './shared/gauge-label';
import { GaugeSegment } from './shared/gauge-segment';

@Component({
  selector: 'ng-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent implements OnInit {
  @Input() bgRadius = 100;
  @Input() bgColor: string;
  @Input() rounded = true;
  @Input() reverse = false;
  @Input() animationSecs = 0.5;

  @Input() labels: GaugeLabel[];

  @Input()
  set segments(segments: GaugeSegment[]) {
    this.segmentsLoaded = false;
    this.sortedSegments = this.sortSegments(segments);

    // wait a bit and start animation
    setTimeout(
      () => this.segmentsLoaded = true,
      0);
  }

  sortedSegments: GaugeSegment[];
  segmentsLoaded = false;

  isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);


  constructor() { }

  ngOnInit() {
  }

  sortSegments(segments: GaugeSegment[]) {
    return segments && segments.sort((a: GaugeSegment, b: GaugeSegment) => {
      if (this.reverse)
        return (a.value / a.goal > b.value / b.goal) ? 1 : -1;
      return (a.value / a.goal > b.value / b.goal) ? -1 : 1;
    });
  }
}
