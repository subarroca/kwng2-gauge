/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class GaugeChartComponent {
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
            if (this.reverse)
                return (a.value / a.goal > b.value / b.goal) ? 1 : -1;
            return (a.value / a.goal > b.value / b.goal) ? -1 : 1;
        });
    }
}
GaugeChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-gauge-chart',
                template: "<svg viewBox=\"0 0 200 200\">\n  <g\n    class=kw-holder\n    [attr.transform]=\"isIE11 ? 'translate(100 100) rotate(-90)' : ''\">\n    <circle\n      class=kw-back\n      [attr.r]=\"bgRadius\"\n      [style.fill]=bgColor/>\n\n      <g\n        *ngFor=\"let segment of sortedSegments\">\n        <circle\n          class=kw-mid\n          [style.stroke]=segment.bgColor\n          [style.strokeWidth]=segment.borderWidth\n          [attr.r]=segment.computedRadius/>\n\n          <circle\n            class=kw-front\n\n            [style.transition]=\"'stroke-dasharray ' + animationSecs + 's'\"\n            [style.stroke]=segment.color\n            [style.strokeWidth]=segment.borderWidth\n            [style.strokeDasharray]=\"segmentsLoaded ? segment.strokeProgress : segment.strokeEmptyProgress\"\n            [style.strokeLinecap]=\"rounded ? 'round' : ''\"\n            [attr.r]=segment.computedRadius/>\n      </g>\n  </g>\n\n  <g\n    transform=\"translate(100, 100)\">\n    <text\n      class=kw-label\n      *ngFor=\"let label of labels\"\n      [attr.x]=label.x\n      [attr.y]=label.y\n      [style.fill]=label.color\n      [style.fontSize]=label.fontSize\n      text-anchor=middle>\n      {{label.text}}\n    </text>\n  </g>\n</svg>\n",
                styles: [".kw-front,.kw-mid{fill:transparent}.kw-holder{-webkit-transform:translate(100px,100px) rotate(-90deg);transform:translate(100px,100px) rotate(-90deg)}"]
            }] }
];
/** @nocollapse */
GaugeChartComponent.ctorParameters = () => [];
GaugeChartComponent.propDecorators = {
    bgRadius: [{ type: Input }],
    bgColor: [{ type: Input }],
    rounded: [{ type: Input }],
    reverse: [{ type: Input }],
    animationSecs: [{ type: Input }],
    labels: [{ type: Input }],
    segments: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GaugeChartComponent.prototype.bgRadius;
    /** @type {?} */
    GaugeChartComponent.prototype.bgColor;
    /** @type {?} */
    GaugeChartComponent.prototype.rounded;
    /** @type {?} */
    GaugeChartComponent.prototype.reverse;
    /** @type {?} */
    GaugeChartComponent.prototype.animationSecs;
    /** @type {?} */
    GaugeChartComponent.prototype.labels;
    /** @type {?} */
    GaugeChartComponent.prototype.sortedSegments;
    /** @type {?} */
    GaugeChartComponent.prototype.segmentsLoaded;
    /** @type {?} */
    GaugeChartComponent.prototype.isIE11;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2F1Z2UtY2hhcnQvIiwic291cmNlcyI6WyJsaWIvZ2F1Z2UtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVV6RCxNQUFNLE9BQU8sbUJBQW1CO0lBMEI5QjtRQXpCUyxhQUFRLEdBQUcsR0FBRyxDQUFDO1FBRWYsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFnQjdCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLFdBQU0sR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRzFDLENBQUM7Ozs7O0lBakJqQixJQUNJLFFBQVEsQ0FBQyxRQUF3QjtRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEQsaUNBQWlDO1FBQ2pDLFVBQVUsQ0FDUixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksRUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBVUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFFBQXdCO1FBQ25DLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFlLEVBQUUsQ0FBZSxFQUFFLEVBQUU7WUFDcEUsSUFBSSxJQUFJLENBQUMsT0FBTztnQkFDZCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDJ1Q0FBMkM7O2FBRTVDOzs7Ozt1QkFFRSxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLOzRCQUNMLEtBQUs7cUJBRUwsS0FBSzt1QkFFTCxLQUFLOzs7O0lBUk4sdUNBQXdCOztJQUN4QixzQ0FBeUI7O0lBQ3pCLHNDQUF3Qjs7SUFDeEIsc0NBQXlCOztJQUN6Qiw0Q0FBNkI7O0lBRTdCLHFDQUE4Qjs7SUFhOUIsNkNBQStCOztJQUMvQiw2Q0FBdUI7O0lBRXZCLHFDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXVnZUxhYmVsIH0gZnJvbSAnLi9zaGFyZWQvZ2F1Z2UtbGFiZWwnO1xuaW1wb3J0IHsgR2F1Z2VTZWdtZW50IH0gZnJvbSAnLi9zaGFyZWQvZ2F1Z2Utc2VnbWVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWdhdWdlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdhdWdlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBiZ1JhZGl1cyA9IDEwMDtcbiAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSByb3VuZGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgcmV2ZXJzZSA9IGZhbHNlO1xuICBASW5wdXQoKSBhbmltYXRpb25TZWNzID0gMC41O1xuXG4gIEBJbnB1dCgpIGxhYmVsczogR2F1Z2VMYWJlbFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWdtZW50cyhzZWdtZW50czogR2F1Z2VTZWdtZW50W10pIHtcbiAgICB0aGlzLnNlZ21lbnRzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zb3J0ZWRTZWdtZW50cyA9IHRoaXMuc29ydFNlZ21lbnRzKHNlZ21lbnRzKTtcblxuICAgIC8vIHdhaXQgYSBiaXQgYW5kIHN0YXJ0IGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB0aGlzLnNlZ21lbnRzTG9hZGVkID0gdHJ1ZSxcbiAgICAgIDApO1xuICB9XG5cbiAgc29ydGVkU2VnbWVudHM6IEdhdWdlU2VnbWVudFtdO1xuICBzZWdtZW50c0xvYWRlZCA9IGZhbHNlO1xuXG4gIGlzSUUxMSA9IC9UcmlkZW50LipydlsgOl0qMTFcXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc29ydFNlZ21lbnRzKHNlZ21lbnRzOiBHYXVnZVNlZ21lbnRbXSkge1xuICAgIHJldHVybiBzZWdtZW50cyAmJiBzZWdtZW50cy5zb3J0KChhOiBHYXVnZVNlZ21lbnQsIGI6IEdhdWdlU2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucmV2ZXJzZSlcbiAgICAgICAgcmV0dXJuIChhLnZhbHVlIC8gYS5nb2FsID4gYi52YWx1ZSAvIGIuZ29hbCkgPyAxIDogLTE7XG4gICAgICByZXR1cm4gKGEudmFsdWUgLyBhLmdvYWwgPiBiLnZhbHVlIC8gYi5nb2FsKSA/IC0xIDogMTtcbiAgICB9KTtcbiAgfVxufVxuIl19