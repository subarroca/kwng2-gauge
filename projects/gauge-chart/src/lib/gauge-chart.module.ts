import { NgModule } from '@angular/core';
import { GaugeChartComponent } from './gauge-chart.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [GaugeChartComponent],
  imports: [
    CommonModule
  ],
  exports: [GaugeChartComponent]
})
export class GaugeChartModule {}
