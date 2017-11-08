/**
 * @category   Module
 * @package    com.kiwity.gauge.app
 * @author     Salvador Subarroca (subarroca@gmail.com)
 **/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaugeModule } from './gauge/gauge.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
