import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaugeChartModule } from '../../projects/gauge-chart/src/lib/gauge-chart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, GaugeChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
