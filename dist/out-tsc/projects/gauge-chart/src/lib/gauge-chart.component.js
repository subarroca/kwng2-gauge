"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        set: function (segments) {
            var _this = this;
            this.segmentsLoaded = false;
            this.sortedSegments = this.sortSegments(segments);
            // wait a bit and start animation
            setTimeout(function () { return _this.segmentsLoaded = true; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    GaugeChartComponent.prototype.ngOnInit = function () {
    };
    GaugeChartComponent.prototype.sortSegments = function (segments) {
        var _this = this;
        return segments && segments.sort(function (a, b) {
            if (_this.reverse)
                return (a.value / a.goal > b.value / b.goal) ? 1 : -1;
            return (a.value / a.goal > b.value / b.goal) ? -1 : 1;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GaugeChartComponent.prototype, "bgRadius", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GaugeChartComponent.prototype, "bgColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GaugeChartComponent.prototype, "rounded", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GaugeChartComponent.prototype, "reverse", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GaugeChartComponent.prototype, "animationSecs", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], GaugeChartComponent.prototype, "labels", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], GaugeChartComponent.prototype, "segments", null);
    GaugeChartComponent = __decorate([
        core_1.Component({
            selector: 'ng-gauge-chart',
            templateUrl: './gauge-chart.component.html',
            styleUrls: ['./gauge-chart.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], GaugeChartComponent);
    return GaugeChartComponent;
}());
exports.GaugeChartComponent = GaugeChartComponent;
//# sourceMappingURL=gauge-chart.component.js.map