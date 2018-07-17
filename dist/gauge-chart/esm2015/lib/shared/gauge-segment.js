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
function GaugeSegment_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2Utc2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhdWdlLWNoYXJ0LyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9nYXVnZS1zZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQXlCQSxNQUFNOzs7O0lBU0osWUFBWSxVQU9SLEVBQUU7UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksYUFBYSxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUM7S0FDL0M7Ozs7SUFJRCxJQUFJLGNBQWM7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7S0FDM0M7Ozs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUM3Rzs7Ozs7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDakQ7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNhdGVnb3J5ICAgTW9kZWxcbiAqIEBwYWNrYWdlICAgIGNvbS5raXdpdHkuZ2F1Z2UuZ2F1Z2VcbiAqIEBhdXRob3IgICAgIFNhbHZhZG9yIFN1YmFycm9jYSAoc3ViYXJyb2NhQGdtYWlsLmNvbSlcbioqL1xuXG5cblxuXG4vLyBBTkdVTEFSXG5cblxuXG5cbi8vIEVYVEVSTkFMXG5cblxuXG5cbi8vIE9XTlxuXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBHYXVnZVNlZ21lbnQge1xuICByYWRpdXM6IG51bWJlcjtcbiAgZ29hbDogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBiZ0NvbG9yOiBzdHJpbmc7XG4gIGJvcmRlcldpZHRoOiBudW1iZXI7XG5cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiB7XG4gICAgcmFkaXVzPzogbnVtYmVyLFxuICAgIGdvYWw/OiBudW1iZXIsXG4gICAgdmFsdWU/OiBudW1iZXIsXG4gICAgY29sb3I/OiBzdHJpbmcsXG4gICAgYmdDb2xvcj86IHN0cmluZyxcbiAgICBib3JkZXJXaWR0aD86IG51bWJlclxuICB9ID0ge30pIHtcbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDEwMDtcbiAgICB0aGlzLmdvYWwgPSBvcHRpb25zLmdvYWwgfHwgMTAwO1xuICAgIHRoaXMudmFsdWUgPSBvcHRpb25zLnZhbHVlO1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgIHRoaXMuYmdDb2xvciA9IG9wdGlvbnMuYmdDb2xvciB8fCAndHJhbnNwYXJlbnQnO1xuICAgIHRoaXMuYm9yZGVyV2lkdGggPSBvcHRpb25zLmJvcmRlcldpZHRoIHx8IDEwMDtcbiAgfVxuXG5cblxuICBnZXQgY29tcHV0ZWRSYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzIC0gdGhpcy5ib3JkZXJXaWR0aCAvIDI7XG4gIH1cblxuICBnZXQgc3Ryb2tlUHJvZ3Jlc3ModGhpczogR2F1Z2VTZWdtZW50KSB7XG4gICAgcmV0dXJuIGAkezIgKiBNYXRoLlBJICogdGhpcy5jb21wdXRlZFJhZGl1cyAqIHRoaXMudmFsdWUgLyB0aGlzLmdvYWx9ICR7MiAqIE1hdGguUEkgKiB0aGlzLmNvbXB1dGVkUmFkaXVzfWA7XG4gIH1cblxuICBnZXQgc3Ryb2tlRW1wdHlQcm9ncmVzcyh0aGlzOiBHYXVnZVNlZ21lbnQpIHtcbiAgICByZXR1cm4gYDAgJHsyICogTWF0aC5QSSAqIHRoaXMuY29tcHV0ZWRSYWRpdXN9YDtcbiAgfVxufVxuIl19