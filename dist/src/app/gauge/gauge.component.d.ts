/**
 * @category   Component
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
 **/
import { OnInit } from '@angular/core';
import { GaugeLabel } from './shared/gauge-label';
import { GaugeSegment } from './shared/gauge-segment';
export declare class GaugeComponent implements OnInit {
    bgRadius: number;
    bgColor: string;
    rounded: boolean;
    reverse: boolean;
    animationSecs: number;
    labels: GaugeLabel[];
    segments: GaugeSegment[];
    sortedSegments: GaugeSegment[];
    segmentsLoaded: boolean;
    isIE11: boolean;
    constructor();
    ngOnInit(): void;
    sortSegments(segments: GaugeSegment[]): GaugeSegment[];
}
