"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var gauge_segment_1 = require("../../projects/gauge-chart/src/lib/shared/gauge-segment");
var gauge_label_1 = require("../../projects/gauge-chart/src/lib/shared/gauge-label");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.colors = {
            indigo: '#14143e',
            pink: '#fd1c49',
            orange: '#ff6e00',
            yellow: '#f0c800',
            mint: '#00efab',
            cyan: '#05d1ff',
            purple: '#841386',
            white: '#fff'
        };
        this.nautilusGraph = {
            bgRadius: 100,
            bgColor: this.colors.indigo,
            rounded: true,
            reverse: true,
            animationSecs: 2,
            segments: [
                new gauge_segment_1.GaugeSegment({
                    value: 4,
                    color: this.colors.orange,
                    radius: 20,
                    borderWidth: 16
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 8,
                    color: this.colors.purple,
                    radius: 36,
                    borderWidth: 16
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 15,
                    color: this.colors.yellow,
                    radius: 52,
                    borderWidth: 16
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 16,
                    color: this.colors.cyan,
                    radius: 68,
                    borderWidth: 16
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 23,
                    color: this.colors.pink,
                    radius: 84,
                    borderWidth: 16
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 42,
                    color: this.colors.mint,
                    radius: 100,
                    borderWidth: 16
                })
            ]
        };
        this.laneGraph = {
            bgRadius: 100,
            bgColor: this.colors.indigo,
            rounded: true,
            reverse: true,
            animationSecs: 5,
            segments: [
                new gauge_segment_1.GaugeSegment({
                    value: 4,
                    color: this.colors.mint,
                    bgColor: this.colors.mint + "22",
                    radius: 85,
                    borderWidth: 2
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 8,
                    color: this.colors.pink,
                    bgColor: this.colors.pink + "22",
                    radius: 70,
                    borderWidth: 2
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 15,
                    color: this.colors.cyan,
                    bgColor: this.colors.cyan + "22",
                    radius: 55,
                    borderWidth: 2
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 16,
                    color: this.colors.yellow,
                    bgColor: this.colors.yellow + "22",
                    radius: 40,
                    borderWidth: 2
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 23,
                    color: this.colors.purple,
                    bgColor: this.colors.purple + "22",
                    radius: 25,
                    borderWidth: 2
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 42,
                    color: this.colors.orange,
                    bgColor: this.colors.orange + "22",
                    radius: 10,
                    borderWidth: 2
                })
            ]
        };
        this.pieGraph = {
            bgRadius: 100,
            bgColor: this.colors.indigo,
            rounded: false,
            reverse: false,
            animationSecs: 3,
            borderWidth: 100,
            segments: [
                new gauge_segment_1.GaugeSegment({
                    value: 4,
                    goal: 42,
                    color: this.colors.pink
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 8,
                    goal: 42,
                    color: this.colors.orange
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 15,
                    goal: 42,
                    color: this.colors.yellow
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 16,
                    goal: 42,
                    color: this.colors.cyan
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 23,
                    goal: 42,
                    color: this.colors.purple
                }),
                new gauge_segment_1.GaugeSegment({
                    value: 42,
                    goal: 42,
                    color: this.colors.mint
                })
            ]
        };
        this.progressGraph = {
            bgRadius: 60,
            bgColor: this.colors.indigo,
            rounded: false,
            reverse: false,
            animationSecs: 1,
            labels: [
                new gauge_label_1.GaugeLabel({
                    color: this.colors.white,
                    text: 'Loaded',
                    x: 0,
                    y: 20,
                    fontSize: '1em'
                }),
                new gauge_label_1.GaugeLabel({
                    color: this.colors.pink,
                    text: '81%',
                    x: 0,
                    y: 0,
                    fontSize: '2em'
                })
            ],
            segments: [
                new gauge_segment_1.GaugeSegment({
                    value: 81,
                    color: this.colors.pink,
                    borderWidth: 20
                })
            ]
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map