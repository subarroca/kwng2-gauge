import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @category   Component
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
 **/
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let GaugeComponent = class GaugeComponent {
    constructor() {
        this.bgRadius = 100;
        this.rounded = true;
        this.reverse = false;
        this.animationSecs = 0.5;
        this.segmentsLoaded = false;
        this.isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    set segments(segments) {
        this.segmentsLoaded = false;
        this.sortedSegments = this.sortSegments(segments);
        // wait a bit and start animation
        setTimeout(() => this.segmentsLoaded = true, 0);
    }
    ngOnInit() {
    }
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
};
__decorate$1([
    Input(),
    __metadata("design:type", Object)
], GaugeComponent.prototype, "bgRadius", void 0);
__decorate$1([
    Input(),
    __metadata("design:type", String)
], GaugeComponent.prototype, "bgColor", void 0);
__decorate$1([
    Input(),
    __metadata("design:type", Object)
], GaugeComponent.prototype, "rounded", void 0);
__decorate$1([
    Input(),
    __metadata("design:type", Object)
], GaugeComponent.prototype, "reverse", void 0);
__decorate$1([
    Input(),
    __metadata("design:type", Object)
], GaugeComponent.prototype, "animationSecs", void 0);
__decorate$1([
    Input(),
    __metadata("design:type", Array)
], GaugeComponent.prototype, "labels", void 0);
__decorate$1([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GaugeComponent.prototype, "segments", null);
GaugeComponent = __decorate$1([
    Component({
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
    }),
    __metadata("design:paramtypes", [])
], GaugeComponent);

/**
 * @category   Module
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
 **/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let GaugeModule = class GaugeModule {
};
GaugeModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [GaugeComponent],
        exports: [GaugeComponent]
    })
], GaugeModule);

/**
 * @category   Model
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
// ANGULAR
// EXTERNAL
// OWN
class GaugeSegment {
    constructor(options = {}) {
        this.radius = options.radius || 100;
        this.goal = options.goal || 100;
        this.value = options.value;
        this.color = options.color;
        this.bgColor = options.bgColor || 'transparent';
        this.borderWidth = options.borderWidth || 100;
    }
    get computedRadius() {
        return this.radius - this.borderWidth / 2;
    }
    get strokeProgress() {
        return `${2 * Math.PI * this.computedRadius * this.value / this.goal} ${2 * Math.PI * this.computedRadius}`;
    }
    get strokeEmptyProgress() {
        return `0 ${2 * Math.PI * this.computedRadius}`;
    }
}

/**
 * @category   Model
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
// ANGULAR
// EXTERNAL
// OWN
class GaugeLabel {
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
