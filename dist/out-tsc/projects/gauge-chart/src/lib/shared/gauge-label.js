"use strict";
/**
 * @category   Model
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
Object.defineProperty(exports, "__esModule", { value: true });
// ANGULAR
// EXTERNAL
// OWN
var GaugeLabel = /** @class */ (function () {
    function GaugeLabel(options) {
        if (options === void 0) { options = {}; }
        this.color = options.color;
        this.text = options.text;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.fontSize = options.fontSize || '1em';
    }
    return GaugeLabel;
}());
exports.GaugeLabel = GaugeLabel;
//# sourceMappingURL=gauge-label.js.map