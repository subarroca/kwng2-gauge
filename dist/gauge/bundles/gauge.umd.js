(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('gauge', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.gauge = {}),global.ng.core,global.ng.common));
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
    var GaugeComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'ng-gauge',
                        template: "<svg viewBox=\"0 0 200 200\">\n  <g\n    class=kw-holder\n    [attr.transform]=\"isIE11 ? 'translate(100 100) rotate(-90)' : ''\">\n    <circle\n      class=kw-back\n      [attr.r]=\"bgRadius\"\n      [style.fill]=bgColor/>\n\n      <g\n        *ngFor=\"let segment of sortedSegments\">\n        <circle\n          class=kw-mid\n          [style.stroke]=segment.bgColor\n          [style.strokeWidth]=segment.borderWidth\n          [attr.r]=segment.computedRadius/>\n\n          <circle\n            class=kw-front\n\n            [style.transition]=\"'stroke-dasharray ' + animationSecs + 's'\"\n            [style.stroke]=segment.color\n            [style.strokeWidth]=segment.borderWidth\n            [style.strokeDasharray]=\"segmentsLoaded ? segment.strokeProgress : segment.strokeEmptyProgress\"\n            [style.strokeLinecap]=\"rounded ? 'round' : ''\"\n            [attr.r]=segment.computedRadius/>\n      </g>\n  </g>\n\n  <g\n    transform=\"translate(100, 100)\">\n    <text\n      class=kw-label\n      *ngFor=\"let label of labels\"\n      [attr.x]=label.x\n      [attr.y]=label.y\n      [style.fill]=label.color\n      [style.fontSize]=label.fontSize\n      text-anchor=middle>\n      {{label.text}}\n    </text>\n  </g>\n</svg>\n",
                        styles: [".kw-front,.kw-mid{fill:transparent}.kw-holder{-webkit-transform:translate(100px,100px) rotate(-90deg);transform:translate(100px,100px) rotate(-90deg)}"]
                    },] },
        ];
        /** @nocollapse */
        GaugeComponent.ctorParameters = function () { return []; };
        GaugeComponent.propDecorators = {
            bgRadius: [{ type: core.Input }],
            bgColor: [{ type: core.Input }],
            rounded: [{ type: core.Input }],
            reverse: [{ type: core.Input }],
            animationSecs: [{ type: core.Input }],
            labels: [{ type: core.Input }],
            segments: [{ type: core.Input }]
        };
        return GaugeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GaugeModule = (function () {
        function GaugeModule() {
        }
        GaugeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.GaugeSegment = GaugeSegment;
    exports.GaugeLabel = GaugeLabel;
    exports.GaugeComponent = GaugeComponent;
    exports.GaugeModule = GaugeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9nYXVnZS9saWIvc2hhcmVkL2dhdWdlLXNlZ21lbnQudHMiLCJuZzovL2dhdWdlL2xpYi9zaGFyZWQvZ2F1Z2UtbGFiZWwudHMiLCJuZzovL2dhdWdlL2xpYi9nYXVnZS5jb21wb25lbnQudHMiLCJuZzovL2dhdWdlL2xpYi9nYXVnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY2F0ZWdvcnkgICBNb2RlbFxuICogQHBhY2thZ2UgICAgY29tLmtpd2l0eS5nYXVnZS5nYXVnZVxuICogQGF1dGhvciAgICAgU2FsdmFkb3IgU3ViYXJyb2NhIChzdWJhcnJvY2FAZ21haWwuY29tKVxuKiovXG5cblxuXG5cbi8vIEFOR1VMQVJcblxuXG5cblxuLy8gRVhURVJOQUxcblxuXG5cblxuLy8gT1dOXG5cblxuXG5cblxuZXhwb3J0IGNsYXNzIEdhdWdlU2VnbWVudCB7XG4gIHJhZGl1czogbnVtYmVyO1xuICBnb2FsOiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGJnQ29sb3I6IHN0cmluZztcbiAgYm9yZGVyV2lkdGg6IG51bWJlcjtcblxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHtcbiAgICByYWRpdXM/OiBudW1iZXIsXG4gICAgZ29hbD86IG51bWJlcixcbiAgICB2YWx1ZT86IG51bWJlcixcbiAgICBjb2xvcj86IHN0cmluZyxcbiAgICBiZ0NvbG9yPzogc3RyaW5nLFxuICAgIGJvcmRlcldpZHRoPzogbnVtYmVyXG4gIH0gPSB7fSkge1xuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgMTAwO1xuICAgIHRoaXMuZ29hbCA9IG9wdGlvbnMuZ29hbCB8fCAxMDA7XG4gICAgdGhpcy52YWx1ZSA9IG9wdGlvbnMudmFsdWU7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5iZ0NvbG9yID0gb3B0aW9ucy5iZ0NvbG9yIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy5ib3JkZXJXaWR0aCA9IG9wdGlvbnMuYm9yZGVyV2lkdGggfHwgMTAwO1xuICB9XG5cblxuXG4gIGdldCBjb21wdXRlZFJhZGl1cygpIHtcbiAgICByZXR1cm4gdGhpcy5yYWRpdXMgLSB0aGlzLmJvcmRlcldpZHRoIC8gMjtcbiAgfVxuXG4gIGdldCBzdHJva2VQcm9ncmVzcyh0aGlzOiBHYXVnZVNlZ21lbnQpIHtcbiAgICByZXR1cm4gYCR7MiAqIE1hdGguUEkgKiB0aGlzLmNvbXB1dGVkUmFkaXVzICogdGhpcy52YWx1ZSAvIHRoaXMuZ29hbH0gJHsyICogTWF0aC5QSSAqIHRoaXMuY29tcHV0ZWRSYWRpdXN9YDtcbiAgfVxuXG4gIGdldCBzdHJva2VFbXB0eVByb2dyZXNzKHRoaXM6IEdhdWdlU2VnbWVudCkge1xuICAgIHJldHVybiBgMCAkezIgKiBNYXRoLlBJICogdGhpcy5jb21wdXRlZFJhZGl1c31gO1xuICB9XG59XG4iLCIvKipcbiAqIEBjYXRlZ29yeSAgIE1vZGVsXG4gKiBAcGFja2FnZSAgICBjb20ua2l3aXR5LmdhdWdlLmdhdWdlXG4gKiBAYXV0aG9yICAgICBTYWx2YWRvciBTdWJhcnJvY2EgKHN1YmFycm9jYUBnbWFpbC5jb20pXG4qKi9cblxuXG5cblxuLy8gQU5HVUxBUlxuXG5cblxuXG4vLyBFWFRFUk5BTFxuXG5cblxuXG4vLyBPV05cblxuXG5cblxuXG5leHBvcnQgY2xhc3MgR2F1Z2VMYWJlbCB7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGZvbnRTaXplOiBzdHJpbmc7XG5cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiB7XG4gICAgY29sb3I/OiBzdHJpbmcsXG4gICAgdGV4dD86IHN0cmluZyxcbiAgICB4PzogbnVtYmVyLFxuICAgIHk/OiBudW1iZXIsXG4gICAgZm9udFNpemU/OiBzdHJpbmdcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgIHRoaXMueCA9IG9wdGlvbnMueCB8fCAwO1xuICAgIHRoaXMueSA9IG9wdGlvbnMueSB8fCAwO1xuICAgIHRoaXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplIHx8ICcxZW0nO1xuICB9XG59XG4iLCIvKipcbiAqIEBjYXRlZ29yeSAgIENvbXBvbmVudFxuICogQHBhY2thZ2UgICAgY29tLmtpd2l0eS5nYXVnZS5nYXVnZVxuICogQGF1dGhvciAgICAgU2FsdmFkb3IgU3ViYXJyb2NhIChzdWJhcnJvY2FAZ21haWwuY29tKVxuICoqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F1Z2VMYWJlbCB9IGZyb20gJy4vc2hhcmVkL2dhdWdlLWxhYmVsJztcbmltcG9ydCB7IEdhdWdlU2VnbWVudCB9IGZyb20gJy4vc2hhcmVkL2dhdWdlLXNlZ21lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1nYXVnZScsXG4gIHRlbXBsYXRlOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIj5cbiAgPGdcbiAgICBjbGFzcz1rdy1ob2xkZXJcbiAgICBbYXR0ci50cmFuc2Zvcm1dPVwiaXNJRTExID8gJ3RyYW5zbGF0ZSgxMDAgMTAwKSByb3RhdGUoLTkwKScgOiAnJ1wiPlxuICAgIDxjaXJjbGVcbiAgICAgIGNsYXNzPWt3LWJhY2tcbiAgICAgIFthdHRyLnJdPVwiYmdSYWRpdXNcIlxuICAgICAgW3N0eWxlLmZpbGxdPWJnQ29sb3IvPlxuXG4gICAgICA8Z1xuICAgICAgICAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBzb3J0ZWRTZWdtZW50c1wiPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY2xhc3M9a3ctbWlkXG4gICAgICAgICAgW3N0eWxlLnN0cm9rZV09c2VnbWVudC5iZ0NvbG9yXG4gICAgICAgICAgW3N0eWxlLnN0cm9rZVdpZHRoXT1zZWdtZW50LmJvcmRlcldpZHRoXG4gICAgICAgICAgW2F0dHIucl09c2VnbWVudC5jb21wdXRlZFJhZGl1cy8+XG5cbiAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICBjbGFzcz1rdy1mcm9udFxuXG4gICAgICAgICAgICBbc3R5bGUudHJhbnNpdGlvbl09XCInc3Ryb2tlLWRhc2hhcnJheSAnICsgYW5pbWF0aW9uU2VjcyArICdzJ1wiXG4gICAgICAgICAgICBbc3R5bGUuc3Ryb2tlXT1zZWdtZW50LmNvbG9yXG4gICAgICAgICAgICBbc3R5bGUuc3Ryb2tlV2lkdGhdPXNlZ21lbnQuYm9yZGVyV2lkdGhcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VEYXNoYXJyYXldPVwic2VnbWVudHNMb2FkZWQgPyBzZWdtZW50LnN0cm9rZVByb2dyZXNzIDogc2VnbWVudC5zdHJva2VFbXB0eVByb2dyZXNzXCJcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VMaW5lY2FwXT1cInJvdW5kZWQgPyAncm91bmQnIDogJydcIlxuICAgICAgICAgICAgW2F0dHIucl09c2VnbWVudC5jb21wdXRlZFJhZGl1cy8+XG4gICAgICA8L2c+XG4gIDwvZz5cblxuICA8Z1xuICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDAsIDEwMClcIj5cbiAgICA8dGV4dFxuICAgICAgY2xhc3M9a3ctbGFiZWxcbiAgICAgICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBsYWJlbHNcIlxuICAgICAgW2F0dHIueF09bGFiZWwueFxuICAgICAgW2F0dHIueV09bGFiZWwueVxuICAgICAgW3N0eWxlLmZpbGxdPWxhYmVsLmNvbG9yXG4gICAgICBbc3R5bGUuZm9udFNpemVdPWxhYmVsLmZvbnRTaXplXG4gICAgICB0ZXh0LWFuY2hvcj1taWRkbGU+XG4gICAgICB7e2xhYmVsLnRleHR9fVxuICAgIDwvdGV4dD5cbiAgPC9nPlxuPC9zdmc+XG5gLFxuICBzdHlsZXM6IFtgLmt3LWZyb250LC5rdy1taWR7ZmlsbDp0cmFuc3BhcmVudH0ua3ctaG9sZGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgxMDBweCwxMDBweCkgcm90YXRlKC05MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxMDBweCwxMDBweCkgcm90YXRlKC05MGRlZyl9YF1cbn0pXG5leHBvcnQgY2xhc3MgR2F1Z2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBiZ1JhZGl1cyA9IDEwMDtcbiAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSByb3VuZGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgcmV2ZXJzZSA9IGZhbHNlO1xuICBASW5wdXQoKSBhbmltYXRpb25TZWNzID0gMC41O1xuXG4gIEBJbnB1dCgpIGxhYmVsczogR2F1Z2VMYWJlbFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWdtZW50cyhzZWdtZW50czogR2F1Z2VTZWdtZW50W10pIHtcbiAgICB0aGlzLnNlZ21lbnRzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zb3J0ZWRTZWdtZW50cyA9IHRoaXMuc29ydFNlZ21lbnRzKHNlZ21lbnRzKTtcblxuICAgIC8vIHdhaXQgYSBiaXQgYW5kIHN0YXJ0IGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB0aGlzLnNlZ21lbnRzTG9hZGVkID0gdHJ1ZSxcbiAgICAgIDApO1xuICB9XG5cbiAgc29ydGVkU2VnbWVudHM6IEdhdWdlU2VnbWVudFtdO1xuICBzZWdtZW50c0xvYWRlZCA9IGZhbHNlO1xuXG4gIGlzSUUxMSA9IC9UcmlkZW50LipydlsgOl0qMTFcXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc29ydFNlZ21lbnRzKHNlZ21lbnRzOiBHYXVnZVNlZ21lbnRbXSkge1xuICAgIHJldHVybiBzZWdtZW50cyAmJiBzZWdtZW50cy5zb3J0KChhOiBHYXVnZVNlZ21lbnQsIGI6IEdhdWdlU2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucmV2ZXJzZSlcbiAgICAgICAgcmV0dXJuIChhLnZhbHVlIC8gYS5nb2FsID4gYi52YWx1ZSAvIGIuZ29hbCkgPyAxIDogLTE7XG4gICAgICByZXR1cm4gKGEudmFsdWUgLyBhLmdvYWwgPiBiLnZhbHVlIC8gYi5nb2FsKSA/IC0xIDogMTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAY2F0ZWdvcnkgICBNb2R1bGVcbiAqIEBwYWNrYWdlICAgIGNvbS5raXdpdHkuZ2F1Z2UuZ2F1Z2VcbiAqIEBhdXRob3IgICAgIFNhbHZhZG9yIFN1YmFycm9jYSAoc3ViYXJyb2NhQGdtYWlsLmNvbSlcbiAqKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEdhdWdlQ29tcG9uZW50IH0gZnJvbSAnLi9nYXVnZS5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgYm9vdHN0cmFwOiBbR2F1Z2VDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtHYXVnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtHYXVnZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR2F1Z2VNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7Ozs7SUFBQTtRQVNFLHNCQUFZLE9BT047WUFQTSx3QkFBQTtnQkFBQSxZQU9OOztZQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDcEMs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