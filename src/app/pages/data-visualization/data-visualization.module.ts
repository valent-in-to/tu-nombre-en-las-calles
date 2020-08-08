import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { DataVisualizationRoutingModule } from './data-visualization-routing.module';



@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    DataVisualizationRoutingModule
  ],
  
})
export class DataVisualizationModule { }
