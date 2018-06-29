# ng-gauge
Flexible gauge graph made with SVG ang Angular2 that can be used as pie chart too.

As seen on Angularbeers http://www.meetup.com/AngularJS-Beers/events/234753624/



## Installing
ng-gauge is available via npm
```bash
npm install ng-gauge -S
```

Import GaugeModule in your module
```typescript
import { GaugeModule } from 'ng-gauge';
```
And the models where you need them
```typescript
import { GaugeSegment, GaugeLabel } from 'ng-gauge';
```


## Usage:
```html
<ng-gauge></ng-gauge>
```
Set a width and height for the gauge and it will scale accordingly.

Example code can be checked in `src/app/app.html` 


## Options:
* rounded: boolean = true          | whether linecap should be rounded
* reverse: boolean = false         | segments are sorted by value. whether drawing order should be sorted
* animationSecs: number = 0.5      | animation of lines when changing values
* bgRadius: number = 100           | radius of background circle
* bgColor: string                  | color of background circle
* label: GaugeLabel[]              | labels to be displayed
* segments: GaugeSegment[]         | info to be displayed

*GaugeSegment* is a class you *MUST* use and it has the following properties:
* radius: number = 100             | outer radius of this segment (border is painted inside)
* goal: number = 100               | maximum value for given segment
* value: number                    | value to be represented
* color: string                    | color of the segments
* bgColor: string = 'transparent'  | background color of this segment
* borderWidth: number = 100        | width of the border. Gets painted inside radius

*GaugeLabel* is a class you CAN use and it has the following properties:
* color: string                    | color of this label
* text: string                     | content of this label
* x: number = 0                    | x from starting point (center center)
* y: number = 0                    | y from starting point (center center)
* fontSize: string = '1em'         | font size of this label


## Known issues:
* IE11 does not show animations
* IE11 does not show straight lines when displaying full pie chart
