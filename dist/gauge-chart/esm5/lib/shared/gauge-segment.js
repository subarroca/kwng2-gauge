/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
GaugeSegment = /** @class */ (function () {
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
// ANGULAR
// EXTERNAL
// OWN
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2Utc2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhdWdlLWNoYXJ0LyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9nYXVnZS1zZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQXlCQTs7OztBQUFBO0lBU0Usc0JBQVksT0FPTjtRQVBNLHdCQUFBLEVBQUEsWUFPTjtRQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxhQUFhLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQztLQUMvQztJQUlELHNCQUFJLHdDQUFjOzs7O1FBQWxCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDM0M7OztPQUFBO0lBRUQsc0JBQUksd0NBQWM7Ozs7O1FBQWxCO1lBQ0UsTUFBTSxDQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxTQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFnQixDQUFDO1NBQzdHOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFtQjs7Ozs7UUFBdkI7WUFDRSxNQUFNLENBQUMsT0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBZ0IsQ0FBQztTQUNqRDs7O09BQUE7dUJBOURIO0lBK0RDLENBQUE7Ozs7QUF0Q0Qsd0JBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY2F0ZWdvcnkgICBNb2RlbFxuICogQHBhY2thZ2UgICAgY29tLmtpd2l0eS5nYXVnZS5nYXVnZVxuICogQGF1dGhvciAgICAgU2FsdmFkb3IgU3ViYXJyb2NhIChzdWJhcnJvY2FAZ21haWwuY29tKVxuKiovXG5cblxuXG5cbi8vIEFOR1VMQVJcblxuXG5cblxuLy8gRVhURVJOQUxcblxuXG5cblxuLy8gT1dOXG5cblxuXG5cblxuZXhwb3J0IGNsYXNzIEdhdWdlU2VnbWVudCB7XG4gIHJhZGl1czogbnVtYmVyO1xuICBnb2FsOiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGJnQ29sb3I6IHN0cmluZztcbiAgYm9yZGVyV2lkdGg6IG51bWJlcjtcblxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHtcbiAgICByYWRpdXM/OiBudW1iZXIsXG4gICAgZ29hbD86IG51bWJlcixcbiAgICB2YWx1ZT86IG51bWJlcixcbiAgICBjb2xvcj86IHN0cmluZyxcbiAgICBiZ0NvbG9yPzogc3RyaW5nLFxuICAgIGJvcmRlcldpZHRoPzogbnVtYmVyXG4gIH0gPSB7fSkge1xuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgMTAwO1xuICAgIHRoaXMuZ29hbCA9IG9wdGlvbnMuZ29hbCB8fCAxMDA7XG4gICAgdGhpcy52YWx1ZSA9IG9wdGlvbnMudmFsdWU7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5iZ0NvbG9yID0gb3B0aW9ucy5iZ0NvbG9yIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy5ib3JkZXJXaWR0aCA9IG9wdGlvbnMuYm9yZGVyV2lkdGggfHwgMTAwO1xuICB9XG5cblxuXG4gIGdldCBjb21wdXRlZFJhZGl1cygpIHtcbiAgICByZXR1cm4gdGhpcy5yYWRpdXMgLSB0aGlzLmJvcmRlcldpZHRoIC8gMjtcbiAgfVxuXG4gIGdldCBzdHJva2VQcm9ncmVzcyh0aGlzOiBHYXVnZVNlZ21lbnQpIHtcbiAgICByZXR1cm4gYCR7MiAqIE1hdGguUEkgKiB0aGlzLmNvbXB1dGVkUmFkaXVzICogdGhpcy52YWx1ZSAvIHRoaXMuZ29hbH0gJHsyICogTWF0aC5QSSAqIHRoaXMuY29tcHV0ZWRSYWRpdXN9YDtcbiAgfVxuXG4gIGdldCBzdHJva2VFbXB0eVByb2dyZXNzKHRoaXM6IEdhdWdlU2VnbWVudCkge1xuICAgIHJldHVybiBgMCAkezIgKiBNYXRoLlBJICogdGhpcy5jb21wdXRlZFJhZGl1c31gO1xuICB9XG59XG4iXX0=