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
var GaugeChartComponent = /** @class */ (function () {
    function GaugeChartComponent() {
        this.bgRadius = 100;
        this.rounded = true;
        this.reverse = false;
        this.animationSecs = 0.5;
        this.segmentsLoaded = false;
        this.isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    Object.defineProperty(GaugeChartComponent.prototype, "segments", {
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
    GaugeChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} segments
     * @return {?}
     */
    GaugeChartComponent.prototype.sortSegments = /**
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
    GaugeChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-gauge-chart',
                    template: "<svg viewBox=\"0 0 200 200\">\n  <g\n    class=kw-holder\n    [attr.transform]=\"isIE11 ? 'translate(100 100) rotate(-90)' : ''\">\n    <circle\n      class=kw-back\n      [attr.r]=\"bgRadius\"\n      [style.fill]=bgColor/>\n\n      <g\n        *ngFor=\"let segment of sortedSegments\">\n        <circle\n          class=kw-mid\n          [style.stroke]=segment.bgColor\n          [style.strokeWidth]=segment.borderWidth\n          [attr.r]=segment.computedRadius/>\n\n          <circle\n            class=kw-front\n\n            [style.transition]=\"'stroke-dasharray ' + animationSecs + 's'\"\n            [style.stroke]=segment.color\n            [style.strokeWidth]=segment.borderWidth\n            [style.strokeDasharray]=\"segmentsLoaded ? segment.strokeProgress : segment.strokeEmptyProgress\"\n            [style.strokeLinecap]=\"rounded ? 'round' : ''\"\n            [attr.r]=segment.computedRadius/>\n      </g>\n  </g>\n\n  <g\n    transform=\"translate(100, 100)\">\n    <text\n      class=kw-label\n      *ngFor=\"let label of labels\"\n      [attr.x]=label.x\n      [attr.y]=label.y\n      [style.fill]=label.color\n      [style.fontSize]=label.fontSize\n      text-anchor=middle>\n      {{label.text}}\n    </text>\n  </g>\n</svg>\n",
                    styles: [".kw-front,.kw-mid{fill:transparent}.kw-holder{-webkit-transform:translate(100px,100px) rotate(-90deg);transform:translate(100px,100px) rotate(-90deg)}"]
                },] },
    ];
    /** @nocollapse */
    GaugeChartComponent.ctorParameters = function () { return []; };
    GaugeChartComponent.propDecorators = {
        bgRadius: [{ type: Input }],
        bgColor: [{ type: Input }],
        rounded: [{ type: Input }],
        reverse: [{ type: Input }],
        animationSecs: [{ type: Input }],
        labels: [{ type: Input }],
        segments: [{ type: Input }]
    };
    return GaugeChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GaugeChartModule = /** @class */ (function () {
    function GaugeChartModule() {
    }
    GaugeChartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [GaugeChartComponent],
                    exports: [GaugeChartComponent]
                },] },
    ];
    return GaugeChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { GaugeSegment, GaugeLabel, GaugeChartComponent, GaugeChartModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2dhdWdlLWNoYXJ0L2xpYi9zaGFyZWQvZ2F1Z2Utc2VnbWVudC50cyIsIm5nOi8vZ2F1Z2UtY2hhcnQvbGliL3NoYXJlZC9nYXVnZS1sYWJlbC50cyIsIm5nOi8vZ2F1Z2UtY2hhcnQvbGliL2dhdWdlLWNoYXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vZ2F1Z2UtY2hhcnQvbGliL2dhdWdlLWNoYXJ0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjYXRlZ29yeSAgIE1vZGVsXG4gKiBAcGFja2FnZSAgICBjb20ua2l3aXR5LmdhdWdlLmdhdWdlXG4gKiBAYXV0aG9yICAgICBTYWx2YWRvciBTdWJhcnJvY2EgKHN1YmFycm9jYUBnbWFpbC5jb20pXG4qKi9cblxuXG5cblxuLy8gQU5HVUxBUlxuXG5cblxuXG4vLyBFWFRFUk5BTFxuXG5cblxuXG4vLyBPV05cblxuXG5cblxuXG5leHBvcnQgY2xhc3MgR2F1Z2VTZWdtZW50IHtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGdvYWw6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgYmdDb2xvcjogc3RyaW5nO1xuICBib3JkZXJXaWR0aDogbnVtYmVyO1xuXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczoge1xuICAgIHJhZGl1cz86IG51bWJlcixcbiAgICBnb2FsPzogbnVtYmVyLFxuICAgIHZhbHVlPzogbnVtYmVyLFxuICAgIGNvbG9yPzogc3RyaW5nLFxuICAgIGJnQ29sb3I/OiBzdHJpbmcsXG4gICAgYm9yZGVyV2lkdGg/OiBudW1iZXJcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCAxMDA7XG4gICAgdGhpcy5nb2FsID0gb3B0aW9ucy5nb2FsIHx8IDEwMDtcbiAgICB0aGlzLnZhbHVlID0gb3B0aW9ucy52YWx1ZTtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmJnQ29sb3IgPSBvcHRpb25zLmJnQ29sb3IgfHwgJ3RyYW5zcGFyZW50JztcbiAgICB0aGlzLmJvcmRlcldpZHRoID0gb3B0aW9ucy5ib3JkZXJXaWR0aCB8fCAxMDA7XG4gIH1cblxuXG5cbiAgZ2V0IGNvbXB1dGVkUmFkaXVzKCkge1xuICAgIHJldHVybiB0aGlzLnJhZGl1cyAtIHRoaXMuYm9yZGVyV2lkdGggLyAyO1xuICB9XG5cbiAgZ2V0IHN0cm9rZVByb2dyZXNzKHRoaXM6IEdhdWdlU2VnbWVudCkge1xuICAgIHJldHVybiBgJHsyICogTWF0aC5QSSAqIHRoaXMuY29tcHV0ZWRSYWRpdXMgKiB0aGlzLnZhbHVlIC8gdGhpcy5nb2FsfSAkezIgKiBNYXRoLlBJICogdGhpcy5jb21wdXRlZFJhZGl1c31gO1xuICB9XG5cbiAgZ2V0IHN0cm9rZUVtcHR5UHJvZ3Jlc3ModGhpczogR2F1Z2VTZWdtZW50KSB7XG4gICAgcmV0dXJuIGAwICR7MiAqIE1hdGguUEkgKiB0aGlzLmNvbXB1dGVkUmFkaXVzfWA7XG4gIH1cbn1cbiIsIi8qKlxuICogQGNhdGVnb3J5ICAgTW9kZWxcbiAqIEBwYWNrYWdlICAgIGNvbS5raXdpdHkuZ2F1Z2UuZ2F1Z2VcbiAqIEBhdXRob3IgICAgIFNhbHZhZG9yIFN1YmFycm9jYSAoc3ViYXJyb2NhQGdtYWlsLmNvbSlcbioqL1xuXG5cblxuXG4vLyBBTkdVTEFSXG5cblxuXG5cbi8vIEVYVEVSTkFMXG5cblxuXG5cbi8vIE9XTlxuXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBHYXVnZUxhYmVsIHtcbiAgY29sb3I6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgZm9udFNpemU6IHN0cmluZztcblxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHtcbiAgICBjb2xvcj86IHN0cmluZyxcbiAgICB0ZXh0Pzogc3RyaW5nLFxuICAgIHg/OiBudW1iZXIsXG4gICAgeT86IG51bWJlcixcbiAgICBmb250U2l6ZT86IHN0cmluZ1xuICB9ID0ge30pIHtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54IHx8IDA7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55IHx8IDA7XG4gICAgdGhpcy5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemUgfHwgJzFlbSc7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXVnZUxhYmVsIH0gZnJvbSAnLi9zaGFyZWQvZ2F1Z2UtbGFiZWwnO1xuaW1wb3J0IHsgR2F1Z2VTZWdtZW50IH0gZnJvbSAnLi9zaGFyZWQvZ2F1Z2Utc2VnbWVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWdhdWdlLWNoYXJ0JyxcbiAgdGVtcGxhdGU6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiPlxuICA8Z1xuICAgIGNsYXNzPWt3LWhvbGRlclxuICAgIFthdHRyLnRyYW5zZm9ybV09XCJpc0lFMTEgPyAndHJhbnNsYXRlKDEwMCAxMDApIHJvdGF0ZSgtOTApJyA6ICcnXCI+XG4gICAgPGNpcmNsZVxuICAgICAgY2xhc3M9a3ctYmFja1xuICAgICAgW2F0dHIucl09XCJiZ1JhZGl1c1wiXG4gICAgICBbc3R5bGUuZmlsbF09YmdDb2xvci8+XG5cbiAgICAgIDxnXG4gICAgICAgICpuZ0Zvcj1cImxldCBzZWdtZW50IG9mIHNvcnRlZFNlZ21lbnRzXCI+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBjbGFzcz1rdy1taWRcbiAgICAgICAgICBbc3R5bGUuc3Ryb2tlXT1zZWdtZW50LmJnQ29sb3JcbiAgICAgICAgICBbc3R5bGUuc3Ryb2tlV2lkdGhdPXNlZ21lbnQuYm9yZGVyV2lkdGhcbiAgICAgICAgICBbYXR0ci5yXT1zZWdtZW50LmNvbXB1dGVkUmFkaXVzLz5cblxuICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgIGNsYXNzPWt3LWZyb250XG5cbiAgICAgICAgICAgIFtzdHlsZS50cmFuc2l0aW9uXT1cIidzdHJva2UtZGFzaGFycmF5ICcgKyBhbmltYXRpb25TZWNzICsgJ3MnXCJcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VdPXNlZ21lbnQuY29sb3JcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VXaWR0aF09c2VnbWVudC5ib3JkZXJXaWR0aFxuICAgICAgICAgICAgW3N0eWxlLnN0cm9rZURhc2hhcnJheV09XCJzZWdtZW50c0xvYWRlZCA/IHNlZ21lbnQuc3Ryb2tlUHJvZ3Jlc3MgOiBzZWdtZW50LnN0cm9rZUVtcHR5UHJvZ3Jlc3NcIlxuICAgICAgICAgICAgW3N0eWxlLnN0cm9rZUxpbmVjYXBdPVwicm91bmRlZCA/ICdyb3VuZCcgOiAnJ1wiXG4gICAgICAgICAgICBbYXR0ci5yXT1zZWdtZW50LmNvbXB1dGVkUmFkaXVzLz5cbiAgICAgIDwvZz5cbiAgPC9nPlxuXG4gIDxnXG4gICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwMCwgMTAwKVwiPlxuICAgIDx0ZXh0XG4gICAgICBjbGFzcz1rdy1sYWJlbFxuICAgICAgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGxhYmVsc1wiXG4gICAgICBbYXR0ci54XT1sYWJlbC54XG4gICAgICBbYXR0ci55XT1sYWJlbC55XG4gICAgICBbc3R5bGUuZmlsbF09bGFiZWwuY29sb3JcbiAgICAgIFtzdHlsZS5mb250U2l6ZV09bGFiZWwuZm9udFNpemVcbiAgICAgIHRleHQtYW5jaG9yPW1pZGRsZT5cbiAgICAgIHt7bGFiZWwudGV4dH19XG4gICAgPC90ZXh0PlxuICA8L2c+XG48L3N2Zz5cbmAsXG4gIHN0eWxlczogW2Aua3ctZnJvbnQsLmt3LW1pZHtmaWxsOnRyYW5zcGFyZW50fS5rdy1ob2xkZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDEwMHB4LDEwMHB4KSByb3RhdGUoLTkwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDEwMHB4LDEwMHB4KSByb3RhdGUoLTkwZGVnKX1gXVxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYmdSYWRpdXMgPSAxMDA7XG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgcm91bmRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIHJldmVyc2UgPSBmYWxzZTtcbiAgQElucHV0KCkgYW5pbWF0aW9uU2VjcyA9IDAuNTtcblxuICBASW5wdXQoKSBsYWJlbHM6IEdhdWdlTGFiZWxbXTtcblxuICBASW5wdXQoKVxuICBzZXQgc2VnbWVudHMoc2VnbWVudHM6IEdhdWdlU2VnbWVudFtdKSB7XG4gICAgdGhpcy5zZWdtZW50c0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc29ydGVkU2VnbWVudHMgPSB0aGlzLnNvcnRTZWdtZW50cyhzZWdtZW50cyk7XG5cbiAgICAvLyB3YWl0IGEgYml0IGFuZCBzdGFydCBhbmltYXRpb25cbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4gdGhpcy5zZWdtZW50c0xvYWRlZCA9IHRydWUsXG4gICAgICAwKTtcbiAgfVxuXG4gIHNvcnRlZFNlZ21lbnRzOiBHYXVnZVNlZ21lbnRbXTtcbiAgc2VnbWVudHNMb2FkZWQgPSBmYWxzZTtcblxuICBpc0lFMTEgPSAvVHJpZGVudC4qcnZbIDpdKjExXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNvcnRTZWdtZW50cyhzZWdtZW50czogR2F1Z2VTZWdtZW50W10pIHtcbiAgICByZXR1cm4gc2VnbWVudHMgJiYgc2VnbWVudHMuc29ydCgoYTogR2F1Z2VTZWdtZW50LCBiOiBHYXVnZVNlZ21lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnJldmVyc2UpXG4gICAgICAgIHJldHVybiAoYS52YWx1ZSAvIGEuZ29hbCA+IGIudmFsdWUgLyBiLmdvYWwpID8gMSA6IC0xO1xuICAgICAgcmV0dXJuIChhLnZhbHVlIC8gYS5nb2FsID4gYi52YWx1ZSAvIGIuZ29hbCkgPyAtMSA6IDE7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR2F1Z2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4vZ2F1Z2UtY2hhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtHYXVnZUNoYXJ0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0dhdWdlQ2hhcnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEdhdWdlQ2hhcnRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7O0FBQUE7SUFTRSxzQkFBWSxPQU9OO1FBUE0sd0JBQUEsRUFBQSxZQU9OO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLGFBQWEsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO0tBQy9DO0lBSUQsc0JBQUksd0NBQWM7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