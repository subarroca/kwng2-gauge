/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
                }] }
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
export { GaugeChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2F1Z2UtY2hhcnQvIiwic291cmNlcyI6WyJsaWIvZ2F1Z2UtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUt6RDtJQStCRTtRQXpCUyxhQUFRLEdBQUcsR0FBRyxDQUFDO1FBRWYsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFnQjdCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLFdBQU0sR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRzFDLENBQUM7SUFqQmpCLHNCQUNJLHlDQUFROzs7OztRQURaLFVBQ2EsUUFBd0I7WUFEckMsaUJBU0M7WUFQQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbEQsaUNBQWlDO1lBQ2pDLFVBQVUsQ0FDUixjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEVBQTFCLENBQTBCLEVBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQzs7O09BQUE7Ozs7SUFVRCxzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELDBDQUFZOzs7O0lBQVosVUFBYSxRQUF3QjtRQUFyQyxpQkFNQztRQUxDLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFlLEVBQUUsQ0FBZTtZQUNoRSxJQUFJLEtBQUksQ0FBQyxPQUFPO2dCQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTFDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsMnVDQUEyQzs7aUJBRTVDOzs7OzsyQkFFRSxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxLQUFLOztJQTZCUiwwQkFBQztDQUFBLEFBM0NELElBMkNDO1NBdENZLG1CQUFtQjs7O0lBQzlCLHVDQUF3Qjs7SUFDeEIsc0NBQXlCOztJQUN6QixzQ0FBd0I7O0lBQ3hCLHNDQUF5Qjs7SUFDekIsNENBQTZCOztJQUU3QixxQ0FBOEI7O0lBYTlCLDZDQUErQjs7SUFDL0IsNkNBQXVCOztJQUV2QixxQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F1Z2VMYWJlbCB9IGZyb20gJy4vc2hhcmVkL2dhdWdlLWxhYmVsJztcbmltcG9ydCB7IEdhdWdlU2VnbWVudCB9IGZyb20gJy4vc2hhcmVkL2dhdWdlLXNlZ21lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1nYXVnZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYXVnZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYmdSYWRpdXMgPSAxMDA7XG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgcm91bmRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIHJldmVyc2UgPSBmYWxzZTtcbiAgQElucHV0KCkgYW5pbWF0aW9uU2VjcyA9IDAuNTtcblxuICBASW5wdXQoKSBsYWJlbHM6IEdhdWdlTGFiZWxbXTtcblxuICBASW5wdXQoKVxuICBzZXQgc2VnbWVudHMoc2VnbWVudHM6IEdhdWdlU2VnbWVudFtdKSB7XG4gICAgdGhpcy5zZWdtZW50c0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc29ydGVkU2VnbWVudHMgPSB0aGlzLnNvcnRTZWdtZW50cyhzZWdtZW50cyk7XG5cbiAgICAvLyB3YWl0IGEgYml0IGFuZCBzdGFydCBhbmltYXRpb25cbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4gdGhpcy5zZWdtZW50c0xvYWRlZCA9IHRydWUsXG4gICAgICAwKTtcbiAgfVxuXG4gIHNvcnRlZFNlZ21lbnRzOiBHYXVnZVNlZ21lbnRbXTtcbiAgc2VnbWVudHNMb2FkZWQgPSBmYWxzZTtcblxuICBpc0lFMTEgPSAvVHJpZGVudC4qcnZbIDpdKjExXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNvcnRTZWdtZW50cyhzZWdtZW50czogR2F1Z2VTZWdtZW50W10pIHtcbiAgICByZXR1cm4gc2VnbWVudHMgJiYgc2VnbWVudHMuc29ydCgoYTogR2F1Z2VTZWdtZW50LCBiOiBHYXVnZVNlZ21lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnJldmVyc2UpXG4gICAgICAgIHJldHVybiAoYS52YWx1ZSAvIGEuZ29hbCA+IGIudmFsdWUgLyBiLmdvYWwpID8gMSA6IC0xO1xuICAgICAgcmV0dXJuIChhLnZhbHVlIC8gYS5nb2FsID4gYi52YWx1ZSAvIGIuZ29hbCkgPyAtMSA6IDE7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==