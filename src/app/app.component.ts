import { Component } from '@angular/core';

import { GaugeSegment } from '../../projects/gauge-chart/src/lib/shared/gauge-segment';
import { GaugeLabel } from '../../projects/gauge-chart/src/lib/shared/gauge-label';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colors = {
    indigo: '#14143e',
    pink: '#fd1c49',
    orange: '#ff6e00',
    yellow: '#f0c800',
    mint: '#00efab',
    cyan: '#05d1ff',
    purple: '#841386',
    white: '#fff'
  };

  nautilusGraph = {
    bgRadius: 100,
    bgColor: this.colors.indigo,
    rounded: true,
    reverse: true,
    animationSecs: 2,
    segments: [
      new GaugeSegment({
        value: 4,
        color: this.colors.orange,
        radius: 20,
        borderWidth: 16
      }),
      new GaugeSegment({
        value: 8,
        color: this.colors.purple,
        radius: 36,
        borderWidth: 16
      }),
      new GaugeSegment({
        value: 15,
        color: this.colors.yellow,
        radius: 52,
        borderWidth: 16
      }),
      new GaugeSegment({
        value: 16,
        color: this.colors.cyan,
        radius: 68,
        borderWidth: 16
      }),
      new GaugeSegment({
        value: 23,
        color: this.colors.pink,
        radius: 84,
        borderWidth: 16
      }),
      new GaugeSegment({
        value: 42,
        color: this.colors.mint,
        radius: 100,
        borderWidth: 16
      })
    ]
  };

  laneGraph = {
    bgRadius: 100,
    bgColor: this.colors.indigo,
    rounded: true,
    reverse: true,
    animationSecs: 5,
    segments: [
      new GaugeSegment({
        value: 4,
        color: this.colors.mint,
        bgColor: `${this.colors.mint}22`,
        radius: 85,
        borderWidth: 2
      }),
      new GaugeSegment({
        value: 8,
        color: this.colors.pink,
        bgColor: `${this.colors.pink}22`,
        radius: 70,
        borderWidth: 2
      }),
      new GaugeSegment({
        value: 15,
        color: this.colors.cyan,
        bgColor: `${this.colors.cyan}22`,
        radius: 55,
        borderWidth: 2
      }),
      new GaugeSegment({
        value: 16,
        color: this.colors.yellow,
        bgColor: `${this.colors.yellow}22`,
        radius: 40,
        borderWidth: 2
      }),
      new GaugeSegment({
        value: 23,
        color: this.colors.purple,
        bgColor: `${this.colors.purple}22`,
        radius: 25,
        borderWidth: 2
      }),
      new GaugeSegment({
        value: 42,
        color: this.colors.orange,
        bgColor: `${this.colors.orange}22`,
        radius: 10,
        borderWidth: 2
      })
    ]
  };

  pieGraph = {
    bgRadius: 100,
    bgColor: this.colors.indigo,
    rounded: false,
    reverse: false,
    animationSecs: 3,
    borderWidth: 100,
    segments: [
      new GaugeSegment({
        value: 4,
        goal: 42,
        color: this.colors.pink
      }),
      new GaugeSegment({
        value: 8,
        goal: 42,
        color: this.colors.orange
      }),
      new GaugeSegment({
        value: 15,
        goal: 42,
        color: this.colors.yellow
      }),
      new GaugeSegment({
        value: 16,
        goal: 42,
        color: this.colors.cyan
      }),
      new GaugeSegment({
        value: 23,
        goal: 42,
        color: this.colors.purple
      }),
      new GaugeSegment({
        value: 42,
        goal: 42,
        color: this.colors.mint
      })
    ]
  };

  progressGraph = {
    bgRadius: 60,
    bgColor: this.colors.indigo,
    rounded: false,
    reverse: false,
    animationSecs: 1,
    labels: [
      new GaugeLabel({
        color: this.colors.white,
        text: 'Loaded',
        x: 0,
        y: 20,
        fontSize: '1em'
      }),
      new GaugeLabel({
        color: this.colors.pink,
        text: '81%',
        x: 0,
        y: 0,
        fontSize: '2em'
      })
    ],
    segments: [
      new GaugeSegment({
        value: 81,
        color: this.colors.pink,
        borderWidth: 20
      })
    ]
  };
}
