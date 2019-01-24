# ng-gauge
Flexible gauge graph made with SVG and Angular 6 that can be used as pie chart too.

As seen on Angularbeers http://www.meetup.com/AngularJS-Beers/events/234753624/

## Installing
ng-gauge is available via npm
```bash
npm install ng-gauge -S
```

Or to use this git version:
```bash
npm install glaucoma-australia/gauge -S
```

Import GaugeModule in your module
```typescript
import { GaugeModule } from 'gauge-chart/dist';
```
And the models where you need them
```typescript
import { GaugeSegment, GaugeLabel } from 'gauge-chart/dist';
````


## Usage:
```html
<ng-gauge-chart></ng-gauge-chart>
```
Set a width and height for the gauge and it will scale accordingly.

Example code can be checked in `src/app/app.html` 


## Options:
* `rounded: boolean = true`          | whether linecap should be rounded
* `reverse: boolean = false`         | segments are sorted by value. whether drawing order should be sorted
* `animationSecs: number = 0.5`      | animation of lines when changing values
* `bgRadius: number = 100`           | radius of background circle
* `bgColor: string`                  | color of background circle
* `label: GaugeLabel[]`              | labels to be displayed
* `segments: GaugeSegment[]`         | info to be displayed

*GaugeSegment* is a class you *MUST* use and it has the following properties:
* `radius: number = 100`             | outer radius of this segment (border is painted inside)
* `goal: number = 100`               | maximum value for given segment
* `value: number`                    | value to be represented
* `color: string`                    | color of the segments
* `bgColor: string = 'transparent'`  | background color of this segment
* `borderWidth: number = 100`        | width of the border. Gets painted inside radius

*GaugeLabel* is a class you CAN use and it has the following properties:
* `color: string`                    | color of this label
* `text: string`                     | content of this label
* `x: number = 0`                    | x from starting point (center center)
* `y: number = 0`                    | y from starting point (center center)
* `fontSize: string = '1em'`         | font size of this label


## Known issues:
* IE11 does not show animations
* IE11 does not show straight lines when displaying full pie chart


---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
