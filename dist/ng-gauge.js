import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @category   Component
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
 **/
class GaugeComponent {
    constructor() {
        this.bgRadius = 100;
        this.rounded = true;
        this.reverse = false;
        this.animationSecs = 0.5;
        this.segmentsLoaded = false;
        this.isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    /**
     * @param {?} segments
     * @return {?}
     */
    set segments(segments) {
        this.segmentsLoaded = false;
        this.sortedSegments = this.sortSegments(segments);
        // wait a bit and start animation
        setTimeout(() => this.segmentsLoaded = true, 0);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} segments
     * @return {?}
     */
    sortSegments(segments) {
        return segments && segments.sort((a, b) => {
            if (this.reverse) {
                return (a.value / a.goal > b.value / b.goal) ? 1 : -1;
            }
            else {
                return (a.value / a.goal > b.value / b.goal) ? -1 : 1;
            }
        });
    }
}
GaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-gauge',
                template: `
    <svg viewBox="0 0 200 200">
      <g
        class=kw-holder
        [attr.transform]="isIE11 ? 'translate(100 100) rotate(-90)' : ''">
        <circle
          class=kw-back
          [attr.r]="bgRadius"
          [style.fill]=bgColor/>

          <g
            *ngFor="let segment of sortedSegments">
            <circle
              class=kw-mid
              [style.stroke]=segment.bgColor
              [style.strokeWidth]=segment.borderWidth
              [attr.r]=segment.computedRadius/>

              <circle
                class=kw-front

                [style.transition]="'stroke-dasharray ' + animationSecs + 's'"
                [style.stroke]=segment.color
                [style.strokeWidth]=segment.borderWidth
                [style.strokeDasharray]="segmentsLoaded ? segment.strokeProgress : segment.strokeEmptyProgress"
                [style.strokeLinecap]="rounded ? 'round' : ''"
                [attr.r]=segment.computedRadius/>
          </g>
      </g>

      <g
        transform="translate(100, 100)">
        <text
          class=kw-label
          *ngFor="let label of labels"
          [attr.x]=label.x
          [attr.y]=label.y
          [style.fill]=label.color
          [style.fontSize]=label.fontSize
          text-anchor=middle>
          {{label.text}}
        </text>
      </g>
    </svg>
  `,
                styles: [`
    .kw-mid,
    .kw-front {
      fill: transparent;
    }

    .kw-holder {
      -webkit-transform: translate(100px, 100px) rotate(-90deg);
              transform: translate(100px, 100px) rotate(-90deg);
    }
  `]
            },] },
];
/**
 * @nocollapse
 */
GaugeComponent.ctorParameters = () => [];
GaugeComponent.propDecorators = {
    'bgRadius': [{ type: Input },],
    'bgColor': [{ type: Input },],
    'rounded': [{ type: Input },],
    'reverse': [{ type: Input },],
    'animationSecs': [{ type: Input },],
    'labels': [{ type: Input },],
    'segments': [{ type: Input },],
};

/**
 * @category   Module
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
 **/
class GaugeModule {
}
GaugeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [GaugeComponent],
                exports: [GaugeComponent]
            },] },
];
/**
 * @nocollapse
 */
GaugeModule.ctorParameters = () => [];

class GaugeSegment {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        this.radius = options.radius || 100;
        this.goal = options.goal || 100;
        this.value = options.value;
        this.color = options.color;
        this.bgColor = options.bgColor || 'transparent';
        this.borderWidth = options.borderWidth || 100;
    }
    /**
     * @return {?}
     */
    get computedRadius() {
        return this.radius - this.borderWidth / 2;
    }
    /**
     * @this {?}
     * @return {?}
     */
    get strokeProgress() {
        return `${2 * Math.PI * this.computedRadius * this.value / this.goal} ${2 * Math.PI * this.computedRadius}`;
    }
    /**
     * @this {?}
     * @return {?}
     */
    get strokeEmptyProgress() {
        return `0 ${2 * Math.PI * this.computedRadius}`;
    }
}

class GaugeLabel {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        this.color = options.color;
        this.text = options.text;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.fontSize = options.fontSize || '1em';
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { GaugeSegment, GaugeLabel, GaugeModule };
//# sourceMappingURL=ng-gauge.js.map
