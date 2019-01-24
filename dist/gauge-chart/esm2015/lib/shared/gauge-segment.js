/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @category   Model
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
// ANGULAR
// EXTERNAL
// OWN
export class GaugeSegment {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        this.radius = options.radius || 100;
        this.goal = options.goal || 100;
        this.value = options.value;
        this.color = options.color;
        this.bgColor = options.bgColor || 'transparent';
        this.borderWidth = options.borderWidth || 100;
    }
    /**
     * @return {?}
     */
    get computedRadius() {
        return this.radius - this.borderWidth / 2;
    }
    /**
     * @this {?}
     * @return {?}
     */
    get strokeProgress() {
        return `${2 * Math.PI * this.computedRadius * this.value / this.goal} ${2 * Math.PI * this.computedRadius}`;
    }
    /**
     * @this {?}
     * @return {?}
     */
    get strokeEmptyProgress() {
        return `0 ${2 * Math.PI * this.computedRadius}`;
    }
}
if (false) {
    /** @type {?} */
    GaugeSegment.prototype.radius;
    /** @type {?} */
    GaugeSegment.prototype.goal;
    /** @type {?} */
    GaugeSegment.prototype.value;
    /** @type {?} */
    GaugeSegment.prototype.color;
    /** @type {?} */
    GaugeSegment.prototype.bgColor;
    /** @type {?} */
    GaugeSegment.prototype.borderWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2Utc2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhdWdlLWNoYXJ0LyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9nYXVnZS1zZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQXlCQSxNQUFNLE9BQU8sWUFBWTs7OztJQVN2QixZQUFZLFVBT1IsRUFBRTtRQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxhQUFhLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQztJQUNoRCxDQUFDOzs7O0lBSUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzlHLENBQUM7Ozs7O0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7OztJQXJDQyw4QkFBZTs7SUFDZiw0QkFBYTs7SUFDYiw2QkFBYzs7SUFDZCw2QkFBYzs7SUFDZCwrQkFBZ0I7O0lBQ2hCLG1DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNhdGVnb3J5ICAgTW9kZWxcbiAqIEBwYWNrYWdlICAgIGNvbS5raXdpdHkuZ2F1Z2UuZ2F1Z2VcbiAqIEBhdXRob3IgICAgIFNhbHZhZG9yIFN1YmFycm9jYSAoc3ViYXJyb2NhQGdtYWlsLmNvbSlcbioqL1xuXG5cblxuXG4vLyBBTkdVTEFSXG5cblxuXG5cbi8vIEVYVEVSTkFMXG5cblxuXG5cbi8vIE9XTlxuXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBHYXVnZVNlZ21lbnQge1xuICByYWRpdXM6IG51bWJlcjtcbiAgZ29hbDogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBiZ0NvbG9yOiBzdHJpbmc7XG4gIGJvcmRlcldpZHRoOiBudW1iZXI7XG5cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiB7XG4gICAgcmFkaXVzPzogbnVtYmVyLFxuICAgIGdvYWw/OiBudW1iZXIsXG4gICAgdmFsdWU/OiBudW1iZXIsXG4gICAgY29sb3I/OiBzdHJpbmcsXG4gICAgYmdDb2xvcj86IHN0cmluZyxcbiAgICBib3JkZXJXaWR0aD86IG51bWJlclxuICB9ID0ge30pIHtcbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDEwMDtcbiAgICB0aGlzLmdvYWwgPSBvcHRpb25zLmdvYWwgfHwgMTAwO1xuICAgIHRoaXMudmFsdWUgPSBvcHRpb25zLnZhbHVlO1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuYmdDb2xvciA9IG9wdGlvbnMuYmdDb2xvciB8fCAndHJhbnNwYXJlbnQnO1xuICAgIHRoaXMuYm9yZGVyV2lkdGggPSBvcHRpb25zLmJvcmRlcldpZHRoIHx8IDEwMDtcbiAgfVxuXG5cblxuICBnZXQgY29tcHV0ZWRSYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzIC0gdGhpcy5ib3JkZXJXaWR0aCAvIDI7XG4gIH1cblxuICBnZXQgc3Ryb2tlUHJvZ3Jlc3ModGhpczogR2F1Z2VTZWdtZW50KSB7XG4gICAgcmV0dXJuIGAkezIgKiBNYXRoLlBJICogdGhpcy5jb21wdXRlZFJhZGl1cyAqIHRoaXMudmFsdWUgLyB0aGlzLmdvYWx9ICR7MiAqIE1hdGguUEkgKiB0aGlzLmNvbXB1dGVkUmFkaXVzfWA7XG4gIH1cblxuICBnZXQgc3Ryb2tlRW1wdHlQcm9ncmVzcyh0aGlzOiBHYXVnZVNlZ21lbnQpIHtcbiAgICByZXR1cm4gYDAgJHsyICogTWF0aC5QSSAqIHRoaXMuY29tcHV0ZWRSYWRpdXN9YDtcbiAgfVxufVxuIl19