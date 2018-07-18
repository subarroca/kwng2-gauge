/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2F1Z2UtY2hhcnQvIiwic291cmNlcyI6WyJsaWIvZ2F1Z2UtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7SUErRXZEO3dCQXpCb0IsR0FBRzt1QkFFSixJQUFJO3VCQUNKLEtBQUs7NkJBQ0MsR0FBRzs4QkFnQlgsS0FBSztzQkFFYixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztLQUd4QztJQWpCakIsc0JBQ0kseUNBQVE7Ozs7O1FBRFosVUFDYSxRQUF3QjtZQURyQyxpQkFTQztZQVBDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFHbEQsVUFBVSxDQUNSLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksRUFBMUIsQ0FBMEIsRUFDaEMsQ0FBQyxDQUFDLENBQUM7U0FDTjs7O09BQUE7Ozs7SUFVRCxzQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFFRCwwQ0FBWTs7OztJQUFaLFVBQWEsUUFBd0I7UUFBckMsaUJBTUM7UUFMQyxNQUFNLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFlLEVBQUUsQ0FBZTtZQUNoRSxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQsQ0FBQyxDQUFDO0tBQ0o7O2dCQXJGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGl1Q0EyQ1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsd0pBQXdKLENBQUM7aUJBQ25LOzs7OzsyQkFFRSxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxLQUFLOzs4QkE5RFI7O1NBcURhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXVnZUxhYmVsIH0gZnJvbSAnLi9zaGFyZWQvZ2F1Z2UtbGFiZWwnO1xuaW1wb3J0IHsgR2F1Z2VTZWdtZW50IH0gZnJvbSAnLi9zaGFyZWQvZ2F1Z2Utc2VnbWVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWdhdWdlLWNoYXJ0JyxcbiAgdGVtcGxhdGU6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiPlxuICA8Z1xuICAgIGNsYXNzPWt3LWhvbGRlclxuICAgIFthdHRyLnRyYW5zZm9ybV09XCJpc0lFMTEgPyAndHJhbnNsYXRlKDEwMCAxMDApIHJvdGF0ZSgtOTApJyA6ICcnXCI+XG4gICAgPGNpcmNsZVxuICAgICAgY2xhc3M9a3ctYmFja1xuICAgICAgW2F0dHIucl09XCJiZ1JhZGl1c1wiXG4gICAgICBbc3R5bGUuZmlsbF09YmdDb2xvci8+XG5cbiAgICAgIDxnXG4gICAgICAgICpuZ0Zvcj1cImxldCBzZWdtZW50IG9mIHNvcnRlZFNlZ21lbnRzXCI+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBjbGFzcz1rdy1taWRcbiAgICAgICAgICBbc3R5bGUuc3Ryb2tlXT1zZWdtZW50LmJnQ29sb3JcbiAgICAgICAgICBbc3R5bGUuc3Ryb2tlV2lkdGhdPXNlZ21lbnQuYm9yZGVyV2lkdGhcbiAgICAgICAgICBbYXR0ci5yXT1zZWdtZW50LmNvbXB1dGVkUmFkaXVzLz5cblxuICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgIGNsYXNzPWt3LWZyb250XG5cbiAgICAgICAgICAgIFtzdHlsZS50cmFuc2l0aW9uXT1cIidzdHJva2UtZGFzaGFycmF5ICcgKyBhbmltYXRpb25TZWNzICsgJ3MnXCJcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VdPXNlZ21lbnQuY29sb3JcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VXaWR0aF09c2VnbWVudC5ib3JkZXJXaWR0aFxuICAgICAgICAgICAgW3N0eWxlLnN0cm9rZURhc2hhcnJheV09XCJzZWdtZW50c0xvYWRlZCA/IHNlZ21lbnQuc3Ryb2tlUHJvZ3Jlc3MgOiBzZWdtZW50LnN0cm9rZUVtcHR5UHJvZ3Jlc3NcIlxuICAgICAgICAgICAgW3N0eWxlLnN0cm9rZUxpbmVjYXBdPVwicm91bmRlZCA/ICdyb3VuZCcgOiAnJ1wiXG4gICAgICAgICAgICBbYXR0ci5yXT1zZWdtZW50LmNvbXB1dGVkUmFkaXVzLz5cbiAgICAgIDwvZz5cbiAgPC9nPlxuXG4gIDxnXG4gICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwMCwgMTAwKVwiPlxuICAgIDx0ZXh0XG4gICAgICBjbGFzcz1rdy1sYWJlbFxuICAgICAgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGxhYmVsc1wiXG4gICAgICBbYXR0ci54XT1sYWJlbC54XG4gICAgICBbYXR0ci55XT1sYWJlbC55XG4gICAgICBbc3R5bGUuZmlsbF09bGFiZWwuY29sb3JcbiAgICAgIFtzdHlsZS5mb250U2l6ZV09bGFiZWwuZm9udFNpemVcbiAgICAgIHRleHQtYW5jaG9yPW1pZGRsZT5cbiAgICAgIHt7bGFiZWwudGV4dH19XG4gICAgPC90ZXh0PlxuICA8L2c+XG48L3N2Zz5cbmAsXG4gIHN0eWxlczogW2Aua3ctZnJvbnQsLmt3LW1pZHtmaWxsOnRyYW5zcGFyZW50fS5rdy1ob2xkZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDEwMHB4LDEwMHB4KSByb3RhdGUoLTkwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDEwMHB4LDEwMHB4KSByb3RhdGUoLTkwZGVnKX1gXVxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYmdSYWRpdXMgPSAxMDA7XG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgcm91bmRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIHJldmVyc2UgPSBmYWxzZTtcbiAgQElucHV0KCkgYW5pbWF0aW9uU2VjcyA9IDAuNTtcblxuICBASW5wdXQoKSBsYWJlbHM6IEdhdWdlTGFiZWxbXTtcblxuICBASW5wdXQoKVxuICBzZXQgc2VnbWVudHMoc2VnbWVudHM6IEdhdWdlU2VnbWVudFtdKSB7XG4gICAgdGhpcy5zZWdtZW50c0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc29ydGVkU2VnbWVudHMgPSB0aGlzLnNvcnRTZWdtZW50cyhzZWdtZW50cyk7XG5cbiAgICAvLyB3YWl0IGEgYml0IGFuZCBzdGFydCBhbmltYXRpb25cbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4gdGhpcy5zZWdtZW50c0xvYWRlZCA9IHRydWUsXG4gICAgICAwKTtcbiAgfVxuXG4gIHNvcnRlZFNlZ21lbnRzOiBHYXVnZVNlZ21lbnRbXTtcbiAgc2VnbWVudHNMb2FkZWQgPSBmYWxzZTtcblxuICBpc0lFMTEgPSAvVHJpZGVudC4qcnZbIDpdKjExXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNvcnRTZWdtZW50cyhzZWdtZW50czogR2F1Z2VTZWdtZW50W10pIHtcbiAgICByZXR1cm4gc2VnbWVudHMgJiYgc2VnbWVudHMuc29ydCgoYTogR2F1Z2VTZWdtZW50LCBiOiBHYXVnZVNlZ21lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnJldmVyc2UpXG4gICAgICAgIHJldHVybiAoYS52YWx1ZSAvIGEuZ29hbCA+IGIudmFsdWUgLyBiLmdvYWwpID8gMSA6IC0xO1xuICAgICAgcmV0dXJuIChhLnZhbHVlIC8gYS5nb2FsID4gYi52YWx1ZSAvIGIuZ29hbCkgPyAtMSA6IDE7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==