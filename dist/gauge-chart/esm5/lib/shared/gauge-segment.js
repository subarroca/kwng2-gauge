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
var GaugeSegment = /** @class */ (function () {
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
export { GaugeSegment };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2Utc2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhdWdlLWNoYXJ0LyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9nYXVnZS1zZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQXlCQTtJQVNFLHNCQUFZLE9BT047UUFQTSx3QkFBQSxFQUFBLFlBT047UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksYUFBYSxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUM7SUFDaEQsQ0FBQztJQUlELHNCQUFJLHdDQUFjOzs7O1FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQWM7Ozs7O1FBQWxCO1lBQ0UsT0FBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksU0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBZ0IsQ0FBQztRQUM5RyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFtQjs7Ozs7UUFBdkI7WUFDRSxPQUFPLE9BQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWdCLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7SUFDSCxtQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7Ozs7SUFyQ0MsOEJBQWU7O0lBQ2YsNEJBQWE7O0lBQ2IsNkJBQWM7O0lBQ2QsNkJBQWM7O0lBQ2QsK0JBQWdCOztJQUNoQixtQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjYXRlZ29yeSAgIE1vZGVsXG4gKiBAcGFja2FnZSAgICBjb20ua2l3aXR5LmdhdWdlLmdhdWdlXG4gKiBAYXV0aG9yICAgICBTYWx2YWRvciBTdWJhcnJvY2EgKHN1YmFycm9jYUBnbWFpbC5jb20pXG4qKi9cblxuXG5cblxuLy8gQU5HVUxBUlxuXG5cblxuXG4vLyBFWFRFUk5BTFxuXG5cblxuXG4vLyBPV05cblxuXG5cblxuXG5leHBvcnQgY2xhc3MgR2F1Z2VTZWdtZW50IHtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGdvYWw6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgYmdDb2xvcjogc3RyaW5nO1xuICBib3JkZXJXaWR0aDogbnVtYmVyO1xuXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczoge1xuICAgIHJhZGl1cz86IG51bWJlcixcbiAgICBnb2FsPzogbnVtYmVyLFxuICAgIHZhbHVlPzogbnVtYmVyLFxuICAgIGNvbG9yPzogc3RyaW5nLFxuICAgIGJnQ29sb3I/OiBzdHJpbmcsXG4gICAgYm9yZGVyV2lkdGg/OiBudW1iZXJcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCAxMDA7XG4gICAgdGhpcy5nb2FsID0gb3B0aW9ucy5nb2FsIHx8IDEwMDtcbiAgICB0aGlzLnZhbHVlID0gb3B0aW9ucy52YWx1ZTtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLmJnQ29sb3IgPSBvcHRpb25zLmJnQ29sb3IgfHwgJ3RyYW5zcGFyZW50JztcbiAgICB0aGlzLmJvcmRlcldpZHRoID0gb3B0aW9ucy5ib3JkZXJXaWR0aCB8fCAxMDA7XG4gIH1cblxuXG5cbiAgZ2V0IGNvbXB1dGVkUmFkaXVzKCkge1xuICAgIHJldHVybiB0aGlzLnJhZGl1cyAtIHRoaXMuYm9yZGVyV2lkdGggLyAyO1xuICB9XG5cbiAgZ2V0IHN0cm9rZVByb2dyZXNzKHRoaXM6IEdhdWdlU2VnbWVudCkge1xuICAgIHJldHVybiBgJHsyICogTWF0aC5QSSAqIHRoaXMuY29tcHV0ZWRSYWRpdXMgKiB0aGlzLnZhbHVlIC8gdGhpcy5nb2FsfSAkezIgKiBNYXRoLlBJICogdGhpcy5jb21wdXRlZFJhZGl1c31gO1xuICB9XG5cbiAgZ2V0IHN0cm9rZUVtcHR5UHJvZ3Jlc3ModGhpczogR2F1Z2VTZWdtZW50KSB7XG4gICAgcmV0dXJuIGAwICR7MiAqIE1hdGguUEkgKiB0aGlzLmNvbXB1dGVkUmFkaXVzfWA7XG4gIH1cbn1cbiJdfQ==