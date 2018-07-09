import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @category   Model
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
// ANGULAR
// EXTERNAL
// OWN
var  
// ANGULAR
// EXTERNAL
// OWN
GaugeSegment = /** @class */ (function () {
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
        get: /**
         * @return {?}
         */
        function () {
            return this.radius - this.borderWidth / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeSegment.prototype, "strokeProgress", {
        get: /**
         * @this {?}
         * @return {?}
         */
        function () {
            return 2 * Math.PI * this.computedRadius * this.value / this.goal + " " + 2 * Math.PI * this.computedRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeSegment.prototype, "strokeEmptyProgress", {
        get: /**
         * @this {?}
         * @return {?}
         */
        function () {
            return "0 " + 2 * Math.PI * this.computedRadius;
        },
        enumerable: true,
        configurable: true
    });
    return GaugeSegment;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @category   Model
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
// ANGULAR
// EXTERNAL
// OWN
var  
// ANGULAR
// EXTERNAL
// OWN
GaugeLabel = /** @class */ (function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        set: /**
         * @param {?} segments
         * @return {?}
         */
        function (segments) {
            var _this = this;
            this.segmentsLoaded = false;
            this.sortedSegments = this.sortSegments(segments);
            // wait a bit and start animation
            setTimeout(function () { return _this.segmentsLoaded = true; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GaugeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} segments
     * @return {?}
     */
    GaugeComponent.prototype.sortSegments = /**
     * @param {?} segments
     * @return {?}
     */
    function (segments) {
        var _this = this;
        return segments && segments.sort(function (a, b) {
            if (_this.reverse)
                return (a.value / a.goal > b.value / b.goal) ? 1 : -1;
            return (a.value / a.goal > b.value / b.goal) ? -1 : 1;
        });
    };
    GaugeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-gauge',
                    template: "<svg viewBox=\"0 0 200 200\">\n  <g\n    class=kw-holder\n    [attr.transform]=\"isIE11 ? 'translate(100 100) rotate(-90)' : ''\">\n    <circle\n      class=kw-back\n      [attr.r]=\"bgRadius\"\n      [style.fill]=bgColor/>\n\n      <g\n        *ngFor=\"let segment of sortedSegments\">\n        <circle\n          class=kw-mid\n          [style.stroke]=segment.bgColor\n          [style.strokeWidth]=segment.borderWidth\n          [attr.r]=segment.computedRadius/>\n\n          <circle\n            class=kw-front\n\n            [style.transition]=\"'stroke-dasharray ' + animationSecs + 's'\"\n            [style.stroke]=segment.color\n            [style.strokeWidth]=segment.borderWidth\n            [style.strokeDasharray]=\"segmentsLoaded ? segment.strokeProgress : segment.strokeEmptyProgress\"\n            [style.strokeLinecap]=\"rounded ? 'round' : ''\"\n            [attr.r]=segment.computedRadius/>\n      </g>\n  </g>\n\n  <g\n    transform=\"translate(100, 100)\">\n    <text\n      class=kw-label\n      *ngFor=\"let label of labels\"\n      [attr.x]=label.x\n      [attr.y]=label.y\n      [style.fill]=label.color\n      [style.fontSize]=label.fontSize\n      text-anchor=middle>\n      {{label.text}}\n    </text>\n  </g>\n</svg>\n",
                    styles: [".kw-front,.kw-mid{fill:transparent}.kw-holder{-webkit-transform:translate(100px,100px) rotate(-90deg);transform:translate(100px,100px) rotate(-90deg)}"]
                },] },
    ];
    /** @nocollapse */
    GaugeComponent.ctorParameters = function () { return []; };
    GaugeComponent.propDecorators = {
        bgRadius: [{ type: Input }],
        bgColor: [{ type: Input }],
        rounded: [{ type: Input }],
        reverse: [{ type: Input }],
        animationSecs: [{ type: Input }],
        labels: [{ type: Input }],
        segments: [{ type: Input }]
    };
    return GaugeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GaugeModule = /** @class */ (function () {
    function GaugeModule() {
    }
    GaugeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    bootstrap: [GaugeComponent],
                    declarations: [GaugeComponent],
                    exports: [GaugeComponent]
                },] },
    ];
    return GaugeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { GaugeSegment, GaugeLabel, GaugeComponent, GaugeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL2dhdWdlL2xpYi9zaGFyZWQvZ2F1Z2Utc2VnbWVudC50cyIsIm5nOi8vZ2F1Z2UvbGliL3NoYXJlZC9nYXVnZS1sYWJlbC50cyIsIm5nOi8vZ2F1Z2UvbGliL2dhdWdlLmNvbXBvbmVudC50cyIsIm5nOi8vZ2F1Z2UvbGliL2dhdWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjYXRlZ29yeSAgIE1vZGVsXG4gKiBAcGFja2FnZSAgICBjb20ua2l3aXR5LmdhdWdlLmdhdWdlXG4gKiBAYXV0aG9yICAgICBTYWx2YWRvciBTdWJhcnJvY2EgKHN1YmFycm9jYUBnbWFpbC5jb20pXG4qKi9cblxuXG5cblxuLy8gQU5HVUxBUlxuXG5cblxuXG4vLyBFWFRFUk5BTFxuXG5cblxuXG4vLyBPV05cblxuXG5cblxuXG5leHBvcnQgY2xhc3MgR2F1Z2VTZWdtZW50IHtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGdvYWw6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgYmdDb2xvcjogc3RyaW5nO1xuICBib3JkZXJXaWR0aDogbnVtYmVyO1xuXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczoge1xuICAgIHJhZGl1cz86IG51bWJlcixcbiAgICBnb2FsPzogbnVtYmVyLFxuICAgIHZhbHVlPzogbnVtYmVyLFxuICAgIGNvbG9yPzogc3RyaW5nLFxuICAgIGJnQ29sb3I/OiBzdHJpbmcsXG4gICAgYm9yZGVyV2lkdGg/OiBudW1iZXJcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCAxMDA7XG4gICAgdGhpcy5nb2FsID0gb3B0aW9ucy5nb2FsIHx8IDEwMDtcbiAgICB0aGlzLnZhbHVlID0gb3B0aW9ucy52YWx1ZTtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmJnQ29sb3IgPSBvcHRpb25zLmJnQ29sb3IgfHwgJ3RyYW5zcGFyZW50JztcbiAgICB0aGlzLmJvcmRlcldpZHRoID0gb3B0aW9ucy5ib3JkZXJXaWR0aCB8fCAxMDA7XG4gIH1cblxuXG5cbiAgZ2V0IGNvbXB1dGVkUmFkaXVzKCkge1xuICAgIHJldHVybiB0aGlzLnJhZGl1cyAtIHRoaXMuYm9yZGVyV2lkdGggLyAyO1xuICB9XG5cbiAgZ2V0IHN0cm9rZVByb2dyZXNzKHRoaXM6IEdhdWdlU2VnbWVudCkge1xuICAgIHJldHVybiBgJHsyICogTWF0aC5QSSAqIHRoaXMuY29tcHV0ZWRSYWRpdXMgKiB0aGlzLnZhbHVlIC8gdGhpcy5nb2FsfSAkezIgKiBNYXRoLlBJICogdGhpcy5jb21wdXRlZFJhZGl1c31gO1xuICB9XG5cbiAgZ2V0IHN0cm9rZUVtcHR5UHJvZ3Jlc3ModGhpczogR2F1Z2VTZWdtZW50KSB7XG4gICAgcmV0dXJuIGAwICR7MiAqIE1hdGguUEkgKiB0aGlzLmNvbXB1dGVkUmFkaXVzfWA7XG4gIH1cbn1cbiIsIi8qKlxuICogQGNhdGVnb3J5ICAgTW9kZWxcbiAqIEBwYWNrYWdlICAgIGNvbS5raXdpdHkuZ2F1Z2UuZ2F1Z2VcbiAqIEBhdXRob3IgICAgIFNhbHZhZG9yIFN1YmFycm9jYSAoc3ViYXJyb2NhQGdtYWlsLmNvbSlcbioqL1xuXG5cblxuXG4vLyBBTkdVTEFSXG5cblxuXG5cbi8vIEVYVEVSTkFMXG5cblxuXG5cbi8vIE9XTlxuXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBHYXVnZUxhYmVsIHtcbiAgY29sb3I6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgZm9udFNpemU6IHN0cmluZztcblxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHtcbiAgICBjb2xvcj86IHN0cmluZyxcbiAgICB0ZXh0Pzogc3RyaW5nLFxuICAgIHg/OiBudW1iZXIsXG4gICAgeT86IG51bWJlcixcbiAgICBmb250U2l6ZT86IHN0cmluZ1xuICB9ID0ge30pIHtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54IHx8IDA7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55IHx8IDA7XG4gICAgdGhpcy5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemUgfHwgJzFlbSc7XG4gIH1cbn1cbiIsIi8qKlxuICogQGNhdGVnb3J5ICAgQ29tcG9uZW50XG4gKiBAcGFja2FnZSAgICBjb20ua2l3aXR5LmdhdWdlLmdhdWdlXG4gKiBAYXV0aG9yICAgICBTYWx2YWRvciBTdWJhcnJvY2EgKHN1YmFycm9jYUBnbWFpbC5jb20pXG4gKiovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXVnZUxhYmVsIH0gZnJvbSAnLi9zaGFyZWQvZ2F1Z2UtbGFiZWwnO1xuaW1wb3J0IHsgR2F1Z2VTZWdtZW50IH0gZnJvbSAnLi9zaGFyZWQvZ2F1Z2Utc2VnbWVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWdhdWdlJyxcbiAgdGVtcGxhdGU6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiPlxuICA8Z1xuICAgIGNsYXNzPWt3LWhvbGRlclxuICAgIFthdHRyLnRyYW5zZm9ybV09XCJpc0lFMTEgPyAndHJhbnNsYXRlKDEwMCAxMDApIHJvdGF0ZSgtOTApJyA6ICcnXCI+XG4gICAgPGNpcmNsZVxuICAgICAgY2xhc3M9a3ctYmFja1xuICAgICAgW2F0dHIucl09XCJiZ1JhZGl1c1wiXG4gICAgICBbc3R5bGUuZmlsbF09YmdDb2xvci8+XG5cbiAgICAgIDxnXG4gICAgICAgICpuZ0Zvcj1cImxldCBzZWdtZW50IG9mIHNvcnRlZFNlZ21lbnRzXCI+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBjbGFzcz1rdy1taWRcbiAgICAgICAgICBbc3R5bGUuc3Ryb2tlXT1zZWdtZW50LmJnQ29sb3JcbiAgICAgICAgICBbc3R5bGUuc3Ryb2tlV2lkdGhdPXNlZ21lbnQuYm9yZGVyV2lkdGhcbiAgICAgICAgICBbYXR0ci5yXT1zZWdtZW50LmNvbXB1dGVkUmFkaXVzLz5cblxuICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgIGNsYXNzPWt3LWZyb250XG5cbiAgICAgICAgICAgIFtzdHlsZS50cmFuc2l0aW9uXT1cIidzdHJva2UtZGFzaGFycmF5ICcgKyBhbmltYXRpb25TZWNzICsgJ3MnXCJcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VdPXNlZ21lbnQuY29sb3JcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VXaWR0aF09c2VnbWVudC5ib3JkZXJXaWR0aFxuICAgICAgICAgICAgW3N0eWxlLnN0cm9rZURhc2hhcnJheV09XCJzZWdtZW50c0xvYWRlZCA/IHNlZ21lbnQuc3Ryb2tlUHJvZ3Jlc3MgOiBzZWdtZW50LnN0cm9rZUVtcHR5UHJvZ3Jlc3NcIlxuICAgICAgICAgICAgW3N0eWxlLnN0cm9rZUxpbmVjYXBdPVwicm91bmRlZCA/ICdyb3VuZCcgOiAnJ1wiXG4gICAgICAgICAgICBbYXR0ci5yXT1zZWdtZW50LmNvbXB1dGVkUmFkaXVzLz5cbiAgICAgIDwvZz5cbiAgPC9nPlxuXG4gIDxnXG4gICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwMCwgMTAwKVwiPlxuICAgIDx0ZXh0XG4gICAgICBjbGFzcz1rdy1sYWJlbFxuICAgICAgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGxhYmVsc1wiXG4gICAgICBbYXR0ci54XT1sYWJlbC54XG4gICAgICBbYXR0ci55XT1sYWJlbC55XG4gICAgICBbc3R5bGUuZmlsbF09bGFiZWwuY29sb3JcbiAgICAgIFtzdHlsZS5mb250U2l6ZV09bGFiZWwuZm9udFNpemVcbiAgICAgIHRleHQtYW5jaG9yPW1pZGRsZT5cbiAgICAgIHt7bGFiZWwudGV4dH19XG4gICAgPC90ZXh0PlxuICA8L2c+XG48L3N2Zz5cbmAsXG4gIHN0eWxlczogW2Aua3ctZnJvbnQsLmt3LW1pZHtmaWxsOnRyYW5zcGFyZW50fS5rdy1ob2xkZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDEwMHB4LDEwMHB4KSByb3RhdGUoLTkwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDEwMHB4LDEwMHB4KSByb3RhdGUoLTkwZGVnKX1gXVxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGJnUmFkaXVzID0gMTAwO1xuICBASW5wdXQoKSBiZ0NvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvdW5kZWQgPSB0cnVlO1xuICBASW5wdXQoKSByZXZlcnNlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFuaW1hdGlvblNlY3MgPSAwLjU7XG5cbiAgQElucHV0KCkgbGFiZWxzOiBHYXVnZUxhYmVsW107XG5cbiAgQElucHV0KClcbiAgc2V0IHNlZ21lbnRzKHNlZ21lbnRzOiBHYXVnZVNlZ21lbnRbXSkge1xuICAgIHRoaXMuc2VnbWVudHNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNvcnRlZFNlZ21lbnRzID0gdGhpcy5zb3J0U2VnbWVudHMoc2VnbWVudHMpO1xuXG4gICAgLy8gd2FpdCBhIGJpdCBhbmQgc3RhcnQgYW5pbWF0aW9uXG4gICAgc2V0VGltZW91dChcbiAgICAgICgpID0+IHRoaXMuc2VnbWVudHNMb2FkZWQgPSB0cnVlLFxuICAgICAgMCk7XG4gIH1cblxuICBzb3J0ZWRTZWdtZW50czogR2F1Z2VTZWdtZW50W107XG4gIHNlZ21lbnRzTG9hZGVkID0gZmFsc2U7XG5cbiAgaXNJRTExID0gL1RyaWRlbnQuKnJ2WyA6XSoxMVxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzb3J0U2VnbWVudHMoc2VnbWVudHM6IEdhdWdlU2VnbWVudFtdKSB7XG4gICAgcmV0dXJuIHNlZ21lbnRzICYmIHNlZ21lbnRzLnNvcnQoKGE6IEdhdWdlU2VnbWVudCwgYjogR2F1Z2VTZWdtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5yZXZlcnNlKVxuICAgICAgICByZXR1cm4gKGEudmFsdWUgLyBhLmdvYWwgPiBiLnZhbHVlIC8gYi5nb2FsKSA/IDEgOiAtMTtcbiAgICAgIHJldHVybiAoYS52YWx1ZSAvIGEuZ29hbCA+IGIudmFsdWUgLyBiLmdvYWwpID8gLTEgOiAxO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKipcbiAqIEBjYXRlZ29yeSAgIE1vZHVsZVxuICogQHBhY2thZ2UgICAgY29tLmtpd2l0eS5nYXVnZS5nYXVnZVxuICogQGF1dGhvciAgICAgU2FsdmFkb3IgU3ViYXJyb2NhIChzdWJhcnJvY2FAZ21haWwuY29tKVxuICoqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR2F1Z2VDb21wb25lbnQgfSBmcm9tICcuL2dhdWdlLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBib290c3RyYXA6IFtHYXVnZUNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW0dhdWdlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0dhdWdlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7OztBQUFBO0lBU0Usc0JBQVksT0FPTjtRQVBNLHdCQUFBLEVBQUEsWUFPTjtRQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxhQUFhLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQztLQUMvQztJQUlELHNCQUFJLHdDQUFjOzs7O1FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1NBQzNDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFjOzs7OztRQUFsQjtZQUNFLE9BQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLFNBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWdCLENBQUM7U0FDN0c7OztPQUFBO0lBRUQsc0JBQUksNkNBQW1COzs7OztRQUF2QjtZQUNFLE9BQU8sT0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBZ0IsQ0FBQztTQUNqRDs7O09BQUE7dUJBOURIO0lBK0RDOzs7Ozs7Ozs7Ozs7OztBQ3RDRDs7OztBQUFBO0lBUUUsb0JBQVksT0FNTjtRQU5NLHdCQUFBLEVBQUEsWUFNTjtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7S0FDM0M7cUJBN0NIO0lBOENDOzs7Ozs7O0lDdUNDO3dCQXpCb0IsR0FBRzt1QkFFSixJQUFJO3VCQUNKLEtBQUs7NkJBQ0MsR0FBRzs4QkFnQlgsS0FBSztzQkFFYixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztLQUd4QztJQWpCakIsc0JBQ0ksb0NBQVE7Ozs7O1FBRFosVUFDYSxRQUF3QjtZQURyQyxpQkFTQztZQVBDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFHbEQsVUFBVSxDQUNSLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksR0FBQSxFQUNoQyxDQUFDLENBQUMsQ0FBQztTQUNOOzs7T0FBQTs7OztJQVVELGlDQUFROzs7SUFBUjtLQUNDOzs7OztJQUVELHFDQUFZOzs7O0lBQVosVUFBYSxRQUF3QjtRQUFyQyxpQkFNQztRQUxDLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFlLEVBQUUsQ0FBZTtZQUNoRSxJQUFJLEtBQUksQ0FBQyxPQUFPO2dCQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkQsQ0FBQyxDQUFDO0tBQ0o7O2dCQXJGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxpdUNBMkNYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHdKQUF3SixDQUFDO2lCQUNuSzs7Ozs7MkJBRUUsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUVMLEtBQUs7MkJBRUwsS0FBSzs7eUJBcEVSOzs7Ozs7Ozs7OztnQkNZQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUMzQixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDMUI7O3NCQW5CRDs7Ozs7Ozs7Ozs7Ozs7OyJ9