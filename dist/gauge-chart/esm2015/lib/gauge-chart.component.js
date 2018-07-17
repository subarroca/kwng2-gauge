/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                template: `<svg viewBox="0 0 200 200">
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
                styles: [`.kw-front,.kw-mid{fill:transparent}.kw-holder{-webkit-transform:translate(100px,100px) rotate(-90deg);transform:translate(100px,100px) rotate(-90deg)}`]
            },] },
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
function GaugeChartComponent_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2F1Z2UtY2hhcnQvIiwic291cmNlcyI6WyJsaWIvZ2F1Z2UtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQXFEekQsTUFBTTtJQTBCSjt3QkF6Qm9CLEdBQUc7dUJBRUosSUFBSTt1QkFDSixLQUFLOzZCQUNDLEdBQUc7OEJBZ0JYLEtBQUs7c0JBRWIsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7S0FHeEM7Ozs7O0lBakJqQixJQUNJLFFBQVEsQ0FBQyxRQUF3QjtRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O1FBR2xELFVBQVUsQ0FDUixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksRUFDaEMsQ0FBQyxDQUFDLENBQUM7S0FDTjs7OztJQVVELFFBQVE7S0FDUDs7Ozs7SUFFRCxZQUFZLENBQUMsUUFBd0I7UUFDbkMsTUFBTSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBZSxFQUFFLENBQWUsRUFBRSxFQUFFO1lBQ3BFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RCxDQUFDLENBQUM7S0FDSjs7O1lBckZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQ1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsd0pBQXdKLENBQUM7YUFDbks7Ozs7O3VCQUVFLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQkFFTCxLQUFLO3VCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F1Z2VMYWJlbCB9IGZyb20gJy4vc2hhcmVkL2dhdWdlLWxhYmVsJztcbmltcG9ydCB7IEdhdWdlU2VnbWVudCB9IGZyb20gJy4vc2hhcmVkL2dhdWdlLXNlZ21lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1nYXVnZS1jaGFydCcsXG4gIHRlbXBsYXRlOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIj5cbiAgPGdcbiAgICBjbGFzcz1rdy1ob2xkZXJcbiAgICBbYXR0ci50cmFuc2Zvcm1dPVwiaXNJRTExID8gJ3RyYW5zbGF0ZSgxMDAgMTAwKSByb3RhdGUoLTkwKScgOiAnJ1wiPlxuICAgIDxjaXJjbGVcbiAgICAgIGNsYXNzPWt3LWJhY2tcbiAgICAgIFthdHRyLnJdPVwiYmdSYWRpdXNcIlxuICAgICAgW3N0eWxlLmZpbGxdPWJnQ29sb3IvPlxuXG4gICAgICA8Z1xuICAgICAgICAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBzb3J0ZWRTZWdtZW50c1wiPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY2xhc3M9a3ctbWlkXG4gICAgICAgICAgW3N0eWxlLnN0cm9rZV09c2VnbWVudC5iZ0NvbG9yXG4gICAgICAgICAgW3N0eWxlLnN0cm9rZVdpZHRoXT1zZWdtZW50LmJvcmRlcldpZHRoXG4gICAgICAgICAgW2F0dHIucl09c2VnbWVudC5jb21wdXRlZFJhZGl1cy8+XG5cbiAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICBjbGFzcz1rdy1mcm9udFxuXG4gICAgICAgICAgICBbc3R5bGUudHJhbnNpdGlvbl09XCInc3Ryb2tlLWRhc2hhcnJheSAnICsgYW5pbWF0aW9uU2VjcyArICdzJ1wiXG4gICAgICAgICAgICBbc3R5bGUuc3Ryb2tlXT1zZWdtZW50LmNvbG9yXG4gICAgICAgICAgICBbc3R5bGUuc3Ryb2tlV2lkdGhdPXNlZ21lbnQuYm9yZGVyV2lkdGhcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VEYXNoYXJyYXldPVwic2VnbWVudHNMb2FkZWQgPyBzZWdtZW50LnN0cm9rZVByb2dyZXNzIDogc2VnbWVudC5zdHJva2VFbXB0eVByb2dyZXNzXCJcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2VMaW5lY2FwXT1cInJvdW5kZWQgPyAncm91bmQnIDogJydcIlxuICAgICAgICAgICAgW2F0dHIucl09c2VnbWVudC5jb21wdXRlZFJhZGl1cy8+XG4gICAgICA8L2c+XG4gIDwvZz5cblxuICA8Z1xuICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDAsIDEwMClcIj5cbiAgICA8dGV4dFxuICAgICAgY2xhc3M9a3ctbGFiZWxcbiAgICAgICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBsYWJlbHNcIlxuICAgICAgW2F0dHIueF09bGFiZWwueFxuICAgICAgW2F0dHIueV09bGFiZWwueVxuICAgICAgW3N0eWxlLmZpbGxdPWxhYmVsLmNvbG9yXG4gICAgICBbc3R5bGUuZm9udFNpemVdPWxhYmVsLmZvbnRTaXplXG4gICAgICB0ZXh0LWFuY2hvcj1taWRkbGU+XG4gICAgICB7e2xhYmVsLnRleHR9fVxuICAgIDwvdGV4dD5cbiAgPC9nPlxuPC9zdmc+XG5gLFxuICBzdHlsZXM6IFtgLmt3LWZyb250LC5rdy1taWR7ZmlsbDp0cmFuc3BhcmVudH0ua3ctaG9sZGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgxMDBweCwxMDBweCkgcm90YXRlKC05MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxMDBweCwxMDBweCkgcm90YXRlKC05MGRlZyl9YF1cbn0pXG5leHBvcnQgY2xhc3MgR2F1Z2VDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGJnUmFkaXVzID0gMTAwO1xuICBASW5wdXQoKSBiZ0NvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvdW5kZWQgPSB0cnVlO1xuICBASW5wdXQoKSByZXZlcnNlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFuaW1hdGlvblNlY3MgPSAwLjU7XG5cbiAgQElucHV0KCkgbGFiZWxzOiBHYXVnZUxhYmVsW107XG5cbiAgQElucHV0KClcbiAgc2V0IHNlZ21lbnRzKHNlZ21lbnRzOiBHYXVnZVNlZ21lbnRbXSkge1xuICAgIHRoaXMuc2VnbWVudHNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNvcnRlZFNlZ21lbnRzID0gdGhpcy5zb3J0U2VnbWVudHMoc2VnbWVudHMpO1xuXG4gICAgLy8gd2FpdCBhIGJpdCBhbmQgc3RhcnQgYW5pbWF0aW9uXG4gICAgc2V0VGltZW91dChcbiAgICAgICgpID0+IHRoaXMuc2VnbWVudHNMb2FkZWQgPSB0cnVlLFxuICAgICAgMCk7XG4gIH1cblxuICBzb3J0ZWRTZWdtZW50czogR2F1Z2VTZWdtZW50W107XG4gIHNlZ21lbnRzTG9hZGVkID0gZmFsc2U7XG5cbiAgaXNJRTExID0gL1RyaWRlbnQuKnJ2WyA6XSoxMVxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzb3J0U2VnbWVudHMoc2VnbWVudHM6IEdhdWdlU2VnbWVudFtdKSB7XG4gICAgcmV0dXJuIHNlZ21lbnRzICYmIHNlZ21lbnRzLnNvcnQoKGE6IEdhdWdlU2VnbWVudCwgYjogR2F1Z2VTZWdtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5yZXZlcnNlKVxuICAgICAgICByZXR1cm4gKGEudmFsdWUgLyBhLmdvYWwgPiBiLnZhbHVlIC8gYi5nb2FsKSA/IDEgOiAtMTtcbiAgICAgIHJldHVybiAoYS52YWx1ZSAvIGEuZ29hbCA+IGIudmFsdWUgLyBiLmdvYWwpID8gLTEgOiAxO1xuICAgIH0pO1xuICB9XG59XG4iXX0=