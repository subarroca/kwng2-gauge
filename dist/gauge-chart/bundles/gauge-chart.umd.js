(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('gauge-chart', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['gauge-chart'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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
    GaugeSegment = (function () {
        function GaugeSegment(options) {
            if (options === void 0) {
                options = {};
            }
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
             */ function () {
                return this.radius - this.borderWidth / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeSegment.prototype, "strokeProgress", {
            get: /**
             * @this {?}
             * @return {?}
             */ function () {
                return 2 * Math.PI * this.computedRadius * this.value / this.goal + " " + 2 * Math.PI * this.computedRadius;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GaugeSegment.prototype, "strokeEmptyProgress", {
            get: /**
             * @this {?}
             * @return {?}
             */ function () {
                return "0 " + 2 * Math.PI * this.computedRadius;
            },
            enumerable: true,
            configurable: true
        });
        return GaugeSegment;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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
    GaugeLabel = (function () {
        function GaugeLabel(options) {
            if (options === void 0) {
                options = {};
            }
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
     * @suppress {checkTypes} checked by tsc
     */
    var GaugeChartComponent = (function () {
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
             */ function (segments) {
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
            { type: core.Component, args: [{
                        selector: 'ng-gauge-chart',
                        template: "<svg viewBox=\"0 0 200 200\">\n  <g\n    class=kw-holder\n    [attr.transform]=\"isIE11 ? 'translate(100 100) rotate(-90)' : ''\">\n    <circle\n      class=kw-back\n      [attr.r]=\"bgRadius\"\n      [style.fill]=bgColor/>\n\n      <g\n        *ngFor=\"let segment of sortedSegments\">\n        <circle\n          class=kw-mid\n          [style.stroke]=segment.bgColor\n          [style.strokeWidth]=segment.borderWidth\n          [attr.r]=segment.computedRadius/>\n\n          <circle\n            class=kw-front\n\n            [style.transition]=\"'stroke-dasharray ' + animationSecs + 's'\"\n            [style.stroke]=segment.color\n            [style.strokeWidth]=segment.borderWidth\n            [style.strokeDasharray]=\"segmentsLoaded ? segment.strokeProgress : segment.strokeEmptyProgress\"\n            [style.strokeLinecap]=\"rounded ? 'round' : ''\"\n            [attr.r]=segment.computedRadius/>\n      </g>\n  </g>\n\n  <g\n    transform=\"translate(100, 100)\">\n    <text\n      class=kw-label\n      *ngFor=\"let label of labels\"\n      [attr.x]=label.x\n      [attr.y]=label.y\n      [style.fill]=label.color\n      [style.fontSize]=label.fontSize\n      text-anchor=middle>\n      {{label.text}}\n    </text>\n  </g>\n</svg>\n",
                        styles: [".kw-front,.kw-mid{fill:transparent}.kw-holder{-webkit-transform:translate(100px,100px) rotate(-90deg);transform:translate(100px,100px) rotate(-90deg)}"]
                    },] },
        ];
        /** @nocollapse */
        GaugeChartComponent.ctorParameters = function () { return []; };
        GaugeChartComponent.propDecorators = {
            bgRadius: [{ type: core.Input }],
            bgColor: [{ type: core.Input }],
            rounded: [{ type: core.Input }],
            reverse: [{ type: core.Input }],
            animationSecs: [{ type: core.Input }],
            labels: [{ type: core.Input }],
            segments: [{ type: core.Input }]
        };
        return GaugeChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GaugeChartModule = (function () {
        function GaugeChartModule() {
        }
        GaugeChartModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [GaugeChartComponent],
                        exports: [GaugeChartComponent]
                    },] },
        ];
        return GaugeChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.GaugeSegment = GaugeSegment;
    exports.GaugeLabel = GaugeLabel;
    exports.GaugeChartComponent = GaugeChartComponent;
    exports.GaugeChartModule = GaugeChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9nYXVnZS1jaGFydC9saWIvc2hhcmVkL2dhdWdlLXNlZ21lbnQudHMiLCJuZzovL2dhdWdlLWNoYXJ0L2xpYi9zaGFyZWQvZ2F1Z2UtbGFiZWwudHMiLCJuZzovL2dhdWdlLWNoYXJ0L2xpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiLCJuZzovL2dhdWdlLWNoYXJ0L2xpYi9nYXVnZS1jaGFydC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY2F0ZWdvcnkgICBNb2RlbFxuICogQHBhY2thZ2UgICAgY29tLmtpd2l0eS5nYXVnZS5nYXVnZVxuICogQGF1dGhvciAgICAgU2FsdmFkb3IgU3ViYXJyb2NhIChzdWJhcnJvY2FAZ21haWwuY29tKVxuKiovXG5cblxuXG5cbi8vIEFOR1VMQVJcblxuXG5cblxuLy8gRVhURVJOQUxcblxuXG5cblxuLy8gT1dOXG5cblxuXG5cblxuZXhwb3J0IGNsYXNzIEdhdWdlU2VnbWVudCB7XG4gIHJhZGl1czogbnVtYmVyO1xuICBnb2FsOiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGJnQ29sb3I6IHN0cmluZztcbiAgYm9yZGVyV2lkdGg6IG51bWJlcjtcblxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHtcbiAgICByYWRpdXM/OiBudW1iZXIsXG4gICAgZ29hbD86IG51bWJlcixcbiAgICB2YWx1ZT86IG51bWJlcixcbiAgICBjb2xvcj86IHN0cmluZyxcbiAgICBiZ0NvbG9yPzogc3RyaW5nLFxuICAgIGJvcmRlcldpZHRoPzogbnVtYmVyXG4gIH0gPSB7fSkge1xuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgMTAwO1xuICAgIHRoaXMuZ29hbCA9IG9wdGlvbnMuZ29hbCB8fCAxMDA7XG4gICAgdGhpcy52YWx1ZSA9IG9wdGlvbnMudmFsdWU7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5iZ0NvbG9yID0gb3B0aW9ucy5iZ0NvbG9yIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy5ib3JkZXJXaWR0aCA9IG9wdGlvbnMuYm9yZGVyV2lkdGggfHwgMTAwO1xuICB9XG5cblxuXG4gIGdldCBjb21wdXRlZFJhZGl1cygpIHtcbiAgICByZXR1cm4gdGhpcy5yYWRpdXMgLSB0aGlzLmJvcmRlcldpZHRoIC8gMjtcbiAgfVxuXG4gIGdldCBzdHJva2VQcm9ncmVzcyh0aGlzOiBHYXVnZVNlZ21lbnQpIHtcbiAgICByZXR1cm4gYCR7MiAqIE1hdGguUEkgKiB0aGlzLmNvbXB1dGVkUmFkaXVzICogdGhpcy52YWx1ZSAvIHRoaXMuZ29hbH0gJHsyICogTWF0aC5QSSAqIHRoaXMuY29tcHV0ZWRSYWRpdXN9YDtcbiAgfVxuXG4gIGdldCBzdHJva2VFbXB0eVByb2dyZXNzKHRoaXM6IEdhdWdlU2VnbWVudCkge1xuICAgIHJldHVybiBgMCAkezIgKiBNYXRoLlBJICogdGhpcy5jb21wdXRlZFJhZGl1c31gO1xuICB9XG59XG4iLCIvKipcbiAqIEBjYXRlZ29yeSAgIE1vZGVsXG4gKiBAcGFja2FnZSAgICBjb20ua2l3aXR5LmdhdWdlLmdhdWdlXG4gKiBAYXV0aG9yICAgICBTYWx2YWRvciBTdWJhcnJvY2EgKHN1YmFycm9jYUBnbWFpbC5jb20pXG4qKi9cblxuXG5cblxuLy8gQU5HVUxBUlxuXG5cblxuXG4vLyBFWFRFUk5BTFxuXG5cblxuXG4vLyBPV05cblxuXG5cblxuXG5leHBvcnQgY2xhc3MgR2F1Z2VMYWJlbCB7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGZvbnRTaXplOiBzdHJpbmc7XG5cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiB7XG4gICAgY29sb3I/OiBzdHJpbmcsXG4gICAgdGV4dD86IHN0cmluZyxcbiAgICB4PzogbnVtYmVyLFxuICAgIHk/OiBudW1iZXIsXG4gICAgZm9udFNpemU/OiBzdHJpbmdcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgIHRoaXMueCA9IG9wdGlvbnMueCB8fCAwO1xuICAgIHRoaXMueSA9IG9wdGlvbnMueSB8fCAwO1xuICAgIHRoaXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplIHx8ICcxZW0nO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F1Z2VMYWJlbCB9IGZyb20gJy4vc2hhcmVkL2dhdWdlLWxhYmVsJztcbmltcG9ydCB7IEdhdWdlU2VnbWVudCB9IGZyb20gJy4vc2hhcmVkL2dhdWdlLXNlZ21lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1nYXVnZS1jaGFydCcsXG4gIHRlbXBsYXRlOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIj5cbiAgPGdcbiAgICBjbGFzcz1rdy1ob2xkZXJcbiAgICBbYXR0ci50cmFuc2Zvcm1dPVwiaXNJRTExID8gJ3RyYW5zbGF0ZSgxMDAgMTAwKSByb3RhdGUoLTkwKScgOiAnJ1wiPlxuICAgIDxjaXJjbGVcbiAgICAgIGNsYXNzPWt3LWJhY2tcbiAgICAgIFthdHRyLnJdPVwiYmdSYWRpdXNcIlxuICAgICAgW3N0eWxlLmZpbGxdPWJnQ29sb3IvPlxuXG4gICAgICA8Z1xuICAgICAgICAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBzb3J0ZWRTZWdtZW50c1wiPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY2xhc3M9a3ctbWlkXG4gICAgICAgICAgW3N0eWxlLnN0cm9rZV09c2VnbWVudC5iZ0NvbG9yXG4gICAgICAgICAgW3N0eWxlLnN0cm9rZVdpZHRoXT1zZWdtZW50LmJvcmRlcldpZHRoXG4gICAgICAgICAgW2F0dHIucl09c2VnbWVudC5jb21wdXRlZFJhZGl1cy8+XG5cbiAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICBjbGFzcz1rdy1mcm9udFxuXG4gICAgICAgICAgICBbc3R5bGUudHJhbnNpdGlvbl09XCInc3Ryb2tlLWRhc2hhcnJheSAnICsgYW5pbWF0aW9uU2VjcyArICdzJ1wiXG4gICAgICAgICAgICBbc3R5bGUuc3Ryb2tlXT1zZWdtZW50LmNvbG9yXG4gICAgICAgICAgICBbc3R5bGUuc3Ryb2tlV2lkdGhdPXNlZ21lbnQuYm9yZGVyV2lkdGhcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VEYXNoYXJyYXldPVwic2VnbWVudHNMb2FkZWQgPyBzZWdtZW50LnN0cm9rZVByb2dyZXNzIDogc2VnbWVudC5zdHJva2VFbXB0eVByb2dyZXNzXCJcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VMaW5lY2FwXT1cInJvdW5kZWQgPyAncm91bmQnIDogJydcIlxuICAgICAgICAgICAgW2F0dHIucl09c2VnbWVudC5jb21wdXRlZFJhZGl1cy8+XG4gICAgICA8L2c+XG4gIDwvZz5cblxuICA8Z1xuICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDAsIDEwMClcIj5cbiAgICA8dGV4dFxuICAgICAgY2xhc3M9a3ctbGFiZWxcbiAgICAgICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBsYWJlbHNcIlxuICAgICAgW2F0dHIueF09bGFiZWwueFxuICAgICAgW2F0dHIueV09bGFiZWwueVxuICAgICAgW3N0eWxlLmZpbGxdPWxhYmVsLmNvbG9yXG4gICAgICBbc3R5bGUuZm9udFNpemVdPWxhYmVsLmZvbnRTaXplXG4gICAgICB0ZXh0LWFuY2hvcj1taWRkbGU+XG4gICAgICB7e2xhYmVsLnRleHR9fVxuICAgIDwvdGV4dD5cbiAgPC9nPlxuPC9zdmc+XG5gLFxuICBzdHlsZXM6IFtgLmt3LWZyb250LC5rdy1taWR7ZmlsbDp0cmFuc3BhcmVudH0ua3ctaG9sZGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgxMDBweCwxMDBweCkgcm90YXRlKC05MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxMDBweCwxMDBweCkgcm90YXRlKC05MGRlZyl9YF1cbn0pXG5leHBvcnQgY2xhc3MgR2F1Z2VDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGJnUmFkaXVzID0gMTAwO1xuICBASW5wdXQoKSBiZ0NvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvdW5kZWQgPSB0cnVlO1xuICBASW5wdXQoKSByZXZlcnNlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFuaW1hdGlvblNlY3MgPSAwLjU7XG5cbiAgQElucHV0KCkgbGFiZWxzOiBHYXVnZUxhYmVsW107XG5cbiAgQElucHV0KClcbiAgc2V0IHNlZ21lbnRzKHNlZ21lbnRzOiBHYXVnZVNlZ21lbnRbXSkge1xuICAgIHRoaXMuc2VnbWVudHNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNvcnRlZFNlZ21lbnRzID0gdGhpcy5zb3J0U2VnbWVudHMoc2VnbWVudHMpO1xuXG4gICAgLy8gd2FpdCBhIGJpdCBhbmQgc3RhcnQgYW5pbWF0aW9uXG4gICAgc2V0VGltZW91dChcbiAgICAgICgpID0+IHRoaXMuc2VnbWVudHNMb2FkZWQgPSB0cnVlLFxuICAgICAgMCk7XG4gIH1cblxuICBzb3J0ZWRTZWdtZW50czogR2F1Z2VTZWdtZW50W107XG4gIHNlZ21lbnRzTG9hZGVkID0gZmFsc2U7XG5cbiAgaXNJRTExID0gL1RyaWRlbnQuKnJ2WyA6XSoxMVxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzb3J0U2VnbWVudHMoc2VnbWVudHM6IEdhdWdlU2VnbWVudFtdKSB7XG4gICAgcmV0dXJuIHNlZ21lbnRzICYmIHNlZ21lbnRzLnNvcnQoKGE6IEdhdWdlU2VnbWVudCwgYjogR2F1Z2VTZWdtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5yZXZlcnNlKVxuICAgICAgICByZXR1cm4gKGEudmFsdWUgLyBhLmdvYWwgPiBiLnZhbHVlIC8gYi5nb2FsKSA/IDEgOiAtMTtcbiAgICAgIHJldHVybiAoYS52YWx1ZSAvIGEuZ29hbCA+IGIudmFsdWUgLyBiLmdvYWwpID8gLTEgOiAxO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEdhdWdlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2dhdWdlLWNoYXJ0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbR2F1Z2VDaGFydENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtHYXVnZUNoYXJ0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZUNoYXJ0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7OztJQUFBO1FBU0Usc0JBQVksT0FPTjtZQVBNLHdCQUFBO2dCQUFBLFlBT047O1lBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLGFBQWEsQ0FBQztZQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFH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