import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var GaugeComponent = /** @class */ (function () {
    function GaugeComponent() {
        this.bgRadius = 100;
        this.rounded = true;
        this.reverse = false;
        this.animationSecs = 0.5;
        this.segmentsLoaded = false;
        this.isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    Object.defineProperty(GaugeComponent.prototype, "segments", {
        set: function (segments) {
            var _this = this;
            this.segmentsLoaded = false;
            this.sortedSegments = this.sortSegments(segments);
            setTimeout(function () { return _this.segmentsLoaded = true; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    GaugeComponent.prototype.ngOnInit = function () {
    };
    GaugeComponent.prototype.sortSegments = function (segments) {
        var _this = this;
        return segments && segments.sort(function (a, b) {
            if (_this.reverse) {
                return (a.value / a.goal > b.value / b.goal) ? 1 : -1;
            }
            else {
                return (a.value / a.goal > b.value / b.goal) ? -1 : 1;
            }
        });
    };
    return GaugeComponent;
}());
GaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-gauge',
                template: "<svg viewBox=\"0 0 200 200\">\n  <g\n    class=kw-holder\n    [attr.transform]=\"isIE11 ? 'translate(100 100) rotate(-90)' : ''\">\n    <circle\n      class=kw-back\n      [attr.r]=\"bgRadius\"\n      [style.fill]=bgColor/>\n\n      <g\n        *ngFor=\"let segment of sortedSegments\">\n        <circle\n          class=kw-mid\n          [style.stroke]=segment.bgColor\n          [style.strokeWidth]=segment.borderWidth\n          [attr.r]=segment.computedRadius/>\n\n          <circle\n            class=kw-front\n\n            [style.transition]=\"'stroke-dasharray ' + animationSecs + 's'\"\n            [style.stroke]=segment.color\n            [style.strokeWidth]=segment.borderWidth\n            [style.strokeDasharray]=\"segmentsLoaded ? segment.strokeProgress : segment.strokeEmptyProgress\"\n            [style.strokeLinecap]=\"rounded ? 'round' : ''\"\n            [attr.r]=segment.computedRadius/>\n      </g>\n  </g>\n\n  <g\n    transform=\"translate(100, 100)\">\n    <text\n      class=kw-label\n      *ngFor=\"let label of labels\"\n      [attr.x]=label.x\n      [attr.y]=label.y\n      [style.fill]=label.color\n      [style.fontSize]=label.fontSize\n      text-anchor=middle>\n      {{label.text}}\n    </text>\n  </g>\n</svg>\n",
                styles: [".kw-front,.kw-mid{fill:transparent}.kw-holder{-webkit-transform:translate(100px,100px) rotate(-90deg);transform:translate(100px,100px) rotate(-90deg)}"]
            },] },
];
GaugeComponent.ctorParameters = function () { return []; };
GaugeComponent.propDecorators = {
    "bgRadius": [{ type: Input },],
    "bgColor": [{ type: Input },],
    "rounded": [{ type: Input },],
    "reverse": [{ type: Input },],
    "animationSecs": [{ type: Input },],
    "labels": [{ type: Input },],
    "segments": [{ type: Input },],
};
var GaugeModule = /** @class */ (function () {
    function GaugeModule() {
    }
    return GaugeModule;
}());
GaugeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [GaugeComponent],
                exports: [GaugeComponent]
            },] },
];
var GaugeLabel = /** @class */ (function () {
    function GaugeLabel(options) {
        if (options === void 0) { options = {}; }
        this.color = options.color;
        this.text = options.text;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.fontSize = options.fontSize || '1em';
    }
    return GaugeLabel;
}());
var GaugeSegment = /** @class */ (function () {
    function GaugeSegment(options) {
        if (options === void 0) { options = {}; }
        this.radius = options.radius || 100;
        this.goal = options.goal || 100;
        this.value = options.value;
        this.color = options.color;
        this.bgColor = options.bgColor || 'transparent';
        this.borderWidth = options.borderWidth || 100;
    }
    Object.defineProperty(GaugeSegment.prototype, "computedRadius", {
        get: function () {
            return this.radius - this.borderWidth / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeSegment.prototype, "strokeProgress", {
        get: function () {
            return 2 * Math.PI * this.computedRadius * this.value / this.goal + " " + 2 * Math.PI * this.computedRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeSegment.prototype, "strokeEmptyProgress", {
        get: function () {
            return "0 " + 2 * Math.PI * this.computedRadius;
        },
        enumerable: true,
        configurable: true
    });
    return GaugeSegment;
}());

export { GaugeModule, GaugeLabel, GaugeSegment, GaugeComponent as ɵa };
//# sourceMappingURL=ng-gauge.js.map
