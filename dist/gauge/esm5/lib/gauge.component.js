/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @category   Component
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
 **/
import { Component, Input } from '@angular/core';
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
export { GaugeComponent };
function GaugeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    GaugeComponent.prototype.bgRadius;
    /** @type {?} */
    GaugeComponent.prototype.bgColor;
    /** @type {?} */
    GaugeComponent.prototype.rounded;
    /** @type {?} */
    GaugeComponent.prototype.reverse;
    /** @type {?} */
    GaugeComponent.prototype.animationSecs;
    /** @type {?} */
    GaugeComponent.prototype.labels;
    /** @type {?} */
    GaugeComponent.prototype.sortedSegments;
    /** @type {?} */
    GaugeComponent.prototype.segmentsLoaded;
    /** @type {?} */
    GaugeComponent.prototype.isIE11;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2F1Z2UvIiwic291cmNlcyI6WyJsaWIvZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztJQStFdkQ7d0JBekJvQixHQUFHO3VCQUVKLElBQUk7dUJBQ0osS0FBSzs2QkFDQyxHQUFHOzhCQWdCWCxLQUFLO3NCQUViLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0tBR3hDO0lBakJqQixzQkFDSSxvQ0FBUTs7Ozs7UUFEWixVQUNhLFFBQXdCO1lBRHJDLGlCQVNDO1lBUEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUdsRCxVQUFVLENBQ1IsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxFQUExQixDQUEwQixFQUNoQyxDQUFDLENBQUMsQ0FBQztTQUNOOzs7T0FBQTs7OztJQVVELGlDQUFROzs7SUFBUjtLQUNDOzs7OztJQUVELHFDQUFZOzs7O0lBQVosVUFBYSxRQUF3QjtRQUFyQyxpQkFNQztRQUxDLE1BQU0sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQWUsRUFBRSxDQUFlO1lBQ2hFLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RCxDQUFDLENBQUM7S0FDSjs7Z0JBckZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLGl1Q0EyQ1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsd0pBQXdKLENBQUM7aUJBQ25LOzs7OzsyQkFFRSxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxLQUFLOzt5QkFwRVI7O1NBMkRhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjYXRlZ29yeSAgIENvbXBvbmVudFxuICogQHBhY2thZ2UgICAgY29tLmtpd2l0eS5nYXVnZS5nYXVnZVxuICogQGF1dGhvciAgICAgU2FsdmFkb3IgU3ViYXJyb2NhIChzdWJhcnJvY2FAZ21haWwuY29tKVxuICoqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F1Z2VMYWJlbCB9IGZyb20gJy4vc2hhcmVkL2dhdWdlLWxhYmVsJztcbmltcG9ydCB7IEdhdWdlU2VnbWVudCB9IGZyb20gJy4vc2hhcmVkL2dhdWdlLXNlZ21lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1nYXVnZScsXG4gIHRlbXBsYXRlOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIj5cbiAgPGdcbiAgICBjbGFzcz1rdy1ob2xkZXJcbiAgICBbYXR0ci50cmFuc2Zvcm1dPVwiaXNJRTExID8gJ3RyYW5zbGF0ZSgxMDAgMTAwKSByb3RhdGUoLTkwKScgOiAnJ1wiPlxuICAgIDxjaXJjbGVcbiAgICAgIGNsYXNzPWt3LWJhY2tcbiAgICAgIFthdHRyLnJdPVwiYmdSYWRpdXNcIlxuICAgICAgW3N0eWxlLmZpbGxdPWJnQ29sb3IvPlxuXG4gICAgICA8Z1xuICAgICAgICAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBzb3J0ZWRTZWdtZW50c1wiPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY2xhc3M9a3ctbWlkXG4gICAgICAgICAgW3N0eWxlLnN0cm9rZV09c2VnbWVudC5iZ0NvbG9yXG4gICAgICAgICAgW3N0eWxlLnN0cm9rZVdpZHRoXT1zZWdtZW50LmJvcmRlcldpZHRoXG4gICAgICAgICAgW2F0dHIucl09c2VnbWVudC5jb21wdXRlZFJhZGl1cy8+XG5cbiAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICBjbGFzcz1rdy1mcm9udFxuXG4gICAgICAgICAgICBbc3R5bGUudHJhbnNpdGlvbl09XCInc3Ryb2tlLWRhc2hhcnJheSAnICsgYW5pbWF0aW9uU2VjcyArICdzJ1wiXG4gICAgICAgICAgICBbc3R5bGUuc3Ryb2tlXT1zZWdtZW50LmNvbG9yXG4gICAgICAgICAgICBbc3R5bGUuc3Ryb2tlV2lkdGhdPXNlZ21lbnQuYm9yZGVyV2lkdGhcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VEYXNoYXJyYXldPVwic2VnbWVudHNMb2FkZWQgPyBzZWdtZW50LnN0cm9rZVByb2dyZXNzIDogc2VnbWVudC5zdHJva2VFbXB0eVByb2dyZXNzXCJcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VMaW5lY2FwXT1cInJvdW5kZWQgPyAncm91bmQnIDogJydcIlxuICAgICAgICAgICAgW2F0dHIucl09c2VnbWVudC5jb21wdXRlZFJhZGl1cy8+XG4gICAgICA8L2c+XG4gIDwvZz5cblxuICA8Z1xuICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDAsIDEwMClcIj5cbiAgICA8dGV4dFxuICAgICAgY2xhc3M9a3ctbGFiZWxcbiAgICAgICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBsYWJlbHNcIlxuICAgICAgW2F0dHIueF09bGFiZWwueFxuICAgICAgW2F0dHIueV09bGFiZWwueVxuICAgICAgW3N0eWxlLmZpbGxdPWxhYmVsLmNvbG9yXG4gICAgICBbc3R5bGUuZm9udFNpemVdPWxhYmVsLmZvbnRTaXplXG4gICAgICB0ZXh0LWFuY2hvcj1taWRkbGU+XG4gICAgICB7e2xhYmVsLnRleHR9fVxuICAgIDwvdGV4dD5cbiAgPC9nPlxuPC9zdmc+XG5gLFxuICBzdHlsZXM6IFtgLmt3LWZyb250LC5rdy1taWR7ZmlsbDp0cmFuc3BhcmVudH0ua3ctaG9sZGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgxMDBweCwxMDBweCkgcm90YXRlKC05MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxMDBweCwxMDBweCkgcm90YXRlKC05MGRlZyl9YF1cbn0pXG5leHBvcnQgY2xhc3MgR2F1Z2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBiZ1JhZGl1cyA9IDEwMDtcbiAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSByb3VuZGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgcmV2ZXJzZSA9IGZhbHNlO1xuICBASW5wdXQoKSBhbmltYXRpb25TZWNzID0gMC41O1xuXG4gIEBJbnB1dCgpIGxhYmVsczogR2F1Z2VMYWJlbFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWdtZW50cyhzZWdtZW50czogR2F1Z2VTZWdtZW50W10pIHtcbiAgICB0aGlzLnNlZ21lbnRzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zb3J0ZWRTZWdtZW50cyA9IHRoaXMuc29ydFNlZ21lbnRzKHNlZ21lbnRzKTtcblxuICAgIC8vIHdhaXQgYSBiaXQgYW5kIHN0YXJ0IGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB0aGlzLnNlZ21lbnRzTG9hZGVkID0gdHJ1ZSxcbiAgICAgIDApO1xuICB9XG5cbiAgc29ydGVkU2VnbWVudHM6IEdhdWdlU2VnbWVudFtdO1xuICBzZWdtZW50c0xvYWRlZCA9IGZhbHNlO1xuXG4gIGlzSUUxMSA9IC9UcmlkZW50LipydlsgOl0qMTFcXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc29ydFNlZ21lbnRzKHNlZ21lbnRzOiBHYXVnZVNlZ21lbnRbXSkge1xuICAgIHJldHVybiBzZWdtZW50cyAmJiBzZWdtZW50cy5zb3J0KChhOiBHYXVnZVNlZ21lbnQsIGI6IEdhdWdlU2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucmV2ZXJzZSlcbiAgICAgICAgcmV0dXJuIChhLnZhbHVlIC8gYS5nb2FsID4gYi52YWx1ZSAvIGIuZ29hbCkgPyAxIDogLTE7XG4gICAgICByZXR1cm4gKGEudmFsdWUgLyBhLmdvYWwgPiBiLnZhbHVlIC8gYi5nb2FsKSA/IC0xIDogMTtcbiAgICB9KTtcbiAgfVxufVxuIl19