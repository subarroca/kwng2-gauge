/**
 * @category   Module
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
 **/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaugeComponent } from './gauge.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GaugeComponent],
  exports: [GaugeComponent]
})
export class GaugeModule { }
