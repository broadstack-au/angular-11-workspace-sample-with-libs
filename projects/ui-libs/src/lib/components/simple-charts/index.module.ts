import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import { SimpleBarChartComponent } from './barchart.component';

@NgModule({
  declarations: [
    SimpleBarChartComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [
    SimpleBarChartComponent
  ]
})
export class SimpleChartsModule { }
