import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeChartComponent } from './gauge-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GaugeChartComponent],
  exports: [GaugeChartComponent]
})
export class GaugeChartModule { }
